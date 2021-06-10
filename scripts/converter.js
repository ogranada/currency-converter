
import { APIManager } from './api_manager';

export class Converter extends APIManager {

  constructor() {
    super('http://api.exchangeratesapi.io/v1', '7a1b773b0de57b3908763626c50e1a24');
    this.validExchanges = null;
  }

  /**
   * Prepare converter valid symbols
   */
  async prepare() {
    const info = await this.getInfo('/symbols');
    if (info.success) {
      this.validExchanges = info.symbols
    } else {
      this.validExchanges = [];
    }
  }

  /**
   *
   * @param {Number} amount value to be converted
   * @param {String} from source currency
   * @param {String} to target currency
   * @param {Date|String} date date currency
   * @returns
   */
  async convert(from, amount, to, amount2, date = new Date()) {
    try {
      if (amount === 0 || !from || !to) {
        return {
          of: false
        };
      }
      let dateValue = date;
      if (typeof date !== 'string') {
        dateValue = date?.toISOString ? date.toISOString().split('T')[0] : date;
      }
      const now = new Date();
      const futureCheck = new Date(dateValue);
      if (futureCheck > now) {
        throw new Error('Invalid date');
      }

      const euroToCurrency = await this.getInfo(dateValue ? `/${dateValue}` : '/latest', {
        symbols: `${from},${to}`
      });
      const oneEuroInSourceCurrency = euroToCurrency.rates[from] || 0;
      const oneEuroInTargetCurrency = euroToCurrency.rates[to] || 0;
      // if N <from currency> is eq. to 1 Euro and 1 Euro is eq. to M <to currency>
      //    so N <from currency> is equiv. to M <to currency>
      // if N <from currency> is equiv. to M <to currency>
      //    <amount> <from currency> is equiv. to:

      const transformed = oneEuroInSourceCurrency > 0 // Avoid Infinity value caused by zero division
        ? (amount * oneEuroInTargetCurrency / oneEuroInSourceCurrency)
        : 0;
      return {
        ok: true,
        source: {
          name: from,
          value: oneEuroInSourceCurrency
        },
        target: {
          name: to,
          value: oneEuroInTargetCurrency
        },
        amount,
        result: transformed
      }
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        error
      };
    }
  }

  /**
   * Create (if is necesary) and return a converter instance.
   * @returns {Converter} singletone instance
   */
  static async getInstance() {
    if (!Converter._instance) {
      Converter._instance = new Converter();
      await Converter._instance.prepare();
    }
    return Converter._instance;
  }

}

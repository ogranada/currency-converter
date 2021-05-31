import { Converter } from "./converter";
import { debounce } from "./utils";

export class CurrencyCard {

  // Statics
  static template = null;

  // Component Attribuites

  /** @type {Boolean} */
  updating = false;

  /** @type {Converter} */
  converter = null;

  /** @type {HTMLElement} */
  parentNode = null;

  /** @type {HTMLElement} */
  node = null;

  /** @type {HTMLElement} */
  btnRemove = null;

  /** @type {HTMLElement} */
  lastChanged = null;

  /** @type {HTMLInputElement} */
  txtSourceCurrency = null
  /** @type {HTMLInputElement} */
  txtTargetCurrency = null;
  /** @type {HTMLInputElement} */
  txtSearchDate = null;
  /** @type {HTMLSelectElement} */
  selectSourceCurrency = null;
  /** @type {HTMLSelectElement} */
  selectTargetCurrency = null;

  // expressed methods
  calculateResults = debounce((event) => this.doCurrencyCalculations(event), 100);

  /**
   *
   * @param {HTMLElement} parentNode place where the node will be inserted.
   */
  constructor(parentNode) {
    this.parentNode = parentNode;
    this.node = this.loadComponentNode();
    Converter.getInstance().then(converter => {
      this.converter = converter;
      this.prepareInitialInformation();
      this.prepareActions();
    })
    parentNode.appendChild(this.node);
  }

  prepareInitialInformation() {
    this.btnToggleCurrencies = this.node.querySelector('.CurrencyChanger-revertCurrencies');
    this.btnRemove = this.node.querySelector('.CurrencyChanger-remove');
    this.spanTitle = this.node.querySelector('.CurrencyChanger-headerTitle');
    this.selectSourceCurrency = this.node.querySelector('.CurrencyChanger-currencySelector.source');
    this.selectTargetCurrency = this.node.querySelector('.CurrencyChanger-currencySelector.target');
    this.sourceImg = this.node.querySelector('.CurrencyChanger-currencyImage.source');
    this.targetImg = this.node.querySelector('.CurrencyChanger-currencyImage.target');
    this.txtSourceCurrency = this.node.querySelector('.CurrencyChanger-currencyInput.source');
    this.txtTargetCurrency = this.node.querySelector('.CurrencyChanger-currencyInput.target');
    this.txtSearchDate = this.node.querySelector('.CurrencyChanger-searchDate');
    const date = new Date();
    const currentDate = date.toISOString().substring(0,10);
    this.txtSearchDate.value = currentDate;
    Object.keys(this.converter.validExchanges).forEach(currency => {
      const op1 = document.createElement('option');
      const op2 = document.createElement('option');
      op1.value = currency;
      op1.textContent = `${currency} - ${this.converter.validExchanges[currency]}`;
      op2.value = currency;
      op2.textContent = `${currency} - ${this.converter.validExchanges[currency]}`;
      this.selectSourceCurrency.appendChild(op1)
      this.selectTargetCurrency.appendChild(op2)
    });
    this.btnRemove.addEventListener('click', (event) => this.removeFromParent(event));
    this.btnToggleCurrencies.addEventListener('click', (event) => this.toggleCurrencies(event));
  }

  prepareActions() {
    const uiElements = [
      { widget: this.selectSourceCurrency, event: 'change' },
      { widget: this.selectTargetCurrency, event: 'change' },
      { widget: this.txtSearchDate, event: 'change' },
      { widget: this.txtSourceCurrency, event: 'input' },
      { widget: this.txtTargetCurrency, event: 'input' },
    ];
    uiElements.forEach(({widget, event}) => {
      widget.addEventListener(event, (e) => {
        setTimeout(() => {
          this.updateValues(e)
        }, 100);
      });
    });
  }

  toggleCurrencies(event) {
    let tmp;
    tmp = this.selectSourceCurrency.value;
    this.selectSourceCurrency.value = this.selectTargetCurrency.value;
    this.selectTargetCurrency.value = tmp;
    tmp = this.txtSourceCurrency.value;
    this.txtSourceCurrency.value = this.txtTargetCurrency.value;
    this.txtTargetCurrency.value = tmp;
    this.setUIImages(this.getCurrentInputValues());
  }

  setUIImages(values) {
    if (values.sourceCurrency) {
      this.sourceImg.src = this.getCurrencyImage(values.sourceCurrency);
    }
    if (values.targetCurrency) {
      this.targetImg.src = this.getCurrencyImage(values.targetCurrency);
    }
    if (values.sourceCurrency && values.targetCurrency) {
      this.spanTitle.textContent = `${values.sourceCurrency} to ${values.targetCurrency}`;
    } else {
      this.spanTitle.textContent = '...';
    }
  }

  /**
   *
   * @param {Object} values values to be setted
   * @param {HTMLElement} uiElement
   */
  setUIValues(values, uiElement) {
    if (uiElement !== this.selectSourceCurrency) {
      this.selectSourceCurrency.value = values.sourceCurrency;
    }
    if (uiElement !== this.txtSourceCurrency) {
      this.txtSourceCurrency.value = values.sourceCurrencyValue;
    }
    if (uiElement !== this.selectTargetCurrency) {
      this.selectTargetCurrency.value = values.targetCurrency;
    }
    if (uiElement !== this.txtTargetCurrency) {
      this.txtTargetCurrency.value = values.targetCurrencyValue;
    }
    if (uiElement !== this.txtSearchDate) {
      this.txtSearchDate.value = values.searchDate;
    }
  }

  getCurrentInputValues() {
    const sourceCurrency = this.selectSourceCurrency.value;
    const targetCurrency = this.selectTargetCurrency.value;
    const sourceCurrencyValue = Number(this.txtSourceCurrency.value);
    const targetCurrencyValue = Number(this.txtTargetCurrency.value);
    const searchDate = this.txtSearchDate.value;

    const values = {
      sourceCurrency,
      targetCurrency,
      sourceCurrencyValue,
      targetCurrencyValue,
      searchDate
    };
    return values;
  }

  async doCurrencyCalculations(event) {
    const uiElement = event.currentTarget || event.target;
    const sources = [this.selectSourceCurrency, this.txtSourceCurrency];
    const targets = [this.selectTargetCurrency, this.txtTargetCurrency];
    const others = [this.txtSearchDate];
    const values = this.getCurrentInputValues();
    if (sources.includes(uiElement)) {
      const { sourceCurrencyValue, targetCurrencyValue, sourceCurrency, targetCurrency, searchDate } = values;
      const conversion = await this.converter.convert(sourceCurrency, sourceCurrencyValue, targetCurrency, targetCurrencyValue, searchDate);
      if (conversion) {
        values.targetCurrencyValue = conversion.result;
        this.setUIValues(values, uiElement);
      }
    } else if (targets.includes(uiElement)) {
      const { sourceCurrencyValue, targetCurrencyValue, sourceCurrency, targetCurrency, searchDate } = values;
      const conversion = await this.converter.convert(targetCurrency, targetCurrencyValue, sourceCurrency, sourceCurrencyValue, searchDate);
      if (conversion) {
        values.sourceCurrencyValue = conversion.result;
        this.setUIValues(values, uiElement);
      }
    } else if (others.includes(uiElement)) {
      if (!others.includes(this.lastChanged)) {
        this.doCurrencyCalculations({currentTarget: this.lastChanged});
      }
    }
    this.lastChanged = uiElement;
    this.updating = false;
  }

  /**
   * Update values
   * @param {Event} event
   */
  updateValues(event) {
    if (!this.updating) {
      this.updating = true;
      const values = this.getCurrentInputValues();
      this.setUIImages(values);
      this.calculateResults(event);
    }
  }

  /**
   *
   * @param {String} countryCode country code string
   * @returns
   */
  getCurrencyImage(countryCode) {
    if (countryCode.length < 3) {
      return ''
    }
    return `https://www.countryflags.io/${countryCode.toLowerCase().substr(0, 2)}/shiny/64.png`;
  }

  removeFromParent() {
    this.node.parentNode.removeChild(this.node);
  }

  loadComponentNode() {
    if (!CurrencyCard.template) {
      CurrencyCard.template = document.getElementById('currencyChangeTemplate');
    }
    const clone = document.importNode(CurrencyCard.template.content, true);
    return clone.querySelector('.CurrencyChanger');
  }

}


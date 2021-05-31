import { Converter } from "./converter";

export class CurrencyCard {
  // Statics
  static template = null;

  // Component Attribuites

  /** @type {Converter} */
  converter = null;

  /** @type {HTMLElement} */
  parentNode = null;

  /** @type {HTMLElement} */
  node = null;

  /**
   *
   * @param {HTMLElement} parentNode place where the node will be inserted.
   */
  constructor(parentNode) {
    this.parentNode = parentNode;
    this.node = this.loadComponentNode();
    Converter.getInstance().then(converter => {
      this.converter = converter;
    })
    parentNode.appendChild(this.node);
  }

  loadComponentNode() {
    if (!CurrencyCard.template) {
      CurrencyCard.template = document.getElementById('currencyChangeTemplate');
    }
    const clone = document.importNode(CurrencyCard.template.content, true);
    return clone.querySelector('.CurrencyChanger');
  }

}


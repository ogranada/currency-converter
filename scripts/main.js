import 'regenerator-runtime/runtime';

import { CurrencyCard } from "./currency-card";

function main() {
  const container = document.querySelector('.ContentWrapper-content');
  document.querySelector('.addCurrency').addEventListener('click', () => {
    new CurrencyCard(container);
  });
  const initialCard = new CurrencyCard(container);
}

main();

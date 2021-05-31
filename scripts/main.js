
function getCard() {
  const template = document.getElementById('currencyChangeTemplate');
  const clone = document.importNode(template.content, true);
  return clone.querySelector('.CurrencyChanger');
}

function main() {
  const container = document.querySelector('.ContentWrapper-content');
  document.querySelector('.addCurrency').addEventListener('click', () => {
    const card = getCard();
    container.appendChild(card);
  });
}

main();

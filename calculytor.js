// Простой калькулятор стоимости
const cleanType = document.getElementById("cleanType");
const areaInput = document.getElementById("area");
const windows = document.getElementById("windows");
const sofa = document.getElementById("sofa");
const carpet = document.getElementById("carpet");
const balcony = document.getElementById("balcony");
const totalEl = document.getElementById("totalPrice");

// Цены за м² и допы
const basePrices = {
  support: 250,
  general: 450,
  afterRepair: 750,
};

const extraPrices = {
  windows: 5000,
  sofa: 8000,
  carpet: 6000,
  balcony: 4000,
};

function updatePrice() {
  const type = cleanType.value;
  const area = Number(areaInput.value) || 0;

  if (area < 20) {
    totalEl.textContent = "от 20 м²";
    return;
  }

  let price = area * basePrices[type];

  if (windows.checked) price += extraPrices.windows;
  if (sofa.checked) price += extraPrices.sofa;
  if (carpet.checked) price += extraPrices.carpet;
  if (balcony.checked) price += extraPrices.balcony;

  totalEl.textContent = Math.round(price).toLocaleString("ru-RU") + " тг";
}

// Слушатели
cleanType.addEventListener("change", updatePrice);
areaInput.addEventListener("input", updatePrice);
windows.addEventListener("change", updatePrice);
sofa.addEventListener("change", updatePrice);
carpet.addEventListener("change", updatePrice);
balcony.addEventListener("change", updatePrice);

// Первый расчёт
updatePrice();

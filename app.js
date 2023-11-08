const rangeBox = document.getElementById("rangeBox");
const range1 = document.getElementById("range");
rangeBox.innerText = range1.value;
range1.addEventListener("input", () => {
  rangeBox.innerText = range1.value;
});
const rangeBox2 = document.getElementById("rangeBox2");
const range2 = document.getElementById("range2");
rangeBox2.innerText = range2.value;
range2.addEventListener("input", () => {
  rangeBox2.innerText = range2.value;
});
const rangeBox3 = document.getElementById("rangeBox3");
const range3 = document.getElementById("range3");
rangeBox3.innerText = range3.value;
range3.addEventListener("input", () => {
  rangeBox3.innerText = range3.value;
});


const range = document.getElementById("range3");
const resultDiv = document.getElementById("result");


range.addEventListener("input", function () {
  const rangeValue = parseFloat(range.value);
  if (rangeValue >= 0 && rangeValue <= 0.1) {
    resultDiv.textContent = "0.75 USD - " + parseInt(0.75 * 1.7) + " AZN";
  } else if (rangeValue >= 0.1 && rangeValue <= 0.25) {
    resultDiv.textContent = "1.00 USD - " + parseInt(1 * 1.7) + " AZN";
  } else if (rangeValue >= 0.25 && rangeValue <= 0.5) {
    resultDiv.textContent = "2.50 USD - " + parseInt(2.5 * 1.7) + "AZN";
  } else if (rangeValue >= 0.5 && rangeValue <= 0.75) {
    resultDiv.textContent = "3.50 USD - " + parseInt(3.5 * 1.7) + " AZN";
  } else if (rangeValue >= 0.75 && rangeValue <= 1) {
    resultDiv.textContent = "4.00 USD - " + parseInt(4 * 1.7) + " AZN";
  } else if (rangeValue >= 1 && rangeValue <= 5) {
    resultDiv.textContent = "4.00 USD - " + parseInt(4 * 1.7) + " AZN";
  } else if (rangeValue >= 5 && rangeValue <= 10) {
    resultDiv.textContent = "3.50 USD - " + parseInt(3.5 * 1.7) + " AZN";
  } else if (rangeValue >= 10) {
    resultDiv.textContent = "3.00 USD - " + parseInt(3 * 1.7) + " AZN";
  } else {
    resultDiv.textContent = "";
  }
});

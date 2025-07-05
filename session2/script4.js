const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const result = document.getElementById("result");
const calculate = document.getElementById("calculateBtn");

calculate.addEventListener("click", function () {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    result.textContent = "Please enter valid numbers.";
    result.style.color = "red";
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  result.textContent =
    "Tip: RM " + tip.toFixed(2) + " | Total: RM " + total.toFixed(2);
});

// We can rewrite the result using template literals instead of concatenating strings
// Exercise: add a function to divide the bill according to persons to share

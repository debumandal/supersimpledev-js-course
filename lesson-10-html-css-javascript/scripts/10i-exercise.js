function displayPage() {
  document.querySelector(".js-display").innerHTML = calculation;
}

let calculation = localStorage.getItem("calculation") || "";

displayPage();

function updateCalculation(value) {
  calculation += value;
  localStorage.setItem("calculation", calculation);
  console.log(calculation);
  displayPage();
}

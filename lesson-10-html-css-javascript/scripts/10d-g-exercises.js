function toggleMode(selector) {
  const button = document.querySelector(selector);

  if (!button.classList.contains("is-toggled") && button) {
    turnoffPreviousButton();
    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
  }
}

function turnoffPreviousButton() {
  const previousButton = document.querySelector(".is-toggled");
  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}

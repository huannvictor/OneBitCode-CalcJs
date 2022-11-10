import {
  input,
  copyButton,
  charKey,
  allowedKeys,
} from "./modules/declarations.js";

import {
  clear,
  restartCopyButton,
  calculate,
  copyToClipboard,
} from "./modules/functions.js";

import { themeSwitcher } from "./modules/themeSwitcher.js";

charKey.forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value;
    input.value += value;

    restartCopyButton();
  });
});

input.addEventListener("keydown", (event) => {
  event.preventDefault();

  if (allowedKeys.includes(event.key)) {
    input.value += event.key;
    return;
  }

  if (event.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  if (event.key === "Enter") {
    calculate();
  }
});

document
  .getElementById("clear")
  .addEventListener("click", () => (clear(), restartCopyButton()));
document
  .getElementById("equal")
  .addEventListener("click", () => (calculate(), restartCopyButton()));

document
  .getElementById("themeSwitcher")
  .addEventListener("click", () => themeSwitcher());

copyButton.addEventListener("click", (event) => copyToClipboard(event));

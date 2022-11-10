import { themeSwitcher } from "./modules/themeSwitcher.js";
import { handleButtonPress, handleTyping } from "./modules/handlers.js";
import { input, copyButton, charKey } from "./modules/declarations.js";
import {
  clear,
  restartCopyButton,
  calculate,
  copyToClipboard,
} from "./modules/functions.js";

charKey.forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

input.addEventListener("keydown", handleTyping);

copyButton.addEventListener("click", copyToClipboard);

document
  .getElementById("clear")
  .addEventListener("click", () => (clear(), restartCopyButton()));

document
  .getElementById("equal")
  .addEventListener("click", () => (calculate(), restartCopyButton()));

document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);

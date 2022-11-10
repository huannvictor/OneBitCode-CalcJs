import { allowedKeys, input } from "./declarations.js";
import { calculate, restartCopyButton } from "./functions.js";

function handleButtonPress(event) {
  const value = event.currentTarget.dataset.value;
  input.value += value;

  restartCopyButton();
}

function handleTyping(event) {
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
}

export { handleButtonPress, handleTyping };

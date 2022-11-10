import { input, resultInput, copyButton } from "./declarations.js";

function clear() {
  input.value = "";
  input.focus();
}

function restartCopyButton() {
  copyButton.classList.remove("success");
  copyButton.innerText = "Copy";
}

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
  clear();
}

function copyToClipboard(event) {
  const button = event.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("success");

    navigator.clipboard.writeText(resultInput.value);

    resultInput.value = "";
  }
}

export { clear, restartCopyButton, calculate, copyToClipboard };

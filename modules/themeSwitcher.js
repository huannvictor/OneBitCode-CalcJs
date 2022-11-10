import { main, root } from "./declarations.js";

export function themeSwitcher() {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#333");
    root.style.setProperty("--primary-color", "#1db055");

    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#333");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#fff");
    root.style.setProperty("--primary-color", "#4dff91");

    main.dataset.theme = "dark";
  }
}

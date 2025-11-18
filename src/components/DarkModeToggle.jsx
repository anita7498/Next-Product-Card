"use client";
import { useDarkMode } from "./DarkModeProvider";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  const toggle = () => {
    toggleTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="px-4 py-2 bg-gray-200 dark:bg-gray-500 text-black dark:text-white rounded"
      onClick={toggle}
    >
      Toggle {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}

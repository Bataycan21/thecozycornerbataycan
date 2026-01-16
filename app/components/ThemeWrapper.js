"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ThemeWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <header className="border-b bg-blue-100 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl flex justify-between items-center p-4">
          <h1 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
            The Cozy Corner
          </h1>
          <nav className="space-x-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/books">Books</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-6">{children}</main>

      <footer className="text-center text-sm text-gray-600 dark:text-gray-400 py-6">
        © 2026 The Cozy Corner
      </footer>
    </div>
  );
}

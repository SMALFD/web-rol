"use client"; // Required for client-side interactivity
import { useState, useEffect } from "react";
import Navbar from "../navbar/navbar"; // Import your Navbar

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const [theme, setTheme] = useState("classic-theme");

  useEffect(() => {
    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "classic-theme";
    setTheme(savedTheme);
    document.body.className = savedTheme; // Apply the saved theme
  }, []);

  function handleThemeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newTheme = event.target.value;
    setTheme(newTheme);
    document.body.className = newTheme; // Apply the theme to <body>
    localStorage.setItem("theme", newTheme); // Save the theme
  }

  return (
    <div>
      <Navbar theme={theme} onThemeChange={handleThemeChange} />
      <main>{children}</main>
    </div>
  );
};

export default ThemeWrapper;
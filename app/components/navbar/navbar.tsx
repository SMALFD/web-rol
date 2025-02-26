"use client"; // Required for interactivity
import Link from "next/link";

interface NavbarProps {
  theme: string;
  onThemeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onThemeChange }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Liga de Rol ASCFI</h1>
      <div className="navbar-container">
        <div className="navbar-links">
          <Link href="/wiki/liga_de_rol">Home</Link>
        </div>

        <div className="settings-nav">
          {/* Theme Selector Dropdown */}
          <select value={theme} onChange={onThemeChange}>
            <option value="classic-theme">Classic Theme</option>
            <option value="light-theme">Light Theme</option>
            <option value="dark-theme">Dark Theme</option>
            <option value="matrix-theme">Matrix Theme</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
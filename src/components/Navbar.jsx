import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className="site-navbar">
      <div className="site-navbar__inner">
        <Link to="/" className="site-navbar__brand">
          <span className="site-navbar__badge">SR</span>
          <div>
            <p className="site-navbar__eyebrow">Kitchen Companion</p>
            <strong>Smart Recipe Finder</strong>
          </div>
        </Link>

        <button
          type="button"
          className="site-navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="site-navbar-links"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span
            className={`site-navbar__toggle-line site-navbar__toggle-line--top ${
              isMenuOpen ? "site-navbar__toggle-line--top-open" : ""
            }`}
          />
          <span
            className={`site-navbar__toggle-line site-navbar__toggle-line--middle ${
              isMenuOpen ? "site-navbar__toggle-line--middle-open" : ""
            }`}
          />
          <span
            className={`site-navbar__toggle-line site-navbar__toggle-line--bottom ${
              isMenuOpen ? "site-navbar__toggle-line--bottom-open" : ""
            }`}
          />
        </button>

        <div
          id="site-navbar-links"
          className={`site-navbar__links ${isMenuOpen ? "site-navbar__links--open" : ""}`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `site-navbar__link ${isActive ? "site-navbar__link--active" : ""}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <Link to="/#recipes" className="site-navbar__link" onClick={() => setIsMenuOpen(false)}>
            Browse Recipes
          </Link>
          <Link to="/recipe/1" className="site-navbar__cta" onClick={() => setIsMenuOpen(false)}>
            Featured Dish
          </Link>
        </div>
      </div>
    </nav>
  );
}

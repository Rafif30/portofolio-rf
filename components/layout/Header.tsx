"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import { useActiveNav } from "@/hooks/useActiveNav";

const NAV_LINKS = [
  { href: "#tentang", label: "About" },
  { href: "#keahlian", label: "Skills" },
  { href: "#pengalaman", label: "Experience" },
  { href: "#proyek", label: "Projects" },
  { href: "#kontak", label: "Contact" },
];

const NAV_HREFS = NAV_LINKS.map((l) => l.href);

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveNav(NAV_HREFS);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = useCallback(() => setIsNavOpen(false), []);

  // Close nav on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 820) closeNav();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeNav]);

  // Close nav on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (window.innerWidth > 820) return;
      const target = e.target as Node;
      const nav = document.getElementById("siteNav");
      const toggle = document.getElementById("navToggle");
      if (nav && toggle && !nav.contains(target) && !toggle.contains(target)) {
        closeNav();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [closeNav]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand */}
        <a className="brand" href="#home" aria-label="Imam Rafif Adrian home">
          <span className="brand-mark" aria-hidden="true">
            <Image 
              src="/logo-rp.svg" 
              alt="Logo Rf" 
              width={320}
              height={320}
            />
          </span>
          <span className="brand-copy">
            <strong>Imam Rafif Adrian</strong>
            <small>Fullstack Developer</small>
          </span>
        </a>

        {/* Mobile hamburger */}
        <button
          id="navToggle"
          className="nav-toggle"
          aria-expanded={isNavOpen}
          aria-controls="siteNav"
          aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>

        {/* Navigation */}
        <nav
          id="siteNav"
          className={`site-nav${isNavOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={activeId === href ? "is-active" : ""}
              aria-current={activeId === href ? "page" : undefined}
              onClick={() => {
                if (window.innerWidth <= 820) closeNav();
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Theme toggle */}
        <button
          className="theme-toggle"
          id="themeToggle"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={toggleTheme}
        >
          <span className="theme-toggle-track">
            <span className="theme-icon theme-icon-sun">Light</span>
            <span className="theme-icon theme-icon-moon">Dark</span>
          </span>
        </button>
      </div>
    </header>
  );
}

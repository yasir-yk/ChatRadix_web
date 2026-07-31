"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm"
          : "bg-white/60 backdrop-blur-sm py-4 border-b border-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center transition-transform hover:opacity-90">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0080FB] relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0080FB] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            {/* <a
              href="#contact"
              className="text-sm font-semibold text-slate-700 hover:text-[#0080FB] transition-colors"
            >
              Login
            </a> */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0080FB] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#0080FB]/20 transition-all duration-300 hover:bg-[#0066cc] hover:shadow-lg hover:shadow-[#0080FB]/30 hover:scale-[1.02]"
            >
              Get App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 md:hidden transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 py-6 px-6 shadow-xl transition-all duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-[#0080FB] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <hr className="my-2 border-slate-100" />
            <div className="flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center text-sm font-semibold text-slate-700 py-2 hover:text-[#0080FB]"
              >
                Login
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center rounded-full bg-[#0080FB] py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#0066cc]"
              >
                Install on Shopify
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

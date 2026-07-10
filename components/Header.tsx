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
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/75 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center transition-transform hover:scale-102">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-meta-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-meta-blue to-cyan-500 p-[1.5px] font-semibold text-white shadow-lg shadow-meta-blue/20 transition-all duration-300 hover:shadow-meta-blue/40 hover:scale-105"
            >
              <span className="rounded-full bg-[#030712] px-6 py-2 text-sm transition-all duration-300 hover:bg-transparent">
                Get App
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 md:hidden transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#030712]/95 backdrop-blur-lg border-b border-slate-800 py-6 px-6 shadow-2xl transition-all duration-300">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full text-center rounded-full bg-gradient-to-r from-meta-blue to-cyan-500 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              Get App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

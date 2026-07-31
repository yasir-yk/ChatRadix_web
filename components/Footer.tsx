"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800 bg-[#0b132b] text-white py-14 md:py-18 overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-1 flex flex-col gap-5">
            {/* White background box behind footer logo */}
            <div className="bg-white p-3.5 rounded-2xl shadow-lg border border-slate-200 inline-flex items-center justify-center self-start">
              <Logo imgClassName="w-[180px] h-[70px] sm:w-[200px] sm:h-[80px]" />
            </div>

            <p className="mt-1 text-sm text-slate-300 leading-relaxed">
              Official Meta API partner integrating WhatsApp messaging into Shopify storefronts for automated ordering, cart recovery, and customer support.
            </p>

            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-emerald-400 hover:border-emerald-500 transition-colors shadow-sm"
                title="LinkedIn"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h3 className="text-xs font-extrabold text-white uppercase tracking-widest mb-4">NAVIGATION</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support Col */}
          <div>
            <h3 className="text-xs font-extrabold text-white uppercase tracking-widest mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-slate-300 hover:text-emerald-400 cursor-pointer transition-colors">
                  API Status
                </span>
              </li>
              <li>
                <span className="text-sm text-slate-300 hover:text-emerald-400 cursor-pointer transition-colors">
                  Help Center
                </span>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="text-sm text-slate-300 hover:text-emerald-400 cursor-pointer transition-colors">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-xs font-extrabold text-white uppercase tracking-widest mb-4">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-slate-300">
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@chatradix.com" className="hover:text-emerald-400 transition-colors break-all">
                  info@chatradix.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">171, UMER BLOCK, SECTOR-B, BAHRIA TOWN, Lahore</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {currentYear} ChatRadix. All rights reserved. Meta Business Partner.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-emerald-400 flex items-center gap-1 transition-colors text-slate-300 font-medium"
            >
              <Shield className="h-3.5 w-3.5" /> Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

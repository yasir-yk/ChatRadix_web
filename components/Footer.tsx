"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Mail, Phone, MessageSquare, Shield, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-900 bg-[#030712] py-12 md:py-16 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-meta-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="mt-2 text-sm text-slate-400 max-w-sm leading-relaxed">
              Official Meta API partner integration that helps scaling Shopify merchants automate ordering, cart recovery, and customer support via WhatsApp.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="mailto:chatradix@gmail.com"
                className="flex items-center justify-center h-9 w-9 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="Email Us"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/923065335593"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="WhatsApp Support"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details / Support Col */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact & Support</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="h-4 w-4 text-meta-blue flex-shrink-0" />
                <a href="mailto:chatradix@gmail.com" className="hover:text-white transition-colors break-all">
                  chatradix@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="h-4 w-4 text-meta-blue flex-shrink-0" />
                <a href="tel:+923065335593" className="hover:text-white transition-colors">
                  +923065335593
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <MessageSquare className="h-4 w-4 text-green-500 flex-shrink-0" />
                <a
                  href="https://wa.me/923065335593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Live WhatsApp Chat <ExternalLink className="h-3 w-3 inline" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} ChatRadix. All rights reserved. Built with Meta official API compliance.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white flex items-center gap-1 transition-colors text-slate-400 font-medium"
            >
              <Shield className="h-3.5 w-3.5" /> Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

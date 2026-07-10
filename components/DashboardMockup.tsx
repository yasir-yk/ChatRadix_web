"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, CheckCircle, TrendingUp, DollarSign, MessageSquare, ShieldCheck, User } from "lucide-react";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
  time: string;
  delay: number;
}

export default function DashboardMockup() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [cycleCount, setCycleCount] = useState(0);

  const fullConversation: Message[] = [
    {
      id: 1,
      sender: "bot",
      text: "👋 Hey Alex! We noticed you left some items in your cart. Grab them now and get 10% off using code *RADIX10*: chatradix.com/checkout",
      time: "10:24 AM",
      delay: 1,
    },
    {
      id: 2,
      sender: "user",
      text: "Oh awesome, thank you! Just completed my checkout now. 🙌",
      time: "10:26 AM",
      delay: 3.5,
    },
    {
      id: 3,
      sender: "bot",
      text: "Order Confirmed! 🎉 Thank you for your purchase. Your order *#CR-4829* has been processed. Here is your tracking link: chatradix.com/track/4829",
      time: "10:26 AM",
      delay: 5,
    },
  ];

  useEffect(() => {
    setMessages([]);
    const timers: NodeJS.Timeout[] = [];

    fullConversation.forEach((msg) => {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, msg]);
      }, msg.delay * 1000);
      timers.push(timer);
    });

    // Reset loop after 10 seconds
    const loopTimer = setTimeout(() => {
      setCycleCount((prev) => prev + 1);
    }, 11000);
    timers.push(loopTimer);

    return () => timers.forEach(clearTimeout);
  }, [cycleCount]);

  return (
    <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto rounded-2xl bg-slate-950/60 border border-slate-800/80 p-4 sm:p-6 shadow-2xl backdrop-blur-sm overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-meta-blue/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-glow/5 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none" />

      {/* Admin header */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Shopify Dashboard &bull; ChatRadix Core
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800/50">
          <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
          <span>Meta API Connected</span>
        </div>
      </div>

      {/* Main dashboard view */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Stat 1 */}
        <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Total Sales</span>
            <div className="p-1 rounded bg-meta-blue/10 text-meta-blue">
              <DollarSign className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <h4 className="text-sm sm:text-lg font-bold text-white">$45,290</h4>
            <span className="text-[10px] text-green-400 font-medium flex items-center gap-0.5">
              <TrendingUp className="h-2.5 w-2.5" /> +24% vs last week
            </span>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Cart Recovery</span>
            <div className="p-1 rounded bg-cyan-glow/10 text-cyan-400">
              <ShoppingCart className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <h4 className="text-sm sm:text-lg font-bold text-white">38.4%</h4>
            <span className="text-[10px] text-green-400 font-medium flex items-center gap-0.5">
              <TrendingUp className="h-2.5 w-2.5" /> +12% automation lift
            </span>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">WhatsApp ROI</span>
            <div className="p-1 rounded bg-green-500/10 text-green-400">
              <MessageSquare className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <h4 className="text-sm sm:text-lg font-bold text-white">12.5x</h4>
            <span className="text-[10px] text-green-400 font-medium flex items-center gap-0.5">
              <CheckCircle className="h-2.5 w-2.5" /> Direct attribution
            </span>
          </div>
        </div>
      </div>

      {/* SVG Sales Trend Chart */}
      <div className="bg-slate-900/20 border border-slate-900/80 rounded-xl p-4 h-32 relative">
        <span className="text-xs text-slate-400 absolute top-3 left-4">Revenue Trend (Real-time WhatsApp orders)</span>
        <svg className="w-full h-full pt-6" viewBox="0 0 400 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0668E1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0668E1" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          <line x1="0" y1="20" x2="400" y2="20" stroke="#1e293b" strokeOpacity="0.3" strokeDasharray="4 4" />
          <line x1="0" y1="50" x2="400" y2="50" stroke="#1e293b" strokeOpacity="0.3" strokeDasharray="4 4" />
          <line x1="0" y1="80" x2="400" y2="80" stroke="#1e293b" strokeOpacity="0.3" strokeDasharray="4 4" />
          {/* Chart area */}
          <path
            d="M0,80 Q50,75 100,60 T200,45 T300,20 T400,10 L400,100 L0,100 Z"
            fill="url(#chart-glow)"
          />
          {/* Chart line */}
          <path
            d="M0,80 Q50,75 100,60 T200,45 T300,20 T400,10"
            fill="none"
            stroke="#0668E1"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Data points */}
          <circle cx="200" cy="45" r="4" fill="#06b6d4" stroke="#030712" strokeWidth="2" />
          <circle cx="300" cy="20" r="4" fill="#0668E1" stroke="#030712" strokeWidth="2" />
          <circle cx="400" cy="10" r="4" fill="#22c55e" stroke="#030712" strokeWidth="2" />
        </svg>
      </div>

      {/* Floating WhatsApp chat Overlay */}
      <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-72 sm:w-80 rounded-2xl border border-slate-800/90 bg-[#070b19] shadow-2xl overflow-hidden z-10">
        
        {/* WhatsApp Chat Header */}
        <div className="bg-[#128c7e] py-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full bg-slate-900 border border-slate-700/50 flex items-center justify-center">
              <span className="text-xs font-black text-green-400">CR</span>
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border border-emerald-950" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h5 className="text-xs font-bold text-white">ChatRadix Checkout</h5>
                <span className="bg-white rounded-full p-0.5 flex items-center justify-center w-3 h-3">
                  <svg viewBox="0 0 24 24" className="w-2.2 h-2.2 fill-[#128c7e]">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
              </div>
              <span className="text-[10px] text-white/80">Shopify Official Automation</span>
            </div>
          </div>
          <span className="text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded text-white font-semibold tracking-wider uppercase">
            Meta API
          </span>
        </div>

        {/* Chat Area */}
        <div className="p-3 bg-[#0a0f1d] min-h-[160px] flex flex-col gap-2.5 max-h-[180px] overflow-y-auto no-scrollbar justify-end">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col max-w-[85%] ${
                  msg.sender === "bot" ? "self-start" : "self-end"
                }`}
              >
                <div
                  className={`p-2.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "bot"
                      ? "bg-slate-900 border border-slate-800 text-slate-100 rounded-tl-none"
                      : "bg-[#128c7e]/20 border border-[#128c7e]/40 text-emerald-100 rounded-tr-none"
                  }`}
                >
                  <p
                    className="whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{
                      __html: msg.text
                        .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                    }}
                  />
                  <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-slate-500">
                    <span>{msg.time}</span>
                    {msg.sender === "bot" ? (
                      <span className="text-green-500">✓✓</span>
                    ) : (
                      <span className="text-sky-400">✓✓</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Bar Placeholder */}
        <div className="border-t border-slate-900 p-2 bg-slate-950/50 flex items-center justify-between text-[11px] text-slate-500">
          <span>WhatsApp Chat encrypted</span>
          <span className="text-[10px] text-emerald-500 font-semibold bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-500/20">
            Verified Account
          </span>
        </div>

      </div>
    </div>
  );
}

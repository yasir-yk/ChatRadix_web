"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, CheckCircle, TrendingUp, DollarSign, MessageSquare, ShieldCheck, ShoppingBag } from "lucide-react";

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
      text: "👋 Hey Alex! You left items in your cart. Get 10% off with code *SAVE10*: chatradix.com/checkout",
      time: "10:24 AM",
      delay: 1,
    },
    {
      id: 2,
      sender: "user",
      text: "Awesome, thanks! Completed my purchase now. 🙌",
      time: "10:26 AM",
      delay: 3.5,
    },
    {
      id: 3,
      sender: "bot",
      text: "Order Confirmed! 🎉 Order *#CR-4829* has been processed. Track here: chatradix.com/track/4829",
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

    const loopTimer = setTimeout(() => {
      setCycleCount((prev) => prev + 1);
    }, 11000);
    timers.push(loopTimer);

    return () => timers.forEach(clearTimeout);
  }, [cycleCount]);

  return (
    <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto rounded-2xl bg-white border border-slate-200/80 p-4 sm:p-6 shadow-2xl overflow-hidden card-shadow">
      {/* Background radial primary blue glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0080FB]/10 blur-[90px] rounded-full -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#25D366]/10 blur-[90px] rounded-full -ml-32 -mb-32 pointer-events-none" />

      {/* Admin header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-[#25D366]" />
          <span className="ml-2 text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <ShoppingBag className="h-3.5 w-3.5 text-[#0080FB]" /> Shopify Store &bull; ChatRadix Core
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0080FB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
          <ShieldCheck className="h-3.5 w-3.5 text-[#0080FB]" />
          <span>Meta API Connected</span>
        </div>
      </div>

      {/* Metric Stats Cards */}
      <div className="grid grid-cols-3 gap-3.5 mb-5">
        {/* Stat 1 */}
        <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500">Total Sales</span>
            <div className="p-1 rounded bg-blue-100 text-[#0080FB]">
              <DollarSign className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">$48,920</h4>
            <span className="text-[10px] text-[#25D366] font-semibold flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="h-2.5 w-2.5" /> +24% vs last week
            </span>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500">Cart Recovery</span>
            <div className="p-1 rounded bg-blue-100 text-[#0080FB]">
              <ShoppingCart className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">38.4%</h4>
            <span className="text-[10px] text-[#25D366] font-semibold flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="h-2.5 w-2.5" /> +12% lift
            </span>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500">WhatsApp ROI</span>
            <div className="p-1 rounded bg-emerald-100 text-emerald-600">
              <MessageSquare className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">12.5x</h4>
            <span className="text-[10px] text-[#25D366] font-semibold flex items-center gap-0.5 mt-0.5">
              <CheckCircle className="h-2.5 w-2.5" /> Direct attribution
            </span>
          </div>
        </div>
      </div>

      {/* SVG Sales Trend Chart */}
      <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 h-32 relative">
        <span className="text-[11px] font-bold text-slate-500 absolute top-3 left-4">
          Real-time WhatsApp Revenue Flow
        </span>
        <svg className="w-full h-full pt-6" viewBox="0 0 400 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="blue-chart-glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0080FB" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0080FB" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="20" x2="400" y2="20" stroke="#e2e8f0" strokeDasharray="4 4" />
          <line x1="0" y1="50" x2="400" y2="50" stroke="#e2e8f0" strokeDasharray="4 4" />
          <line x1="0" y1="80" x2="400" y2="80" stroke="#e2e8f0" strokeDasharray="4 4" />
          <path
            d="M0,80 Q50,70 100,55 T200,40 T300,18 T400,8 L400,100 L0,100 Z"
            fill="url(#blue-chart-glow)"
          />
          <path
            d="M0,80 Q50,70 100,55 T200,40 T300,18 T400,8"
            fill="none"
            stroke="#0080FB"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="200" cy="40" r="4" fill="#0066cc" stroke="#ffffff" strokeWidth="2" />
          <circle cx="300" cy="18" r="4" fill="#0080FB" stroke="#ffffff" strokeWidth="2" />
          <circle cx="400" cy="8" r="4.5" fill="#25D366" stroke="#ffffff" strokeWidth="2" />
        </svg>
      </div>

      {/* Floating WhatsApp Overlay Card */}
      <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-72 sm:w-80 rounded-2xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden z-10">
        {/* WhatsApp Header */}
        <div className="bg-[#075e54] py-3 px-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-white">
              CR
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-emerald-900" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h5 className="text-xs font-bold">ChatRadix Flow</h5>
                <span className="bg-emerald-400 rounded-full p-0.5 flex items-center justify-center w-3 h-3 text-[#075e54]">
                  ✓
                </span>
              </div>
              <span className="text-[10px] text-white/80">Meta Official Automation</span>
            </div>
          </div>
          <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-semibold uppercase">
            Official
          </span>
        </div>

        {/* Message Thread */}
        <div className="p-3 bg-[#e5ddd5]/30 min-h-[160px] flex flex-col gap-2.5 max-h-[180px] overflow-y-auto no-scrollbar justify-end">
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
                  className={`p-2.5 rounded-xl text-xs leading-relaxed shadow-xs ${
                    msg.sender === "bot"
                      ? "bg-white text-slate-800 border border-slate-100 rounded-tl-none"
                      : "bg-[#dcf8c6] text-slate-900 rounded-tr-none"
                  }`}
                >
                  <p
                    className="whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{
                      __html: msg.text.replace(/\*(.*?)\*/g, "<strong>$1</strong>"),
                    }}
                  />
                  <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-slate-400">
                    <span>{msg.time}</span>
                    <span className="text-[#25D366] font-bold">✓✓</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer info bar */}
        <div className="border-t border-slate-100 p-2 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500">
          <span>End-to-End Encrypted</span>
          <span className="text-[10px] text-[#25D366] font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
            Meta Approved
          </span>
        </div>
      </div>
    </div>
  );
}

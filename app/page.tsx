"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  Mail,
  ShieldCheck,
  Zap
} from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const features = [
    {
      title: "Order Confirmations",
      desc: "Send instant purchase receipts automatically. Provide order summaries and build immediate customer trust.",
      badge: "AUTOMATED",
      imageSrc: "/order-confirmation.png"
    },
    {
      title: "Smart Cart Recovery",
      desc: "Recover 3x more carts than email. Automatically trigger WhatsApp reminders with personalized discount codes.",
      badge: "HIGH ROI",
      imageSrc: "/smart-cart-recovery.png"
    },
    {
      title: "Fulfillment & Shipping",
      desc: "Deliver real-time updates from dispatch to doorstep. Keep buyers updated and dramatically reduce WISMO tickets.",
      badge: "FULFILLMENT & SHIPPING",
      imageSrc: "/fulfillment-shipping.png"
    },
    {
      title: "Compliant Broadcasts",
      desc: "Launch flash sales & promotions with 98% open rates. Run campaigns with official Meta Green Tick compliance.",
      badge: "SAVE 90% MANUAL EFFORT",
      imageSrc: "/compliant-broadcasts.png"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Install from Shopify",
      desc: "Add ChatRadix to your store with one click. We sync seamlessly with your Shopify catalog and orders."
    },
    {
      number: "02",
      title: "Authenticate Meta API",
      desc: "Connect your Facebook Business Manager. Our setup wizard guides you through in under 5 minutes."
    },
    {
      number: "03",
      title: "Launch Automated Flows",
      desc: "Activate pre-configured templates for checkout recovery, order receipts, and shipping sync, then watch growth."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden pt-20 grid-bg">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] radial-glow pointer-events-none z-0" />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-10 pb-20 md:pt-16 md:pb-28 px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Meta Partner Pill Badge */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-emerald-700 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>OFFICIAL META PARTNER</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Automate{" "}
              <span className="text-[#0080FB]">
                Shopify WhatsApp
              </span>{" "}
              Flows
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Connect official Meta API, automate order updates, recover carts, and support buyers instantly with the world&apos;s most trusted messaging platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-[#0080FB] hover:bg-[#0066cc] shadow-lg shadow-[#0080FB]/25 hover:shadow-[#0080FB]/40 transition-all duration-300 hover:scale-[1.02] text-center flex items-center justify-center gap-2"
              >
                Install on Shopify <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-xs text-center"
              >
                Live Demo
              </a>
            </div>

            {/* Trust metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100 max-w-md mx-auto lg:mx-0 text-center lg:text-left mt-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">98%</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">OPEN RATE</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">45%+</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">CTR</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">3.2x</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">CONV. RATE</p>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Dashboard Visual */}
          <motion.div 
            className="lg:col-span-6 w-full relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES / ULTIMATE FLOWS SECTION --- */}
      <section id="features" className="py-20 md:py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#25D366]">ULTIMATE FLOWS</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engage Customers at Every Critical Touchpoint
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Convert browse sessions into sales, automate routine transaction notifications, and drive repeat purchases via official WhatsApp messaging.
          </p>
        </div>

        {/* Feature Grid (2x2) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={fadeInUp}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 card-shadow card-hover grid grid-cols-1 sm:grid-cols-12 gap-6 items-center overflow-hidden"
            >
              {/* Left Image Graphic Container */}
              <div className="sm:col-span-5 w-full h-44 rounded-2xl bg-indigo-50/50 border border-indigo-100/70 flex items-center justify-center p-3 relative overflow-hidden group-hover:bg-indigo-50/80 transition-colors">
                <Image
                  src={feat.imageSrc}
                  alt={feat.title}
                  width={220}
                  height={160}
                  className="max-h-38 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
                />
              </div>

              {/* Right Content */}
              <div className="sm:col-span-7 flex flex-col justify-between h-full gap-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0080FB] transition-colors duration-200">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-1 text-xs font-bold text-[#0080FB] group-hover:text-[#0066cc] transition-colors mt-2">
                  <span>Explore system</span>
                  <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- HOW IT WORKS / SIMPLE AUTOMATION SECTION --- */}
      <section id="how-it-works" className="py-20 md:py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#0080FB]">SIMPLE AUTOMATION</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works in 3 Quick Steps
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Zero complex coding required. Connect your storefront and launch.
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[50px] left-[18%] right-[18%] h-0.5 bg-slate-200 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                
                {/* Step Ring Icon */}
                <div className="h-24 w-24 rounded-full bg-white border-2 border-[#0080FB]/30 shadow-md flex items-center justify-center text-2xl font-black text-[#0080FB] relative transition-transform duration-300 group-hover:scale-105 group-hover:border-[#0080FB]">
                  <span>{step.number}</span>
                  <div className="absolute inset-1.5 rounded-full border border-blue-100" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-[#0080FB] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ONE CLICK META / DARK CONTRAST SECTION --- */}
      <section id="about" className="py-12 md:py-16 px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="bg-[#0b132b] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden relative">
          {/* Subtle background glow circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0080FB]/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0080FB]">ONE CLICK META</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Bridging the Gap Between Store Automation and Personal Messaging
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                At ChatRadix, we believe transactional updates and customer retention messages shouldn&apos;t live in crowded email spam folders. We built ChatRadix to bring scaling e-commerce brands closer to their buyers through official Meta WhatsApp API messaging.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-5 w-5 text-[#25D366]" />
                    <span className="text-sm font-bold text-white">Developer-Grade Security</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Fully encrypted communication paths linked directly to official Meta Cloud API endpoints.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-[#25D366]" />
                    <span className="text-sm font-bold text-white">Compliant Broadcasts</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Built-in templates adhering strictly to Meta WhatsApp Business green-tick policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Meta Partner Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-slate-900/80 border border-[#0080FB]/30 p-8 flex flex-col items-center text-center shadow-xl backdrop-blur-sm">
                
                <div className="h-16 w-16 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] mb-5 shadow-lg shadow-[#25D366]/20">
                  <CheckCircle2 className="h-9 w-9" />
                </div>

                <h4 className="text-xl font-bold text-white mb-2">Meta Partner Approved</h4>
                <span className="text-xs font-semibold text-[#25D366] mb-3">Official WhatsApp Cloud API</span>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  We leverage Meta&apos;s official WhatsApp Cloud API, guaranteeing maximum message delivery speed, green tick compatibility, and 0% risk of phone number blocking.
                </p>

                <div className="w-full flex flex-col gap-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                    <span className="font-semibold text-slate-200">Meta Cloud API Integration</span>
                    <span className="text-[#25D366] font-bold">✓ Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                    <span className="font-semibold text-slate-200">Shopify Order Sync</span>
                    <span className="text-[#25D366] font-bold">✓ Active</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTACT & LEAD FORM SECTION --- */}
      <section id="contact" className="py-20 md:py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#0080FB]">GET IN TOUCH</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ready to Recover Abandoned Sales?
          </p>
          <p className="mt-4 text-base text-slate-600">
            Have questions about integration, custom solutions, or Meta Cloud API pricing? Fill out the form or email directly with our team.
          </p>

          {/* Email Pill Badge Link */}
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-semibold text-[#0080FB] hover:bg-blue-100 transition-colors">
            <Mail className="h-4 w-4 text-[#0080FB]" />
            <a href="mailto:info@chatradix.com">info@chatradix.com</a>
          </div>
        </div>

        {/* Card Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl card-shadow">
            
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="h-14 w-14 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5 shadow-md">
                  <Check className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-600 max-w-sm">
                  Thank you for reaching out. One of our WhatsApp Commerce experts will respond to you within 2-4 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700">Fullname</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0080FB] focus:bg-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0080FB] focus:bg-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="storeUrl" className="text-xs font-bold uppercase tracking-wider text-slate-700">Shopify Store URL</label>
                  <input
                    id="storeUrl"
                    type="text"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0080FB] focus:bg-white transition-colors"
                    placeholder="your-store.myshopify.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0080FB] focus:bg-white transition-colors resize-none"
                    placeholder="How can we help your business grow?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0080FB] hover:bg-[#0066cc] font-bold text-sm text-white rounded-full shadow-lg shadow-[#0080FB]/25 hover:shadow-[#0080FB]/40 transition-all duration-300 hover:scale-[1.01]"
                >
                  Submit Inquiry
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}

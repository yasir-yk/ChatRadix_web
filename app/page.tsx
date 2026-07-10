"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  Play, 
  ArrowRight, 
  MessageSquare, 
  Percent, 
  Truck, 
  Send, 
  CheckCircle2, 
  ChevronRight, 
  Star, 
  Sparkles,
  ShieldAlert,
  HelpCircle,
  Mail,
  Phone,
  MessageCircle
} from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  } as const;

  const features = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-meta-blue" />,
      title: "Order Confirmations",
      desc: "Send instant purchase receipts automatically. Provide order summaries and build immediate customer trust.",
      badge: "Automated",
      gradient: "from-blue-500/10 to-indigo-500/5"
    },
    {
      icon: <Percent className="h-6 w-6 text-cyan-400" />,
      title: "Smart Cart Recovery",
      desc: "Recover 3x more carts than email. Automatically trigger WhatsApp reminders with personalized discount codes.",
      badge: "High ROI",
      gradient: "from-cyan-500/10 to-blue-500/5"
    },
    {
      icon: <Truck className="h-6 w-6 text-emerald-400" />,
      title: "Fulfillment & Shipping",
      desc: "Deliver real-time updates from dispatch to doorstep. Keep buyers updated and dramatically reduce WISMO tickets.",
      badge: "Syncs Live",
      gradient: "from-emerald-500/10 to-teal-500/5"
    },
    {
      icon: <Send className="h-6 w-6 text-purple-400" />,
      title: "Compliant Broadcasts",
      desc: "Launch flash sales & promotions with 98% open rates. Run campaigns with official Meta Green Tick compliance.",
      badge: "Bulk Meta API",
      gradient: "from-purple-500/10 to-pink-500/5"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Install from Shopify App Store",
      desc: "Add ChatRadix to your store with one click. We sync seamlessly with your Shopify catalog, orders, and customer data."
    },
    {
      number: "02",
      title: "Authenticate Official Meta API",
      desc: "Connect your Facebook Business Manager and WhatsApp Business Profile. Our setup wizard guides you through in under 5 minutes."
    },
    {
      number: "03",
      title: "Launch Automated Flows",
      desc: "Activate pre-configured templates for checkout recovery, order receipts, and shipping sync, then watch conversions grow."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen grid-bg overflow-x-hidden pt-12">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] radial-glow pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[400px] h-[400px] radial-glow-cyan pointer-events-none z-0" />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Meta Partner Badge */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-meta-blue/10 border border-meta-blue/20 text-xs font-semibold text-meta-blue">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Official Meta WhatsApp Cloud API Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Automate{" "}
              <span className="bg-gradient-to-r from-meta-blue to-cyan-400 bg-clip-text text-transparent">
                Shopify WhatsApp
              </span>{" "}
              Flows
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Connect official Meta API. Automate order updates, recover carts, and support buyers instantly.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-meta-blue to-cyan-500 hover:from-meta-blue hover:to-cyan-400 shadow-xl shadow-meta-blue/20 hover:shadow-meta-blue/40 transition-all duration-300 hover:scale-103 text-center flex items-center justify-center gap-2"
              >
                Install on Shopify <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-900/60 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <h3 className="text-2xl font-extrabold text-white">98%</h3>
                <p className="text-xs text-slate-400">Message Open Rate</p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">45%+</h3>
                <p className="text-xs text-slate-400">Click-Through Rate</p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">3.2x</h3>
                <p className="text-xs text-slate-400">Checkout Conversion Lift</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Dashboard Mockup */}
          <motion.div 
            className="lg:col-span-6 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES / AUTOMATION SECTION --- */}
      <section id="features" className="py-20 md:py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900 z-10 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-meta-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-bold uppercase tracking-widest text-meta-blue">Automate flows</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engage Customers at Every Critical Touchpoint
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Convert browse sessions into sales, automate routine transaction notifications, and drive repeat purchases via official WhatsApp messaging.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={fadeInUp}
              className={`group relative rounded-2xl border border-slate-900 bg-slate-950/40 p-8 glow-hover transition-all duration-300 overflow-hidden`}
            >
              {/* Card gradient bg element */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-meta-blue transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                  <span>Explore system</span>
                  <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- HOW IT WORKS / META INTEGRATION --- */}
      <section id="how-it-works" className="py-20 md:py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900 z-10 relative">
        <div className="absolute right-0 top-1/2 w-80 h-80 bg-cyan- glow/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-meta-blue">Simple Integration</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How It Works in 3 Quick Steps
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            No complex coding required. Connect your storefront, link your WhatsApp account, and launch high-impact automation.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-meta-blue via-slate-800 to-cyan-500 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                
                {/* Step Circle */}
                <div className="h-24 w-24 rounded-3xl bg-slate-950 border border-slate-800/80 flex items-center justify-center text-2xl font-black text-white relative shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:border-meta-blue">
                  <span className="bg-gradient-to-r from-meta-blue to-cyan-400 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                  {/* Subtle inner ring */}
                  <div className="absolute inset-1 rounded-[22px] border border-slate-900 group-hover:border-meta-blue/20" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-meta-blue transition-colors">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT US SECTION --- */}
      <section id="about" className="py-20 md:py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-meta-blue">Our Mission</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bridging the Gap Between Store Automation and Personal Messaging
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At ChatRadix, we believe transactional updates and customer retention campaigns shouldn&apos;t live in crowded email spam folders. We built ChatRadix to bring scaling e-commerce brands closer to their buyers through the simplicity of direct, official Meta WhatsApp API messaging.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              By syncing real-time Shopify telemetry with WhatsApp&apos;s instant communication channels, we help businesses provide frictionless, automated checkouts, live tracking alerts, and conversational support that feels human, scales infinitely, and generates verifiable revenue.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="bg-slate-950/40 border border-slate-900 p-5 rounded-2xl">
                <span className="text-sm font-bold text-white block mb-1">Developer-Grade Security</span>
                <p className="text-xs text-slate-500 leading-normal">Fully encrypted communication paths linked directly to official Meta endpoints.</p>
              </div>
              <div className="bg-slate-950/40 border border-slate-900 p-5 rounded-2xl">
                <span className="text-sm font-bold text-white block mb-1">Compliant Broadcasts</span>
                <p className="text-xs text-slate-500 leading-normal">Built-in templates adhering strictly to Meta WhatsApp Business policies.</p>
              </div>
            </div>
          </div>

          {/* Graphical badge / visual element */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-tr from-meta-blue/50 via-transparent to-cyan-400/50 w-full max-w-sm aspect-square shadow-2xl">
              <div className="h-full w-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
                <MessageSquare className="h-16 w-16 text-meta-blue mb-6 filter drop-shadow-[0_0_15px_rgba(6,104,225,0.4)]" />
                <h4 className="text-lg font-bold text-white mb-2">Meta Partner Approved</h4>
                <p className="text-xs text-slate-400 max-w-[240px] leading-relaxed">
                  We use Meta&apos;s official WhatsApp Cloud API, guaranteeing maximum message delivery speed, green tick compatibility, and 0% risk of phone number blocking.
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-3.5 py-1.5 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Meta Official Cloud API Integration</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* --- CONTACT & LEAD FORM --- */}
      <section id="contact" className="py-20 md:py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-meta-blue">Get In Touch</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Recover Abandoned Sales?
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Have questions about integration, custom solutions, or Meta Cloud API pricing? Fill out the form or chat directly with our team on WhatsApp.
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <a 
                href="mailto:chatradix@gmail.com" 
                className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-900 bg-slate-950/40 hover:border-slate-800 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-meta-blue/10 text-meta-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Email Us</span>
                  <span className="text-sm font-semibold text-slate-200">chatradix@gmail.com</span>
                </div>
              </a>

              <a 
                href="https://wa.me/923065335593" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-900 bg-slate-950/40 hover:border-slate-800 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-green-500/10 text-green-500">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">WhatsApp Support</span>
                  <span className="text-sm font-semibold text-slate-200">+92 306 5335593</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/40 border border-slate-900 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
              
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="h-14 w-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 mb-6 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-400 max-w-sm">
                    Thank you for reaching out. One of our WhatsApp Commerce experts will respond to you within 2-4 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full bg-[#030712] border border-slate-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-meta-blue transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-[#030712] border border-slate-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-meta-blue transition-colors"
                        placeholder="john@yourstore.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="storeUrl" className="text-xs font-bold uppercase tracking-wider text-slate-400">Shopify Store URL</label>
                    <input
                      id="storeUrl"
                      type="url"
                      required
                      className="w-full bg-[#030712] border border-slate-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-meta-blue transition-colors"
                      placeholder="https://mystore.myshopify.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-[#030712] border border-slate-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-meta-blue transition-colors resize-none"
                      placeholder="Tell us about your brand volume, or any questions about the Meta integration..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-meta-blue hover:bg-meta-blue/90 font-bold text-sm text-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.01]"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

import React from "react";
import { ShieldCheck, Lock, Eye, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - ChatRadix",
  description: "Learn how ChatRadix handles Shopify merchant data, Meta WhatsApp Cloud API compliance, and customer privacy protection.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "July 10, 2026";

  return (
    <div className="relative min-h-screen grid-bg py-20 px-6 lg:px-8 max-w-4xl mx-auto z-10">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] radial-glow pointer-events-none z-0" />

      <article className="relative z-10 pt-8">
        
        {/* Header Section */}
        <div className="border-b border-slate-900 pb-8 mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-meta-blue/10 border border-meta-blue/20 text-xs font-semibold text-meta-blue mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Official Policy Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2.5 text-sm text-slate-500">
            Last Updated: {lastUpdated} &bull; Effective Immediately
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-8 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <section className="bg-slate-950/40 border border-slate-900 p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Eye className="h-4.5 w-4.5 text-meta-blue" />
              1. Introduction
            </h2>
            <p>
              Welcome to ChatRadix. We are committed to protecting the privacy, security, and integrity of the data collected from merchants using our Shopify application (&quot;App&quot;), as well as their end customers. This Privacy Policy details how we collect, use, process, and protect your information when utilizing our automated WhatsApp marketing and commerce solutions integrated with the official Meta WhatsApp Cloud API.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">
              2. Data We Collect
            </h2>
            <p>
              To deliver high-converting WhatsApp workflows, ChatRadix synchronization requires access to specific Shopify store details and customer communication paths:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Shopify Merchant Data:</strong> Store URL, store owner email address, shop name, physical address, and billing configuration required for account setup.
              </li>
              <li>
                <strong className="text-white">Order & Fulfillment Data:</strong> Information concerning purchases (order IDs, product titles, prices, currency, shipping addresses, and tracking codes) to send transaction confirmations and real-time shipment updates.
              </li>
              <li>
                <strong className="text-white">Abandoned Cart Telemetry:</strong> Customer cart tokens, items left in checkout, and associated phone numbers, used exclusively to trigger automated recovery flows.
              </li>
              <li>
                <strong className="text-white">Meta API Integration Metadata:</strong> WhatsApp phone number ID, templates status, and message transmission logs (e.g., delivered, read, clicked status) provided through Meta webhooks.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">
              3. Meta WhatsApp API Compliance & Data Routing
            </h2>
            <p>
              ChatRadix operates strictly as an official Meta WhatsApp Cloud API partner application. All messaging activities comply with the Meta WhatsApp Business Terms of Service:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-slate-950/40 border border-slate-900/60 p-4 rounded-xl">
                <span className="font-bold text-white text-sm block mb-1">Direct Encrypted Routing</span>
                <p className="text-xs text-slate-400">All customer communications are encrypted in transit and routed directly through secure official Meta Cloud endpoints.</p>
              </div>
              <div className="bg-slate-950/40 border border-slate-900/60 p-4 rounded-xl">
                <span className="font-bold text-white text-sm block mb-1">No Storage of Chat Content</span>
                <p className="text-xs text-slate-400">We do not store the textual content of chats beyond transmission. Logs only contain statuses (e.g., delivered, read).</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Customers have absolute control over receiving WhatsApp messages. We enforce strict compliance by rendering an opt-out action (e.g., reply with &quot;STOP&quot;) inside every promotional and cart recovery template.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">
              4. How We Use Your Information
            </h2>
            <p>
              We process merchant and customer information solely to operate and improve the ChatRadix systems:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deploying automated cart reminders, fulfillment updates, and delivery alerts.</li>
              <li>Monitoring delivery statuses and optimizing template conversion rates.</li>
              <li>Providing merchant support, troubleshooting Meta API configurations, and custom setups.</li>
              <li>Detecting, preventing, or mitigating technical errors, security vulnerabilities, or policy violations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">
              5. Data Security & Retention
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start bg-slate-950/40 border border-slate-900 p-5 rounded-2xl">
              <div className="p-2.5 rounded-lg bg-meta-blue/10 text-meta-blue flex-shrink-0">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1.5 text-sm">Security Protocols</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  All stored database tables are encrypted at rest using AES-256 standards. Connection channels leverage TLS 1.3 encryption. We conduct quarterly security updates on our infrastructure and restrict employee database access strictly on a need-to-know basis.
                </p>
              </div>
            </div>
            <p className="mt-2">
              We retain Shopify store synchronization data only as long as your ChatRadix account remains active. Upon application uninstallation, all sync databases are automatically scheduled for complete, permanent deletion from our primary servers within forty-eight (48) hours.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">
              6. Merchant & Customer Rights (GDPR & CCPA)
            </h2>
            <p>
              If you or your customers reside in the European Economic Area (EEA) or California, you are entitled to specific rights regarding data processing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Right of Access:</strong> Request a copy of all stored personal telemetry.
              </li>
              <li>
                <strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate information.
              </li>
              <li>
                <strong className="text-white">Right to Deletion:</strong> Request immediate erasure of personal data from our databases.
              </li>
            </ul>
            <p className="mt-2">
              To trigger data access or erasure requests, merchants can email our privacy team directly at <a href="mailto:chatradix@gmail.com" className="text-meta-blue hover:underline">chatradix@gmail.com</a>.
            </p>
          </section>

          <section className="bg-slate-950/40 border border-slate-900 p-6 rounded-2xl mt-4">
            <h2 className="text-lg font-bold text-white mb-3">
              7. Contact Information
            </h2>
            <p className="mb-4">
              For any questions, concerns, or requests regarding this Privacy Policy or your data, please contact the ChatRadix privacy officer:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Inquiry</span>
                <a href="mailto:chatradix@gmail.com" className="text-meta-blue hover:underline font-semibold mt-0.5">
                  chatradix@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Phone / WhatsApp</span>
                <a href="tel:+923065335593" className="text-slate-300 font-semibold mt-0.5 hover:text-white transition-colors">
                  +92 306 5335593
                </a>
              </div>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}

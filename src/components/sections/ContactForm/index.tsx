"use client";

import { useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formKey, setFormKey] = useState(Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Message sent successfully.");
      setFormKey(Date.now());
    } else {
      toast.error("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <form key={formKey} className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="group relative">
          <input
            name="name"
            id="contact-name"
            required
            placeholder="Your Name"
            className="input-glow w-full rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-white placeholder-[#555588] transition-all duration-300 outline-none focus:border-[rgba(0,212,255,0.5)]"
          />
        </div>
        <div className="group relative">
          <input
            name="email"
            id="contact-email"
            type="email"
            required
            placeholder="Your Email"
            className="input-glow w-full rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-white placeholder-[#555588] transition-all duration-300 outline-none focus:border-[rgba(0,212,255,0.5)]"
          />
        </div>
      </div>

      <div className="group relative">
        <textarea
          name="message"
          id="contact-message"
          required
          rows={5}
          placeholder="Your Message"
          className="input-glow w-full resize-none rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-white placeholder-[#555588] transition-all duration-300 outline-none focus:border-[rgba(0,212,255,0.5)]"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full cursor-pointer overflow-hidden rounded-xl py-3 font-medium text-white transition-all duration-300 disabled:opacity-50"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#7b2ff7] to-[#ff2d7c] transition-all duration-300 group-hover:opacity-90" />
        {/* Shimmer effect */}
        <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100" />
        <span className="relative z-10">
          {loading ? "Sending..." : "Send Message"}
        </span>
      </button>
    </form>
  );
}

export default ContactForm;

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Send, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

function Contact() {
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

    try {
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
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#000000] px-6 py-64"
    >
      {/* Background Ethereal Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b82f6]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 font-serif text-5xl font-bold text-[#f0f0f0] md:text-7xl"
        >
          Let's Build Something <br />{" "}
          <span className="text-[#3b82f6]">Amazing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-default-200 mb-12 text-xl leading-relaxed"
        >
          Looking for a developer who can create high-performance, interactive,
          and accessible web experiences? I'm currently open for new
          opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 flex items-center justify-center gap-3 font-mono text-sm tracking-widest text-[#3b82f6] uppercase"
        >
          <MapPin size={18} />
          <span>Dhaka, Bangladesh</span>
        </motion.div>

        <motion.form
          key={formKey}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 text-left"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="font-mono text-xs tracking-widest text-default-200/80 uppercase"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Sakil Anwar"
              className="w-full rounded-2xl border border-white/5 bg-white/2 px-6 py-4 text-[#f0f0f0] backdrop-blur-md transition-all placeholder:text-[#888]/30 focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/50 focus:outline-hidden"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="font-mono text-xs tracking-widest text-default-200/80 uppercase"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="hello@sakil.anwar"
              className="w-full rounded-2xl border border-white/5 bg-white/2 px-6 py-4 text-[#f0f0f0] backdrop-blur-md transition-all placeholder:text-[#888]/30 focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/50 focus:outline-hidden"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="font-mono text-xs tracking-widest text-default-200/80 uppercase"
            >
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Describe your vision..."
              rows={5}
              className="w-full resize-none rounded-2xl border border-white/5 bg-white/2 px-6 py-4 text-[#f0f0f0] backdrop-blur-md transition-all placeholder:text-[#888]/30 focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/50 focus:outline-hidden"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative h-16 w-full cursor-pointer overflow-hidden rounded-2xl bg-[#3b82f6] px-8 font-bold text-white transition-all hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            <div className="flex items-center justify-center gap-3">
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </>
              )}
            </div>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;

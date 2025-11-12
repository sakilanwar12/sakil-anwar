"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
      <Input label="Name" id="name" name="name" required />
      <Input label="Email" id="email" name="email" type="email" required />
      <Textarea label="Message" id="message" name="message" required />
      <Button
        type="submit"
        disabled={loading}
        className="text-default-1000 h-11 w-full cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 font-medium transition-opacity hover:opacity-90"
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

export default ContactForm;

"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Bot trap field
  });
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      console.log("Bot detected");
      return;
    }

    // Rate limiting - check if submitted recently
    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
    const now = Date.now();
    if (lastSubmitTime && now - parseInt(lastSubmitTime) < 60000) {
      // 1 minute cooldown
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
      localStorage.setItem("lastSubmitTime", now.toString());

      // Reset success message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        CONTACT ME
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field - hidden from users, catches bots */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          style={{ position: "absolute", left: "-9999px" }}
          aria-hidden="true"
        />

        <div>
          <label htmlFor="name" className="block text-black mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-black text-black bg-white/50"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-black mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-black text-black bg-white/50"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-black mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-black text-black resize-none bg-white/50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-2 px-4 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center text-sm">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-center text-sm">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

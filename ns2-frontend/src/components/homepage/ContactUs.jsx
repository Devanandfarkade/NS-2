"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/api";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ContactUs({ data }) {
  const subjects = [
    { value: "general", label: "General" },
    { value: "project", label: "Project" },
    { value: "support", label: "Support" },
    { value: "feedback", label: "Feedback" },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validators = {
    fullName: (val) =>
      /^[A-Za-z\s]+$/.test(val) ? "" : "Name should contain only letters.",
    email: (val) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? "" : "Enter a valid email.",
    phone: (val) => {
      if (!val) return "";
      return /^\+\d{1,3}\s\d{10}$/.test(val)
        ? ""
        : "Phone must include country code (+XX) + space + 10 digits.";
    },
    subject: (val) => (val ? "" : "Please select a subject."),
    message: (val) =>
      val.trim().length >= 10
        ? ""
        : "Message must be at least 10 characters long.",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(validators).forEach((field) => {
      const errorMsg = validators[field](formData[field]);
      if (errorMsg) newErrors[field] = errorMsg;
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSubmitted(false);

    try {
      const payload = {
        full_name: formData.fullName,
        email_address: formData.email,
        phone_number: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      const res = await submitContactForm(payload);

      if (res.success) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("❌ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!data) return null;

  return (
    <section id="contact" className="w-full py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-500 animate-pulse drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
            + Get In Touch
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2"
            style={{ color: "#007BFF" }}
          >
            {data.super_heading}
          </h2>
          <p
            className="text-base sm:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#212529" }}
          >
            {data.heading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left side */}
          <div>
            <h3
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: "#007BFF" }}
            >
              {data.subheading}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              {data.overview_text}
            </p>

            <div className="space-y-6">
              {data.content_items
                ?.filter(
                  (item) =>
                    item.is_active &&
                    (item.label || item.title || item.description)
                )
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-5 rounded-2xl shadow-md bg-white border border-gray-200"
                  >
                    {item.icon && (
                      <img
                        src={`${API_BASE_URL}${item.icon}`}
                        alt=""
                        className="w-10 h-10 mr-4"
                      />
                    )}
                    <div>
                      {item.label && (
                        <h4 className="font-semibold text-black">
                          {item.label}
                        </h4>
                      )}
                      {item.title && (
                        <p className="text-black text-sm">{item.title}</p>
                      )}
                      {item.description && (
                        <p className="text-blue-600 font-medium mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-6">
              <p className="font-semibold text-black">Follow Us</p>
              <div className="flex space-x-4 mt-3">
                {data.social_links?.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noreferrer">
                    <img
                      src={`${API_BASE_URL}${link.icon}`}
                      alt={link.platform}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side (Form) */}
          <div className="p-8 rounded-2xl shadow-lg bg-white border border-gray-200">
            <h3
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: "#007BFF" }}
            >
              Send us a Message
            </h3>
            <p className="text-gray-800 text-sm sm:text-base mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {submitted && (
              <p className="text-green-600 font-semibold mb-4">
                ✅ Message sent successfully!
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter phone e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-black"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-black"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((s, idx) => (
                      <option key={idx} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-black"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading
                      ? "Sending..."
                      : data.primary_button_text || "Send Message"}
                  </button>
                  <button
                    type="reset"
                    onClick={() =>
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      })
                    }
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

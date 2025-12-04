//contact

import React, { useState } from 'react';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/56be82ba5f54911f7d4af63a57ae7640", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _captcha: false
        }),
      });

      if (res.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setShowSuccess(false);
          setShowForm(false);
        }, 3000);
      }
    } catch (err) {
      alert("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: "fab fa-github", href: "https://github.com/satyam0777", color: "hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900" },
    { name: "LinkedIn", icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/satyam-prajapati-13a690256/", color: "hover:bg-blue-600 hover:text-white" },
    { name: "LeetCode", icon: "fas fa-code", href: "https://leetcode.com/satyam0777/", color: "hover:bg-yellow-600 hover:text-white" },
    { name: "Twitter", icon: "fab fa-twitter", href: "https://x.com/satyam9352", color: "hover:bg-blue-400 hover:text-white" },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Let's Connect
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Available for work
            </p>
          </div>

          {/* Social Links + Email Button */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {/* Email Form Toggle Button */}
            <button
              onClick={() => setShowForm(!showForm)}
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <i className="fas fa-envelope"></i>
              <span>{showForm ? 'Close Form' : 'Send Email'}</span>
            </button>

            {/* Social Links */}
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white transition-all duration-300 ${social.color} hover:border-transparent hover:shadow-xl hover:-translate-y-0.5`}
              >
                <i className={`${social.icon} text-lg`}></i>
                <span className="text-sm font-semibold">{social.name}</span>
              </a>
            ))}
          </div>

          {/* Collapsible Email Form */}
          {showForm && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg mb-6 animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </button>
                {showSuccess && (
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-500 text-green-800 dark:text-green-200 rounded-lg text-sm">
                    ✅ Message sent! I'll respond within 24 hours.
                  </div>
                )}
              </form>
            </div>
          )}

          {/* Direct Email Link (fallback) */}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            or email directly at{' '}
            <a href="mailto:officialsatyam0777@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              officialsatyam0777@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
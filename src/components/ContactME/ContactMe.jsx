import React, { useState } from "react";

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with emailjs or backend here if needed
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-[600px] mx-auto bg-[#232323] rounded-2xl shadow-lg p-8">
        <h2 className="text-5xl text-cyan mb-6 text-center font-bold">
          Contact Me
        </h2>
        <p className="text-lightGrey text-center mb-8">
          Have a question, proposal, or just want to say hello? Fill out the
          form below and I’ll get back to you soon!
        </p>
        {submitted ? (
          <div className="text-green-400 text-center text-lg py-12">
            Thank you for reaching out!
            <br />I will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-cyan transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-cyan transition-all duration-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-cyan transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              className="bg-cyan hover:bg-orange text-black font-semibold py-3 rounded transition-all duration-300 text-lg shadow-cyanShadow"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-10 flex flex-col items-center gap-2 text-lightGrey text-sm">
          <span>or email me at</span>
          <a
            href="mailto:your.email@example.com"
            className="text-cyan hover:text-orange transition-all duration-300 underline"
          >
            your.email@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

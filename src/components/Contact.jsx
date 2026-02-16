import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const keysMissing = !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (keysMissing) {
      setFormStatus('missing_keys');
      setTimeout(() => setFormStatus(''), 6000);
      return;
    }
    setFormStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 4000);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 bg-neutral-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Left Column: Contact Info & Links */}
          <div>
            <p className="text-xl text-neutral-400 leading-relaxed mb-8">
              I'm currently looking for new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="flex flex-col gap-6">
              {/* Email */}
              <a
                href="mailto:your.email@gmail.com"
                className="flex items-center gap-4 text-lg hover:text-[#ff6b35] transition-colors group"
              >
                <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-[#ff6b35]/10 transition-colors">
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                dinudevees@gmail.com
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/D1778"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-[#ff6b35] transition-colors group"
              >
                <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-[#ff6b35]/10 transition-colors">
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                github.com/D1778
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dinu-devees-george"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-[#ff6b35] transition-colors group"
              >
                <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-[#ff6b35]/10 transition-colors">
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                linkedin.com/in/dinu-devees-george
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 bg-neutral-950 p-8 rounded-2xl border border-neutral-800 shadow-sm">
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your.email@gmail.com"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full sm:w-auto self-start px-8 py-3 bg-[#ff6b35] hover:bg-[#ff8555] text-white rounded-lg font-medium transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-[#ff6b35]/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : <>Send Message <Send size={20} /></>}
            </button>
            {formStatus === 'success' && (
              <p className="text-[#ff6b35] font-medium text-center animate-fade-in">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
            {formStatus === 'missing_keys' && (
              <div className="text-amber-400 text-sm animate-fade-in space-y-1">
                <p className="font-medium">Contact form not configured yet.</p>
                <p>1. Open the <code className="bg-white/10 px-1 rounded">.env</code> file in the project root.</p>
                <p>2. Get your keys from <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">emailjs.com</a> (Email Service + Template + API key).</p>
                <p>3. Paste them into <code className="bg-white/10 px-1 rounded">.env</code>, then restart the dev server.</p>
              </div>
            )}
            {formStatus === 'error' && (
              <p className="text-red-400 font-medium text-center animate-fade-in">
                Send failed. Check your EmailJS template and service, then try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
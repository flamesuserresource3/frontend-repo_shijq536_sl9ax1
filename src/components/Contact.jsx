import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#0f0e0d] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="uppercase tracking-[0.25em] text-[#C9A227] text-xs">Connect</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Book the Troupe</h2>
          <p className="mt-3 text-white/70 max-w-prose">
            Bring the heartbeat of Rwanda to your stage. We perform at festivals, corporate events, cultural programs,
            schools, and private celebrations across East Africa and beyond.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#C9A227]" />
              <a href="mailto:booking@ishyaculture.rw" className="hover:underline">booking@ishyaculture.rw</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#C9A227]" />
              <a href="tel:+250788000000" className="hover:underline">+250 788 000 000</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#C9A227]" />
              <span>Kigali, Rwanda</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:booking@ishyaculture.rw" className="px-5 py-3 rounded-md bg-[#C9A227] text-[#1a140c] font-semibold shadow hover:brightness-110 transition">Email Us</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/5 transition">Instagram</a>
          </div>
        </div>

        <form
          action="mailto:booking@ishyaculture.rw"
          method="post"
          encType="text/plain"
          className="bg-[#1a140c] rounded-xl p-6 ring-1 ring-white/10 shadow-xl"
        >
          <h3 className="text-xl font-semibold">Quick Inquiry</h3>
          <p className="text-sm text-white/70 mt-1">Tell us about your event and we’ll respond shortly.</p>
          <div className="mt-6 grid gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C9A227]" />
            <input name="email" type="email" required placeholder="Email address" className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C9A227]" />
            <input name="date" placeholder="Event date (optional)" className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C9A227]" />
            <textarea name="message" required rows={4} placeholder="Tell us about the venue, audience size, and program goals" className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C9A227]" />
            <button type="submit" className="inline-flex justify-center px-5 py-3 rounded-md bg-[#C9A227] text-[#1a140c] font-semibold shadow hover:brightness-110 transition">Send Inquiry</button>
          </div>
        </form>
      </div>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Ishya Culture Troupe. All rights reserved.</p>
          <p className="text-white/50 text-xs">Crafted with heart for cultural preservation and creativity.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

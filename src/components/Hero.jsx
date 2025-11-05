import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a130c] via-[#2b2016] to-[#0f0e0d]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#C9A227]/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-24 h-72 w-72 rounded-full bg-[#8B5E34]/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-14 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#F5EFE6]">
            Celebrating Rwanda’s Spirit through Theatre, Dance, and Drums
          </h1>
          <p className="mt-5 text-base md:text-lg text-[#F5EFE6]/80 max-w-prose">
            Ishya Culture Troupe is a collective of artists preserving and evolving Rwanda’s traditions.
            We blend powerful drum rhythms, expressive choreography, and compelling storytelling to spark
            pride, connection, and creativity.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#C9A227] text-[#1a140c] font-semibold shadow hover:brightness-110 transition">
              Book a Performance
            </a>
            <a
              href="https://www.youtube.com/results?search_query=rwanda+traditional+dance+intore" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/5 transition"
            >
              Watch Highlights
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <dt className="text-2xl md:text-3xl font-bold text-[#C9A227]">12+ years</dt>
              <dd className="text-white/70 text-sm">of performance</dd>
            </div>
            <div>
              <dt className="text-2xl md:text-3xl font-bold text-[#C9A227]">300+</dt>
              <dd className="text-white/70 text-sm">shows delivered</dd>
            </div>
            <div>
              <dt className="text-2xl md:text-3xl font-bold text-[#C9A227]">5 regions</dt>
              <dd className="text-white/70 text-sm">across East Africa</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop"
              alt="Traditional drums"
              className="col-span-2 h-56 md:h-72 w-full object-cover rounded-lg ring-1 ring-white/20 shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
              alt="Stage lighting"
              className="h-56 md:h-72 w-full object-cover rounded-lg ring-1 ring-white/20 shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1549887534-1541e9320b9b?q=80&w=1200&auto=format&fit=crop"
              alt="Cultural dance"
              className="h-40 md:h-48 w-full object-cover rounded-lg ring-1 ring-white/20 shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
              alt="Storytelling theatre"
              className="col-span-2 h-40 md:h-48 w-full object-cover rounded-lg ring-1 ring-white/20 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

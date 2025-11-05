import React from 'react';

const shows = [
  {
    title: 'Traditional Dance — Intore',
    desc: 'Athletic choreography, royal regalia, and uplifting rhythms that honor Rwanda’s heritage.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Drumming Ensemble',
    desc: 'Thunderous drums and precise harmonies that ignite any stage or celebration.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Theatre & Storytelling',
    desc: 'Narratives that explore identity, resilience, and community through contemporary theatre.',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Workshops & Education',
    desc: 'Interactive sessions for schools and organizations on dance, rhythm, and cultural history.',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
];

const Performances = () => {
  return (
    <section id="performances" className="relative bg-[#F5EFE6]">
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <header className="max-w-2xl">
          <p className="uppercase tracking-[0.25em] text-[#8B5E34] text-xs">Our Craft</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#1a140c]">Performances & Programs</h2>
          <p className="mt-3 text-[#3b2c1f]/80">
            From intimate theaters to grand festivals, we tailor immersive cultural experiences that move audiences
            and celebrate the beauty of Rwanda.
          </p>
        </header>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((s, i) => (
            <article key={i} className="group bg-white rounded-xl overflow-hidden ring-1 ring-[#8B5E34]/20 shadow-sm hover:shadow-lg transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#2b2016]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#3b2c1f]/80">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#contact" className="text-sm font-medium text-[#8B5E34] hover:underline">Book this</a>
                  <span className="text-xs text-[#8B5E34]/70 bg-[#8B5E34]/10 px-2 py-1 rounded">45–60 min</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performances;

import { Link } from 'react-router-dom';

const features = [
  {
    emoji: '&#127869;',
    title: 'All Meals',
    desc: 'Breakfast, morning snack, lunch, and afternoon snack provided daily. Nutritious, child-friendly meals prepared fresh.',
  },
  {
    emoji: '&#128218;',
    title: 'Full Curriculum',
    desc: 'Cambridge EYFS-inspired play-based learning across all 6 developmental domains. Weekly themed units.',
  },
  {
    emoji: '&#127468;&#127463;',
    title: 'Native English Teacher',
    desc: 'Full-time qualified English lead teacher, present every day, 7:30 AM – 5:30 PM.',
  },
  {
    emoji: '&#127464;&#127475;',
    title: 'Chinese Language Sessions',
    desc: 'Weekly Mandarin visitor sessions woven into the curriculum through songs, stories, and games.',
  },
  {
    emoji: '&#127481;&#127469;',
    title: 'Thai Language Sessions',
    desc: 'Weekly Thai language visitor. Cultural awareness and language exposure from day one.',
  },
  {
    emoji: '&#128203;',
    title: 'Daily Report',
    desc: 'Personalised daily observation log sent home every afternoon covering all 6 Cambridge domains.',
  },
  {
    emoji: '&#127912;',
    title: 'All Materials',
    desc: 'Art supplies, sensory materials, books, manipulatives — all included. No hidden costs.',
  },
  {
    emoji: '&#128118;',
    title: 'Small Group Setting',
    desc: 'Maximum 6 children per class. Every child is known, seen, and supported every day.',
  },
  {
    emoji: '&#127968;',
    title: 'Home-Based Environment',
    desc: 'Located at 98 Supalai Hills, Phuket. A warm, safe, purpose-designed learning space.',
  },
  {
    emoji: '&#128197;',
    title: 'Monday–Friday',
    desc: 'Full week program, 7:30 AM – 5:30 PM. Thai public holidays observed.',
  },
];

const steps = [
  {
    emoji: '&#128222;',
    number: '1',
    title: 'Enquire',
    desc: 'Contact us or fill in the enrollment form',
  },
  {
    emoji: '&#127968;',
    number: '2',
    title: 'Visit',
    desc: 'Come for a tour and meet the teacher',
  },
  {
    emoji: '&#128221;',
    number: '3',
    title: 'Apply',
    desc: 'Complete the enrollment application',
  },
  {
    emoji: '&#127881;',
    number: '4',
    title: 'Welcome',
    desc: 'Your child joins the Folstad family',
  },
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-sage/20 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Tuition &amp; Fees
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            One fee. Everything included. No surprises.
          </p>
        </div>
      </section>

      {/* Section 1 — The Numbers */}
      <section className="section-pad bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-3">The Numbers</h2>
            <p className="text-navy/60 font-body text-base max-w-xl mx-auto">
              Clear, honest fees. What you see is what you pay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enrollment Fee Card */}
            <div className="card border border-navy/10 p-10 text-center">
              <p className="font-body text-sm font-bold uppercase tracking-widest text-navy/40 mb-4">
                Enrollment Fee
              </p>
              <p className="font-display text-6xl font-bold text-navy leading-none mb-2">
                ฿30,000
              </p>
              <p className="font-body text-sm text-navy/50 mt-3">
                One-time · Non-refundable
              </p>
              <div className="mt-6 pt-6 border-t border-navy/10">
                <p className="font-body text-sm text-navy/60 leading-relaxed">
                  Paid once to secure your child&apos;s place. Covers onboarding,
                  materials setup, and administrative processing.
                </p>
              </div>
            </div>

            {/* Monthly Tuition Card — amber highlight */}
            <div
              className="card border-2 border-amber-400 p-10 text-center relative"
              style={{ boxShadow: '0 8px 40px rgba(245,158,11,0.18)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-400 rounded-t-2xl" />
              <p className="font-body text-sm font-bold uppercase tracking-widest text-amber-600 mb-4">
                Monthly Tuition
              </p>
              <p className="font-display text-6xl font-bold text-navy leading-none mb-2">
                ฿30,000
              </p>
              <p className="font-body text-sm text-navy/50 mt-3">Per month · Per child</p>
              <div className="mt-6 pt-6 border-t border-amber-200">
                <p className="font-body text-sm text-navy/60 leading-relaxed">
                  Covers absolutely everything — meals, curriculum, native English
                  teacher, language sessions, materials, and daily reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — What's Included */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2A5080 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-3">
              All Included
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Everything for ฿30,000/month
            </h2>
            <p className="text-white/60 font-body text-base max-w-xl mx-auto">
              Not a single extra. Your child arrives and everything is taken care of.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-200"
              >
                <span
                  className="text-3xl block mb-3"
                  dangerouslySetInnerHTML={{ __html: f.emoji }}
                />
                <h3 className="font-display text-base font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-white/65 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — How it Compares */}
      <section className="section-pad bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-4xl block mb-5">&#127942;</span>
          <h2 className="section-heading mb-4">See How We Compare</h2>
          <p className="text-navy/60 font-body text-base leading-relaxed mb-8 max-w-xl mx-auto">
            See how we compare to Phuket&apos;s top international schools — enrollment fees,
            class sizes, languages, and more.
          </p>
          <Link to="/comparison" className="btn-primary">
            View Full Comparison &#8594;
          </Link>
        </div>
      </section>

      {/* Section 4 — Enrollment Process */}
      <section className="section-pad bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Getting Started
            </p>
            <h2 className="section-heading mb-3">Enrollment Process</h2>
            <p className="text-navy/60 font-body text-base max-w-xl mx-auto">
              Four simple steps and your child is part of the Folstad family.
            </p>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative text-center">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] right-[-calc(50%-2.5rem)] h-0.5 bg-amber-200 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-amber-300 flex items-center justify-center mb-4 shadow-sm">
                    <span
                      className="text-3xl"
                      dangerouslySetInnerHTML={{ __html: step.emoji }}
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-navy font-bold text-xs mb-3 -mt-1">
                    {step.number}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-navy/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/enrollment" className="btn-primary text-base px-10 py-4">
              Start the Process &#8594;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

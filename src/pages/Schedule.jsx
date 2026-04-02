import { Link } from 'react-router-dom';

const schedule = [
  {
    time: '7:30 – 8:00',
    title: 'Arrival & Welcome',
    emoji: '&#127774;',
    desc: 'Children arrive, greet teachers, sign in with the daily log. Soft music, a cozy corner to settle.',
    color: 'border-amber-300 bg-amber-50',
    dot: 'bg-amber-400',
  },
  {
    time: '8:00 – 8:30',
    title: 'Morning Circle',
    emoji: '&#127383;',
    desc: 'Calendar, weather, days of the week. Good morning songs in English (and a hello in Chinese or Thai!).',
    color: 'border-blue-200 bg-blue-50',
    dot: 'bg-blue-400',
  },
  {
    time: '8:30 – 9:30',
    title: 'Structured Play Centers',
    emoji: '&#129513;',
    desc: 'Purposeful play across rotating stations: sensory table, building blocks, art corner, pretend play.',
    color: 'border-purple-200 bg-purple-50',
    dot: 'bg-purple-400',
  },
  {
    time: '9:30 – 10:00',
    title: 'Snack & Social Time',
    emoji: '&#127822;',
    desc: 'Healthy snack together. Children practice conversation, table manners, and community.',
    color: 'border-green-200 bg-green-50',
    dot: 'bg-green-400',
  },
  {
    time: '10:00 – 11:00',
    title: 'Learning Focus Block',
    emoji: '&#128218;',
    desc: 'Themed activities tied to the weekly curriculum focus. Arts, math games, science exploration, or language activities.',
    color: 'border-teal-200 bg-teal-50',
    dot: 'bg-teal-400',
  },
  {
    time: '11:00 – 11:30',
    title: 'Story Time',
    emoji: '&#128215;',
    desc: 'Two or three picture books, rich with vocabulary. Children respond, predict, and imagine.',
    color: 'border-rose-200 bg-rose-50',
    dot: 'bg-rose-400',
  },
  {
    time: '11:30 – 12:30',
    title: 'Lunch',
    emoji: '&#127869;',
    desc: 'Family-style lunch. Children learn independence, table conversation, and cultural food awareness.',
    color: 'border-yellow-200 bg-yellow-50',
    dot: 'bg-yellow-400',
  },
  {
    time: '12:30 – 2:30',
    title: 'Rest & Quiet Time',
    emoji: '&#128564;',
    desc: 'Restorative nap or quiet rest on individual mats. Soft music or nature sounds.',
    color: 'border-indigo-200 bg-indigo-50',
    dot: 'bg-indigo-400',
  },
  {
    time: '2:30 – 3:00',
    title: 'Afternoon Snack',
    emoji: '&#127815;',
    desc: 'Wake-up snack and gentle re-engagement with the day.',
    color: 'border-orange-200 bg-orange-50',
    dot: 'bg-orange-400',
  },
  {
    time: '3:00 – 4:00',
    title: 'Outdoor Play & Exploration',
    emoji: '&#127935;',
    desc: 'Outdoor time for gross motor development — running, climbing, water play, nature observations.',
    color: 'border-lime-200 bg-lime-50',
    dot: 'bg-lime-500',
  },
  {
    time: '4:00 – 4:30',
    title: 'Language Visitor (Selected Days)',
    emoji: '&#127908;',
    desc: 'Weekly Chinese or Thai language visitor joins for songs, activities, and cultural connection.',
    color: 'border-pink-200 bg-pink-50',
    dot: 'bg-pink-400',
  },
  {
    time: '5:00 – 5:30',
    title: 'Daily Log & Pickup',
    emoji: '&#128203;',
    desc: 'Teacher completes and shares the Daily Log with each family. Children help tidy and say goodbye.',
    color: 'border-navy/20 bg-navy/5',
    dot: 'bg-navy',
  },
];

export default function Schedule() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-sage/20 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Daily Life
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            A Typical Day
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            Predictable rhythms give young children the security to take risks, explore freely, and grow.
          </p>
        </div>
      </section>

      {/* Days Banner */}
      <section className="bg-navy py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
              <div key={day} className="text-center">
                <div className="px-5 py-2 rounded-full text-sm font-body font-bold bg-white/10 text-white">
                  {day}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Monday – Friday · 7:30 AM – 5:30 PM
            </p>
            <h2 className="section-heading">Our Daily Rhythm</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-sage to-navy/20 rounded-full" />

            <div className="flex flex-col gap-4">
              {schedule.map(({ time, title, emoji, desc, color, dot }, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-start gap-6 md:gap-10`}
                >
                  {/* Dot */}
                  <div className={`relative z-10 w-4 h-4 rounded-full ${dot} shrink-0 mt-5 ml-6 md:ml-10 border-2 border-white shadow-sm`} />

                  {/* Card */}
                  <div className={`flex-1 border rounded-xl p-4 md:p-5 ${color} transition-all duration-200 hover:shadow-card`}>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl" dangerouslySetInnerHTML={{ __html: emoji }} />
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="font-display text-base font-semibold text-navy">{title}</h3>
                          <span className="text-xs font-mono text-navy/40 bg-white/60 px-2 py-0.5 rounded-full">{time}</span>
                        </div>
                        <p className="text-sm font-body text-navy/60 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Language Visitor Note */}
      <section className="section-pad bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl">&#127908;</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">
                  Language Visitor Schedule
                </h3>
                <p className="text-navy/60 font-body leading-relaxed mb-4">
                  Our Chinese and Thai language visitors join us on selected afternoons during the
                  4:00&ndash;4:30 block. Each visitor brings songs, games, vocabulary, and cultural stories
                  tailored to the week&apos;s curriculum theme.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-amber-200 shadow-sm">
                    <span>&#127464;&#127475;</span>
                    <span className="text-sm font-body font-semibold text-navy">Chinese – Weekly</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-amber-200 shadow-sm">
                    <span>&#127481;&#127469;</span>
                    <span className="text-sm font-body font-semibold text-navy">Thai – Weekly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-12 px-6 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display text-2xl text-white font-semibold mb-4">
            Download the Full Schedule
          </h3>
          <a
            href="/pdfs/01_daily_schedule.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            &#128196; Download PDF Schedule
          </a>
        </div>
      </section>
    </>
  );
}

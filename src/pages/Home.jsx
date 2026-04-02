import { Link } from 'react-router-dom';

const features = [
  {
    icon: '&#127919;',
    title: 'Play-Based Learning',
    desc: 'Every activity is designed around discovery through play. Children learn best when they are curious, joyful, and engaged.',
    color: 'bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
  },
  {
    icon: '&#127891;',
    title: 'Cambridge-Inspired',
    desc: 'Our curriculum draws from the Cambridge EYFS framework — nurturing the whole child across six core developmental domains.',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    icon: '&#127758;',
    title: 'Multilingual Environment',
    desc: 'English is our primary language, enriched by weekly Chinese and Thai language visitors who bring songs, stories, and culture.',
    color: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-100',
  },
  {
    icon: '&#10024;',
    title: 'Small Group Care',
    desc: 'Every child receives individual attention, deep relationships, and a nurturing home-like setting.',
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100',
  },
];

const stats = [
  { value: '2–5', label: 'Ages' },
  { value: 'EYFS', label: 'Cambridge-Inspired' },
  { value: '฿30k', label: 'Monthly' },
  { value: 'EYFS', label: 'Cambridge-Inspired' },
];

const dayPreview = [
  { time: '8:00', emoji: '&#127774;', activity: 'Morning Circle & Welcome' },
  { time: '9:00', emoji: '&#127912;', activity: 'Creative Arts & Play' },
  { time: '10:30', emoji: '&#128218;', activity: 'Language & Story Time' },
  { time: '12:00', emoji: '&#127869;', activity: 'Lunch & Rest' },
  { time: '2:00', emoji: '&#127935;', activity: 'Outdoor Exploration' },
  { time: '4:00', emoji: '&#128203;', activity: 'Daily Log & Farewell' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2A5080 50%, #1a3d6b 100%)' }}
        />
        {/* Dot overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-sage/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/20 border border-amber-400/30 rounded-full text-amber-300 text-sm font-body font-semibold mb-8">
            <span>&#127381;</span> Now Enrolling for 2026
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Where Little Minds
            <br />
            <span className="text-amber-400">Come Alive</span>
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-body leading-relaxed">
            Play, Grow, Discover &mdash; In English, with Warm Touches of Chinese &amp; Thai
          </p>
          <p className="text-white/50 text-sm mb-10 font-body">
            Phuket, Thailand &middot; 98 Supalai Hills &middot; Ages 2&ndash;5
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/enrollment" className="btn-primary text-base px-8 py-4 shadow-lg shadow-amber-400/20">
              Enroll Now &#8594;
            </Link>
            <Link to="/curriculum" className="btn-secondary text-base px-8 py-4">
              View Curriculum
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs font-body tracking-widest uppercase">Explore</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-bold text-amber-400">{value}</div>
                <div className="text-white/60 text-sm font-body mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Folstad */}
      <section className="section-pad bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="section-heading">The Folstad Difference</h2>
            <p className="text-navy/60 mt-4 max-w-xl mx-auto font-body text-base leading-relaxed">
              A thoughtfully designed program where every detail supports your child&apos;s whole development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon, title, desc, color, iconBg }) => (
              <div
                key={title}
                className={`card p-6 border ${color} group`}
              >
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span dangerouslySetInnerHTML={{ __html: icon }} />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mb-2">{title}</h3>
                <p className="text-navy/60 text-sm font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Preview */}
      <section className="section-pad bg-dots" style={{ backgroundColor: '#F0F5F2' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Daily Life
              </p>
              <h2 className="section-heading mb-5">A Day in Our Program</h2>
              <p className="text-navy/60 font-body leading-relaxed mb-8">
                Each day follows a warm, predictable rhythm that gives children the security to explore,
                create, and connect. Monday through Friday, 7:30 AM to 5:30 PM.
              </p>
              <Link to="/schedule" className="btn-outline">
                View Full Schedule &#8594;
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {dayPreview.map(({ time, emoji, activity }) => (
                <div
                  key={time}
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span className="text-xs font-mono font-bold text-navy/40 w-10 shrink-0">{time}</span>
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: emoji }} />
                  <span className="font-body font-semibold text-navy text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages section */}
      <section className="section-pad bg-cream">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Languages
          </p>
          <h2 className="section-heading mb-5">Three Languages, One Community</h2>
          <p className="text-navy/60 font-body max-w-xl mx-auto mb-12 leading-relaxed">
            Language shapes how children see the world. We nurture multilingual awareness in the most natural way — through stories, songs, play, and warm human connection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8 border border-blue-100 text-center">
              <div className="text-4xl mb-4">&#127482;&#127480;</div>
              <h3 className="font-display text-xl font-semibold text-navy mb-2">English</h3>
              <p className="text-navy/60 text-sm font-body leading-relaxed">Primary language of instruction. Full-time English lead teacher, all day every day.</p>
            </div>
            <div className="card p-8 border border-red-100 text-center">
              <div className="text-4xl mb-4">&#127464;&#127475;</div>
              <h3 className="font-display text-xl font-semibold text-navy mb-2">Chinese</h3>
              <p className="text-navy/60 text-sm font-body leading-relaxed">Weekly Chinese language visitor brings Mandarin songs, vocabulary, and culture into our days.</p>
            </div>
            <div className="card p-8 border border-green-100 text-center">
              <div className="text-4xl mb-4">&#127481;&#127469;</div>
              <h3 className="font-display text-xl font-semibold text-navy mb-2">Thai</h3>
              <p className="text-navy/60 text-sm font-body leading-relaxed">Weekly Thai language visitor introduces our youngest learners to the beauty of the Thai language.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2A5080 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6 text-amber-400/60">&ldquo;</div>
          <blockquote className="font-display text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
            Our daughter came home singing in three languages. She didn&apos;t even realize she was learning &mdash; she thought she was just playing.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400/30 flex items-center justify-center text-amber-300 font-display font-bold">
              A
            </div>
            <div className="text-left">
              <p className="text-white font-body font-semibold text-sm">A Folstad Family</p>
              <p className="text-white/50 font-body text-xs">Phuket, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-pad bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl px-8 py-14 shadow-card">
            <span className="text-5xl block mb-4">&#127381;</span>
            <h2 className="section-heading mb-4">Ready to Join Our Family?</h2>
            <p className="text-navy/60 font-body mb-8 max-w-lg mx-auto leading-relaxed">
              Enrollment is open now for our 2026 program year. We&apos;d love to meet your little one.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/enrollment" className="btn-primary text-base px-8 py-4">
                Start Enrollment &#8594;
              </Link>
              <Link to="/contact" className="btn-outline text-base px-8 py-4">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

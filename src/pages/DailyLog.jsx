import { Link } from 'react-router-dom';

const domains = [
  {
    code: 'PSED',
    label: 'Personal & Social',
    icon: '&#10084;&#65039;',
    color: 'bg-rose-50 border-rose-200',
    dot: 'bg-rose-400',
    fields: ['Mood & emotions today', 'Social interactions', 'Self-regulation moments'],
  },
  {
    code: 'C&L',
    label: 'Communication',
    icon: '&#128172;',
    color: 'bg-blue-50 border-blue-200',
    dot: 'bg-blue-400',
    fields: ['New words used', 'Conversations & stories', 'Listening & responding'],
  },
  {
    code: 'PD',
    label: 'Physical',
    icon: '&#127939;',
    color: 'bg-green-50 border-green-200',
    dot: 'bg-green-500',
    fields: ['Gross motor activities', 'Fine motor work', 'Swimming notes (Wed)'],
  },
  {
    code: 'MATHS',
    label: 'Mathematics',
    icon: '&#129518;',
    color: 'bg-yellow-50 border-yellow-200',
    dot: 'bg-yellow-400',
    fields: ['Counting & numbers', 'Shapes & patterns', 'Problem solving'],
  },
  {
    code: 'UTW',
    label: 'World & Science',
    icon: '&#127758;',
    color: 'bg-teal-50 border-teal-200',
    dot: 'bg-teal-400',
    fields: ['Nature observations', 'Questions asked', 'Discoveries made'],
  },
  {
    code: 'EXP',
    label: 'Creative Arts',
    icon: '&#127912;',
    color: 'bg-purple-50 border-purple-200',
    dot: 'bg-purple-400',
    fields: ['Art projects', 'Music & movement', 'Imaginative play'],
  },
];

export default function DailyLog() {
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
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Family Connection
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Daily Connection<br />with Families
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            Every afternoon, each family receives a personalized log that celebrates their child&apos;s day
            across all six areas of development.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
                How It Works
              </p>
              <h2 className="section-heading mb-6">Your Window Into Their Day</h2>
              <div className="flex flex-col gap-4 text-navy/70 font-body leading-relaxed">
                <p>
                  The Folstad Daily Log is our commitment to transparency and partnership with families.
                  Every afternoon before pickup, your teacher completes a personalized report for your child.
                </p>
                <p>
                  Each log covers all six Cambridge developmental domains, giving you a rich picture of
                  how your child explored, connected, created, and grew that day.
                </p>
                <p>
                  It&apos;s not a checklist — it&apos;s a story. A snapshot of your child&apos;s unique day,
                  written with care and shared at the door.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  { icon: '&#128336;', text: 'Completed each afternoon by 4:30 PM' },
                  { icon: '&#127775;', text: 'Highlights moments of joy and curiosity' },
                  { icon: '&#128218;', text: 'Covers all 6 Cambridge EYFS domains' },
                  { icon: '&#128100;', text: 'Personalized for each child' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
                    <span className="font-body text-navy/70 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-card border border-navy/5 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">Daily Log</h3>
                  <p className="text-navy/40 text-sm font-body">Folstad Curriculum</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-navy/40">Thursday</p>
                  <p className="text-xs font-mono text-navy/40">Week 2 · Animals &amp; Nature</p>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                <p className="text-xs font-body font-bold text-amber-700 uppercase tracking-wide mb-1">Child</p>
                <p className="font-display text-base font-semibold text-navy">Your Little One</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {domains.map(({ code, label, icon, dot }) => (
                  <div key={code} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
                    <div className="text-lg mb-1" dangerouslySetInnerHTML={{ __html: icon }} />
                    <div className={`w-2 h-2 rounded-full ${dot} mx-auto mb-1`} />
                    <p className="text-xs font-body font-semibold text-navy/60 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-navy/5 rounded-xl p-4">
                <p className="text-xs font-body font-bold text-navy/50 uppercase tracking-wide mb-1">Teacher&apos;s Note</p>
                <p className="text-sm font-body text-navy/70 italic">
                  &ldquo;She asked three times where butterflies sleep. We found the answer together in a book &mdash; and then she painted one.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Cards */}
      <section className="section-pad" style={{ backgroundColor: '#F0F5F2' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Six Domains
            </p>
            <h2 className="section-heading mb-4">What We Track Each Day</h2>
            <p className="text-navy/60 font-body max-w-xl mx-auto">
              The log is organized around the six Cambridge EYFS domains, so you see your child&apos;s
              full day — not just &ldquo;what they ate&rdquo;.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map(({ code, label, icon, color, dot, fields }) => (
              <div key={code} className={`card border ${color} p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl" dangerouslySetInnerHTML={{ __html: icon }} />
                  <div>
                    <span className="text-xs font-mono font-bold text-navy/40 uppercase tracking-widest">{code}</span>
                    <h3 className="font-display text-base font-semibold text-navy leading-tight">{label}</h3>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {fields.map((field) => (
                    <li key={field} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${dot} mt-1.5 shrink-0`} />
                      <span className="text-sm font-body text-navy/60">{field}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Summary note */}
      <section className="section-pad bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy rounded-3xl p-8 md:p-12 text-white text-center">
            <span className="text-5xl block mb-4">&#128203;</span>
            <h2 className="font-display text-3xl font-semibold mb-4">Plus: Weekly Family Summary</h2>
            <p className="text-white/70 font-body max-w-xl mx-auto leading-relaxed mb-8">
              At the end of each week, families receive a broader weekly summary with highlights,
              upcoming themes, and any notes from language visitors.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/pdfs/03_daily_log.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                &#128196; Download Daily Log PDF
              </a>
              <a
                href="/pdfs/04_weekly_summary.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-white/40 text-white/80 font-bold rounded-full hover:bg-white/10 transition-all duration-200 text-sm font-body"
              >
                &#128196; Weekly Summary PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

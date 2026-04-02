import { Link } from 'react-router-dom';

const tableRows = [
  {
    feature: 'Monthly Tuition',
    folstad: '฿30,000',
    headstart: '~฿40,000',
    bisp: '~฿35,000',
    uwc: '~฿41,400',
    finnway: '~฿24,600',
    highlight: false,
  },
  {
    feature: 'Enrollment Fee',
    folstad: '฿30,000',
    headstart: '฿175,000+',
    bisp: '฿200,000+',
    uwc: '฿265,000+',
    finnway: '฿62,000 + ฿40,000 deposit',
    highlight: true,
  },
  {
    feature: 'Class Size',
    folstad: 'Up to 6',
    headstart: '15–20',
    bisp: '18–22',
    uwc: '15–20',
    finnway: '12–18',
    highlight: true,
  },
  {
    feature: 'Teacher Ratio',
    folstad: '1:6',
    headstart: '~1:10',
    bisp: '~1:12',
    uwc: '~1:10',
    finnway: '~1:10',
    highlight: true,
  },
  {
    feature: 'Ages',
    folstad: '2–5',
    headstart: '2–18',
    bisp: '2–18',
    uwc: '2–18',
    finnway: '2–18',
    highlight: false,
  },
  {
    feature: 'Curriculum',
    folstad: 'Cambridge EYFS',
    headstart: 'Cambridge/IB',
    bisp: 'British/IB',
    uwc: 'IB',
    finnway: 'Finnish/IB',
    highlight: false,
  },
  {
    feature: 'Languages',
    folstad: 'English + Chinese + Thai',
    headstart: 'English',
    bisp: 'English',
    uwc: 'English',
    finnway: 'English/Finnish',
    highlight: true,
  },
  {
    feature: 'Meals Included',
    folstad: '✅ All meals',
    headstart: '✅',
    bisp: '✅',
    uwc: '✅',
    finnway: '❌ Extra',
    highlight: false,
    checkColumn: true,
  },
  {
    feature: 'Materials Included',
    folstad: '✅ All included',
    headstart: '✅',
    bisp: '✅',
    uwc: '✅',
    finnway: 'Partial',
    highlight: false,
    checkColumn: true,
  },
  {
    feature: 'Daily Parent Report',
    folstad: '✅ Every day',
    headstart: 'Weekly',
    bisp: 'Weekly',
    uwc: 'Weekly',
    finnway: 'Weekly',
    highlight: true,
    checkColumn: true,
  },
  {
    feature: 'Location',
    folstad: 'Supalai Hills',
    headstart: 'Cherng Talay',
    bisp: 'Koh Kaew',
    uwc: 'Phuket Town',
    finnway: 'Bang Tao',
    highlight: false,
  },
  {
    feature: 'Setting',
    folstad: 'Home-based boutique',
    headstart: 'Large campus',
    bisp: 'Large campus',
    uwc: 'Large campus',
    finnway: 'Mid campus',
    highlight: true,
  },
];

const advantages = [
  {
    emoji: '&#128176;',
    title: 'Fraction of the Enrollment Cost',
    desc: 'Save ฿170,000–฿235,000 on enrollment fees vs. premium schools. That\u2019s money back in your family\u2019s pocket.',
    color: 'border-amber-300',
    iconBg: 'bg-amber-50',
    iconBorder: 'border-amber-200',
  },
  {
    emoji: '&#128118;',
    title: 'Truly Small Class Sizes',
    desc: 'With a maximum of 6 children, your child gets attention no large campus can match. Our 1:6 ratio is unmatched in Phuket.',
    color: 'border-sage',
    iconBg: 'bg-sage/10',
    iconBorder: 'border-sage/30',
  },
  {
    emoji: '&#127758;',
    title: 'Genuine Multilingual Program',
    desc: 'Most Phuket schools teach in English only. We add weekly Chinese and Thai sessions, giving your child a real multilingual foundation.',
    color: 'border-navy/30',
    iconBg: 'bg-navy/5',
    iconBorder: 'border-navy/15',
  },
];

function CellValue({ value }) {
  if (typeof value === 'string' && value.startsWith('✅')) {
    return (
      <span className="inline-flex items-center gap-1 font-body text-sm">
        <span className="text-green-600 font-bold">&#10003;</span>
        <span className="text-navy/70">{value.replace('✅', '').trim()}</span>
      </span>
    );
  }
  if (typeof value === 'string' && value.startsWith('❌')) {
    return (
      <span className="inline-flex items-center gap-1 font-body text-sm">
        <span className="text-red-500 font-bold">&#10007;</span>
        <span className="text-navy/70">{value.replace('❌', '').trim()}</span>
      </span>
    );
  }
  return <span className="font-body text-sm text-navy/70">{value}</span>;
}

export default function Comparison() {
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
        <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-4">
            School Comparison
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            How We Compare
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            An honest look at Folstad Curriculum alongside Phuket&apos;s top international schools.
          </p>
        </div>
      </section>

      {/* Section 1 — Intro */}
      <section className="py-14 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-navy/70 font-body text-base md:text-lg leading-relaxed">
            Phuket has excellent international schools. Here&apos;s an honest look at how Folstad
            Curriculum compares to some of the most popular options — so you can choose what&apos;s
            right for your family.
          </p>
        </div>
      </section>

      {/* Section 2 — Comparison Table */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">Side by Side</h2>
            <p className="text-navy/60 font-body text-sm">
              All figures are approximate. See disclaimer below.
            </p>
          </div>

          {/* Table — horizontally scrollable on mobile */}
          <div className="overflow-x-auto rounded-2xl shadow-card border border-navy/10">
            <table className="w-full min-w-[680px] border-collapse">
              {/* Header */}
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 text-left font-body font-bold text-sm tracking-wide rounded-tl-2xl">
                    Feature
                  </th>
                  <th className="px-5 py-4 text-center font-body font-bold text-sm bg-amber-400 text-navy">
                    Folstad
                  </th>
                  <th className="px-5 py-4 text-center font-body font-bold text-sm">HeadStart</th>
                  <th className="px-5 py-4 text-center font-body font-bold text-sm">BISP</th>
                  <th className="px-5 py-4 text-center font-body font-bold text-sm">UWC Thailand</th>
                  <th className="px-5 py-4 text-center font-body font-bold text-sm rounded-tr-2xl">
                    Finnway
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={
                      idx % 2 === 0
                        ? 'bg-white'
                        : 'bg-navy/[0.025]'
                    }
                  >
                    <td className="px-5 py-3.5 font-body text-sm font-semibold text-navy/80 border-r border-navy/10">
                      {row.feature}
                    </td>
                    {/* Folstad column — highlighted */}
                    <td className="px-5 py-3.5 text-center bg-amber-50/70 border-r border-amber-100 font-semibold">
                      {row.folstad.startsWith('✅') ? (
                        <span className="inline-flex items-center gap-1 justify-center font-body text-sm">
                          <span className="text-green-600 font-bold">&#10003;</span>
                          <span className="text-navy/80">
                            {row.folstad.replace('✅', '').trim()}
                          </span>
                        </span>
                      ) : (
                        <span className="font-body text-sm font-semibold text-navy">
                          {row.folstad}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-center border-r border-navy/5">
                      <CellValue value={row.headstart} />
                    </td>
                    <td className="px-5 py-3.5 text-center border-r border-navy/5">
                      <CellValue value={row.bisp} />
                    </td>
                    <td className="px-5 py-3.5 text-center border-r border-navy/5">
                      <CellValue value={row.uwc} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <CellValue value={row.finnway} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3 — The Folstad Advantage */}
      <section className="section-pad bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Why Families Choose Us
            </p>
            <h2 className="section-heading">The Folstad Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className={`card border-2 ${adv.color} p-8 text-center`}
              >
                <div
                  className={`w-16 h-16 ${adv.iconBg} border ${adv.iconBorder} rounded-full flex items-center justify-center mx-auto mb-5`}
                >
                  <span
                    className="text-3xl"
                    dangerouslySetInnerHTML={{ __html: adv.emoji }}
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-3 leading-snug">
                  {adv.title}
                </h3>
                <p className="font-body text-sm text-navy/65 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Disclaimer + CTA */}
      <section
        className="section-pad"
        style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2A5080 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Enroll?
          </h2>
          <p className="text-white/60 font-body text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            We would love to welcome your family. Reach out to arrange a visit or start the
            enrollment process today.
          </p>
          <Link to="/enrollment" className="btn-primary">
            Begin Enrollment &#8594;
          </Link>

          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-white/35 text-xs font-body leading-relaxed max-w-2xl mx-auto">
              Competitor fees are approximate figures based on publicly available information for the
              2025–2026 academic year. Fees may vary. Contact individual schools for current pricing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

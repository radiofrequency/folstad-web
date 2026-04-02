import { Link } from 'react-router-dom';

const domains = [
  {
    code: 'PSED',
    title: 'Personal, Social & Emotional',
    icon: '&#10084;&#65039;',
    color: 'bg-rose-50 border-rose-200',
    iconBg: 'bg-rose-100',
    desc: 'Building confidence, self-regulation, empathy, and positive relationships. Children learn who they are and how to connect with others.',
  },
  {
    code: 'C&L',
    title: 'Communication & Language',
    icon: '&#128172;',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
    desc: 'Listening, speaking, early literacy, and the joy of stories. Language is woven through every moment of every day.',
  },
  {
    code: 'PD',
    title: 'Physical Development',
    icon: '&#127939;',
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100',
    desc: 'Gross and fine motor skills through active play, outdoor exploration, and movement-rich daily activities.',
  },
  {
    code: 'MATHS',
    title: 'Mathematics',
    icon: '&#129518;',
    color: 'bg-yellow-50 border-yellow-200',
    iconBg: 'bg-yellow-100',
    desc: 'Number sense, patterns, shapes, and spatial reasoning emerge naturally through playful, hands-on investigation.',
  },
  {
    code: 'UTW',
    title: 'Understanding the World',
    icon: '&#127758;',
    color: 'bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100',
    desc: 'Science, nature, people, and technology. Children explore the world around them with wonder and curiosity.',
  },
  {
    code: 'EXP',
    title: 'Creative Expression',
    icon: '&#127912;',
    color: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-100',
    desc: 'Art, music, movement, and drama. Self-expression is celebrated and creativity is nurtured in all its forms.',
  },
];

export default function Program() {
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
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Our Approach
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            A Program Built Around Your Child
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            We combine the best of Cambridge early years education with the warmth of a home,
            creating a nurturing space where children thrive.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-pad bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Our Philosophy
              </p>
              <h2 className="section-heading mb-6">Play Is the Work of Childhood</h2>
              <div className="flex flex-col gap-4 text-navy/70 font-body leading-relaxed">
                <p>
                  At Cherngtalay Daycare, we believe deeply that children between ages 2 and 5 learn
                  through doing, exploring, and connecting — not through worksheets or rote memorization.
                </p>
                <p>
                  Every activity, transition, and interaction is intentionally designed to spark curiosity,
                  build language, and develop the whole child. Our warm, unhurried pace lets children
                  go deep into their interests.
                </p>
                <p>
                  Our intimate group setting means your child is truly seen, known, and supported
                  every single day.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '&#128218;', label: 'Story-Rich Environment' },
                { icon: '&#127919;', label: 'Intentional Play' },
                { icon: '&#127774;', label: 'Predictable Rhythms' },
                { icon: '&#128100;', label: 'Individual Attention' },
                { icon: '&#127758;', label: 'World Awareness' },
                { icon: '&#10024;', label: 'Joy-Centered Days' },
              ].map(({ icon, label }) => (
                <div key={label} className="bg-white rounded-xl p-5 shadow-card text-center border border-navy/5">
                  <span className="text-3xl block mb-2" dangerouslySetInnerHTML={{ __html: icon }} />
                  <span className="text-xs font-body font-semibold text-navy/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge Framework */}
      <section className="section-pad" style={{ backgroundColor: '#F0F5F2' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Cambridge EYFS Framework
            </p>
            <h2 className="section-heading mb-4">Six Domains of Development</h2>
            <p className="text-navy/60 font-body max-w-2xl mx-auto leading-relaxed">
              The Cambridge Early Years Foundation Stage framework provides our curriculum backbone —
              a research-backed approach to whole-child development that we bring alive through play.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map(({ code, title, icon, color, iconBg, desc }) => (
              <div key={code} className={`card border p-6 ${color}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-2xl shrink-0`}>
                    <span dangerouslySetInnerHTML={{ __html: icon }} />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-navy/40 uppercase tracking-widest">{code}</span>
                    <h3 className="font-display text-base font-semibold text-navy leading-tight">{title}</h3>
                  </div>
                </div>
                <p className="text-navy/60 text-sm font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multilingual */}
      <section className="section-pad bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Languages
            </p>
            <h2 className="section-heading mb-4">A Multilingual World in One Room</h2>
            <p className="text-navy/60 font-body max-w-xl mx-auto leading-relaxed">
              Research consistently shows that early multilingual exposure benefits cognitive development,
              cultural empathy, and future language learning. We make it natural and joyful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card border border-blue-100 overflow-visible">
              <div className="h-2 bg-blue-500 rounded-t-2xl" />
              <div className="p-6">
                <div className="text-3xl mb-4">&#127482;&#127480;</div>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">English</h3>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-body font-bold mb-4">
                  Primary Language
                </div>
                <p className="text-navy/60 text-sm font-body leading-relaxed">
                  All instruction, conversation, and activities are in English. Our full-time lead teacher
                  creates a rich, language-saturated environment through books, songs, movement, and dialogue.
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {['All-day English immersion', 'Dedicated story time', 'Language-rich play centers', 'Phonological awareness activities'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm font-body text-navy/70">
                      <span className="text-sage text-xs">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card border border-red-100 overflow-visible">
              <div className="h-2 bg-red-500 rounded-t-2xl" />
              <div className="p-6">
                <div className="text-3xl mb-4">&#127464;&#127475;</div>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">Chinese (Mandarin)</h3>
                <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-body font-bold mb-4">
                  Weekly Visitor
                </div>
                <p className="text-navy/60 text-sm font-body leading-relaxed">
                  Our Chinese language visitor joins us weekly to introduce Mandarin through songs,
                  counting games, traditional stories, and cultural celebrations.
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {['Weekly sessions', 'Songs & counting', 'Cultural stories', 'Seasonal traditions'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm font-body text-navy/70">
                      <span className="text-sage text-xs">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card border border-green-100 overflow-visible">
              <div className="h-2 bg-green-600 rounded-t-2xl" />
              <div className="p-6">
                <div className="text-3xl mb-4">&#127481;&#127469;</div>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">Thai</h3>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-body font-bold mb-4">
                  Weekly Visitor
                </div>
                <p className="text-navy/60 text-sm font-body leading-relaxed">
                  Our Thai language visitor introduces children to the beauty of Thai through playful
                  greetings, local songs, and the rich culture of the country they call home.
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {['Weekly sessions', 'Greetings & songs', 'Thai cultural activities', 'Local celebrations'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm font-body text-navy/70">
                      <span className="text-sage text-xs">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2A5080 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-white/60 font-body mb-8">
            Download our Program Overview PDF or reach out with your questions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`${import.meta.env.BASE_URL}pdfs/00_program_overview.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              &#128196; Download Program Overview
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

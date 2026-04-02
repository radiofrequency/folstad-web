import { useState } from 'react';
import { Link } from 'react-router-dom';

const themes = [
  {
    week: 'Week 1',
    title: 'All About Me',
    emoji: '&#127775;',
    color: 'border-amber-300',
    headerBg: 'bg-amber-400',
    headerText: 'text-navy',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-800',
    description: 'Children begin by exploring the most fascinating subject there is — themselves! They celebrate their bodies, families, feelings, and uniqueness.',
    learningAreas: ['Personal, Social & Emotional', 'Communication & Language', 'Physical Development'],
    activities: [
      'Self-portrait painting',
      'My family photo book',
      'Body parts songs & movement',
      'Feelings faces matching',
      'Mirror play & observation',
    ],
    chineseLanguage: 'Body parts vocabulary, greetings & family member names in Mandarin',
    thaiLanguage: 'Simple greetings, emotion words, and family vocabulary in Thai',
  },
  {
    week: 'Week 2',
    title: 'Animals & Nature',
    emoji: '&#127802;',
    color: 'border-green-300',
    headerBg: 'bg-sage',
    headerText: 'text-white',
    tagBg: 'bg-green-100',
    tagText: 'text-green-800',
    description: 'The natural world comes to life as children explore animals, insects, plants, and the wonders of the outdoor environment right here in Phuket.',
    learningAreas: ['Understanding the World', 'Communication & Language', 'Mathematics'],
    activities: [
      'Bug hunt & magnifying glass exploration',
      'Animal sound matching games',
      'Leaf & nature printing',
      'Animal classification sorting',
      'Planting seeds & observing growth',
    ],
    chineseLanguage: 'Animal names in Mandarin (dog, cat, bird, fish), nature vocabulary',
    thaiLanguage: 'Thai animal names, common plants found in Thailand, nature songs',
  },
  {
    week: 'Week 3',
    title: 'Colors & Shapes',
    emoji: '&#127912;',
    color: 'border-purple-300',
    headerBg: 'bg-purple-500',
    headerText: 'text-white',
    tagBg: 'bg-purple-100',
    tagText: 'text-purple-800',
    description: 'A deep dive into the visual world — children become artists, mathematicians, and scientists as they explore color mixing, shape hunting, and pattern making.',
    learningAreas: ['Mathematics', 'Creative Expression', 'Understanding the World'],
    activities: [
      'Watercolor mixing & color wheels',
      'Shape scavenger hunt around the house',
      'Block building & shape sorting',
      'Pattern bead threading',
      'Collage with colored paper & shapes',
    ],
    chineseLanguage: 'Colors and basic shapes in Mandarin — hong (red), lan (blue), yuan (circle)',
    thaiLanguage: 'Color words in Thai, shape vocabulary, color song "Sii Arai" (What Color?)',
  },
  {
    week: 'Week 4',
    title: 'Water & Swimming',
    emoji: '&#127754;',
    color: 'border-blue-300',
    headerBg: 'bg-blue-500',
    headerText: 'text-white',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-800',
    description: 'Celebrating water in all its forms — from rain and rivers to our own swimming pool. Science, sensory exploration, and water safety tie into our Wednesday swimming sessions.',
    learningAreas: ['Physical Development', 'Understanding the World', 'Mathematics'],
    activities: [
      'Water pouring & volume experiments',
      'Rain and weather observation',
      'Sink or float sorting',
      'Water painting on pavement',
      'Swimming pool games & water confidence',
    ],
    chineseLanguage: 'Water-related vocabulary — rain, river, ocean, swimming, wet/dry in Mandarin',
    thaiLanguage: 'Thai water words, Thai rain song, water safety phrases in Thai',
  },
];

function ThemeCard({ theme, isExpanded, onToggle }) {
  const { week, title, emoji, color, headerBg, headerText, tagBg, tagText, description, learningAreas, activities, chineseLanguage, thaiLanguage } = theme;

  return (
    <div className={`card border-2 ${color} group`}>
      {/* Header */}
      <div
        className={`${headerBg} ${headerText} p-6 cursor-pointer`}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl" dangerouslySetInnerHTML={{ __html: emoji }} />
            <div>
              <p className={`text-xs font-body font-bold uppercase tracking-widest opacity-70 mb-0.5`}>
                {week}
              </p>
              <h3 className="font-display text-2xl font-semibold">{title}</h3>
            </div>
          </div>
          <div className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Expandable body */}
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="p-6 flex flex-col gap-6">
          <p className="text-navy/70 font-body leading-relaxed">{description}</p>

          {/* Learning Areas */}
          <div>
            <h4 className="font-display font-semibold text-navy text-sm uppercase tracking-wide mb-3">
              Key Learning Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {learningAreas.map((area) => (
                <span
                  key={area}
                  className={`px-3 py-1 ${tagBg} ${tagText} rounded-full text-xs font-body font-semibold`}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h4 className="font-display font-semibold text-navy text-sm uppercase tracking-wide mb-3">
              What Children Will Do
            </h4>
            <ul className="flex flex-col gap-2">
              {activities.map((activity) => (
                <li key={activity} className="flex items-center gap-3 text-sm font-body text-navy/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          {/* Language Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span>&#127464;&#127475;</span>
                <span className="font-body font-bold text-xs text-red-700 uppercase tracking-wide">Chinese Focus</span>
              </div>
              <p className="text-sm font-body text-navy/60 leading-relaxed">{chineseLanguage}</p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span>&#127481;&#127469;</span>
                <span className="font-body font-bold text-xs text-green-700 uppercase tracking-wide">Thai Focus</span>
              </div>
              <p className="text-sm font-body text-navy/60 leading-relaxed">{thaiLanguage}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Collapsed preview */}
      {!isExpanded && (
        <div className="px-6 pb-5">
          <p className="text-sm text-navy/50 font-body line-clamp-2">{description}</p>
          <button
            onClick={onToggle}
            className="mt-3 text-sage font-body font-semibold text-sm hover:text-sage-dark transition-colors"
          >
            Explore this week &#8594;
          </button>
        </div>
      )}
    </div>
  );
}

export default function Curriculum() {
  const [expanded, setExpanded] = useState(0);

  const toggle = (idx) => setExpanded(expanded === idx ? null : idx);

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
        <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Curriculum
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            4-Week Theme Journey
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            Each month, children travel through four rich thematic worlds — discovering, creating, and
            growing along the way.
          </p>
        </div>
      </section>

      {/* Overview strip */}
      <section className="bg-sage py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white text-center">
            {themes.map(({ week, title, emoji }) => (
              <div key={week} className="flex items-center gap-2">
                <span dangerouslySetInnerHTML={{ __html: emoji }} />
                <div className="text-left">
                  <p className="text-white/60 text-xs font-body">{week}</p>
                  <p className="font-body font-bold text-sm">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Cards */}
      <section className="section-pad bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Explore Each Week
            </p>
            <h2 className="section-heading mb-4">Click a Theme to Explore</h2>
            <p className="text-navy/60 font-body max-w-xl mx-auto">
              Each weekly theme integrates all six Cambridge developmental domains through hands-on,
              joyful activities.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {themes.map((theme, idx) => (
              <ThemeCard
                key={theme.week}
                theme={theme}
                isExpanded={expanded === idx}
                onToggle={() => toggle(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Download section */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2A5080 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl text-white font-semibold mb-4">
            Download the Full 4-Week Plan
          </h2>
          <p className="text-white/60 font-body mb-8">
            Get the complete curriculum overview including week-by-week activities and language focus areas.
          </p>
          <a
            href="/pdfs/02_curriculum_4week_plan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            &#128196; Download Curriculum PDF
          </a>
        </div>
      </section>
    </>
  );
}

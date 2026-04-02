const jobs = [
  {
    title: 'English Lead Teacher',
    type: 'Full-Time',
    emoji: '&#127891;',
    color: 'border-blue-200',
    topBar: 'bg-blue-500',
    tagBg: 'bg-blue-100 text-blue-700',
    pdfFile: '08_job_posting_english_teacher.pdf',
    mailSubject: 'English Lead Teacher Application – Folstad Curriculum',
    summary: 'We are seeking a warm, creative, and experienced early childhood educator to serve as our full-time English Lead Teacher. You will be the heart of our daily program — designing activities, building relationships with families, and creating a language-rich environment for our incredible 2–5 year olds.',
    responsibilities: [
      'Plan and deliver daily Cambridge EYFS-aligned activities',
      'Create a rich English language environment through books, songs, and conversation',
      'Complete personalized Daily Logs for each child every afternoon',
      'Collaborate with Chinese and Thai language visitors to integrate weekly themes',
      'Communicate warmly and professionally with families',
      'Maintain a safe, nurturing, and well-organized learning space',
    ],
    qualifications: [
      'Degree or diploma in Early Childhood Education (or equivalent)',
      '2+ years experience with children ages 2–5',
      'Native or near-native English speaker',
      'Understanding of play-based and inquiry-driven learning',
      'Strong communication and interpersonal skills',
      'Experience with Cambridge EYFS or similar frameworks is a plus',
      'Work permit eligibility for Thailand (or current permission to work)',
    ],
    hours: 'Monday – Friday · 7:30 AM – 5:30 PM',
    location: '98 Supalai Hills, Phuket, Thailand',
  },
  {
    title: 'Chinese Language Visitor',
    type: 'Part-Time · Weekly',
    emoji: '&#127464;&#127475;',
    color: 'border-red-200',
    topBar: 'bg-red-500',
    tagBg: 'bg-red-100 text-red-700',
    pdfFile: '09_job_posting_chinese_visitor.pdf',
    mailSubject: 'Chinese Language Visitor Application – Folstad Curriculum',
    summary: 'We are looking for a warm and engaging Mandarin Chinese speaker to join us once a week as our Chinese Language Visitor. Your sessions bring the joy of Mandarin to young children through songs, stories, games, and cultural activities aligned to our weekly theme.',
    responsibilities: [
      'Deliver one weekly 45–60 minute language session in Mandarin',
      'Prepare songs, vocabulary activities, and culturally rich content',
      'Align language content with the current weekly curriculum theme',
      'Build rapport with children ages 2–5 in a warm, playful way',
      'Share a brief language note for inclusion in the weekly family summary',
    ],
    qualifications: [
      'Native or near-native Mandarin Chinese speaker',
      'Experience working with young children (ages 2–5)',
      'Enthusiastic, warm, and playful teaching style',
      'Passion for language, culture, and early childhood',
      'Early childhood education background is a plus',
    ],
    hours: 'One afternoon per week · Approx. 1–2 hours',
    location: '98 Supalai Hills, Phuket, Thailand',
  },
  {
    title: 'Thai Language Visitor',
    type: 'Part-Time · Weekly',
    emoji: '&#127481;&#127469;',
    color: 'border-green-200',
    topBar: 'bg-green-600',
    tagBg: 'bg-green-100 text-green-700',
    pdfFile: '10_job_posting_thai_visitor.pdf',
    mailSubject: 'Thai Language Visitor Application – Folstad Curriculum',
    summary: 'We are seeking a warm Thai language speaker to join our program weekly as our Thai Language Visitor. You will help our youngest learners discover the beauty of Thai through songs, greetings, stories, and cultural celebrations — creating genuine multilingual joy.',
    responsibilities: [
      'Deliver one weekly 45–60 minute language session in Thai',
      'Introduce Thai vocabulary, songs, and greetings suited to ages 2–5',
      'Bring culturally relevant activities, stories, and seasonal traditions',
      'Align content with the current weekly curriculum theme',
      'Share language highlights for family communication',
    ],
    qualifications: [
      'Native Thai speaker with strong communication skills',
      'Comfortable working with young children (ages 2–5)',
      'Playful, patient, and nurturing approach',
      'Passion for Thai language and culture',
      'Teaching or childcare experience preferred',
    ],
    hours: 'One afternoon per week · Approx. 1–2 hours',
    location: '98 Supalai Hills, Phuket, Thailand',
  },
];

export default function Jobs() {
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
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-sage/20 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Careers
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Join Our Team
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            We are building something small, meaningful, and excellent. If you love young children,
            language, and intentional education — we&apos;d love to meet you.
          </p>
        </div>
      </section>

      {/* Culture note */}
      <section className="bg-sage py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-white">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-display text-xl font-semibold mb-1">Working at Folstad</h3>
              <p className="text-white/70 font-body text-sm">
                Small team. Big purpose. You will be known, appreciated, and trusted.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Small Team', 'Warm Culture', 'Meaningful Work', 'Phuket Based'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/15 rounded-full text-sm font-body font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Cards */}
      <section className="section-pad bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-8">
            {jobs.map((job) => (
              <div key={job.title} className={`card border-2 ${job.color} overflow-visible`}>
                <div className={`h-1.5 ${job.topBar} rounded-t-2xl`} />
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl" dangerouslySetInnerHTML={{ __html: job.emoji }} />
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-navy">{job.title}</h2>
                        <span className={`inline-block mt-1 px-3 py-0.5 ${job.tagBg} rounded-full text-xs font-body font-bold`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`/pdfs/${job.pdfFile}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-navy/20 text-navy/70 rounded-full text-sm font-body font-semibold hover:border-navy hover:text-navy transition-all"
                      >
                        &#128196; Job PDF
                      </a>
                      <a
                        href={`mailto:jobs@folstadcurriculum.com?subject=${encodeURIComponent(job.mailSubject)}`}
                        className="btn-primary"
                      >
                        Apply Now &#8594;
                      </a>
                    </div>
                  </div>

                  <p className="text-navy/70 font-body leading-relaxed mb-6">{job.summary}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-body font-bold text-navy text-sm uppercase tracking-wide mb-3">
                        Responsibilities
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {job.responsibilities.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm font-body text-navy/70">
                            <span className="text-sage mt-0.5 shrink-0">&#10003;</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-body font-bold text-navy text-sm uppercase tracking-wide mb-3">
                        Qualifications
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {job.qualifications.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm font-body text-navy/70">
                            <span className="text-amber-500 mt-0.5 shrink-0">&#9733;</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-navy/10">
                    <div className="flex items-center gap-3 text-sm font-body text-navy/60">
                      <span className="text-navy/40">&#128337;</span>
                      <div>
                        <p className="font-bold text-xs text-navy/40 uppercase tracking-wide">Hours</p>
                        <p>{job.hours}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-body text-navy/60">
                      <span className="text-navy/40">&#127968;</span>
                      <div>
                        <p className="font-bold text-xs text-navy/40 uppercase tracking-wide">Location</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2A5080 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl text-white font-semibold mb-4">
            Questions Before Applying?
          </h2>
          <p className="text-white/60 font-body mb-6">
            We are happy to answer any questions about our positions, schedule, or expectations.
          </p>
          <a
            href="mailto:jobs@folstadcurriculum.com"
            className="btn-primary"
          >
            &#9993; Email Us
          </a>
        </div>
      </section>
    </>
  );
}

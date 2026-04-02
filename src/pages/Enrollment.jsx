import { useState } from 'react';

const docs = [
  { name: 'Program Overview', file: '00_program_overview.pdf', desc: 'Full overview of our program, philosophy, and approach.' },
  { name: 'Daily Schedule', file: '01_daily_schedule.pdf', desc: 'Hour-by-hour daily schedule for Mon–Fri.' },
  { name: '4-Week Curriculum Plan', file: '02_curriculum_4week_plan.pdf', desc: 'Complete curriculum outline with themes and activities.' },
  { name: 'Daily Log Form', file: '03_daily_log.pdf', desc: 'The parent-facing daily log template.' },
  { name: 'Weekly Summary Form', file: '04_weekly_summary.pdf', desc: 'End-of-week family summary format.' },
  { name: 'Parent Welcome Letter', file: '05_parent_welcome_letter.pdf', desc: 'Our welcome letter to new families.' },
  { name: 'Parent Consent Form', file: '06_parent_consent_form.pdf', desc: 'Consent and authorization form for enrollment.' },
  { name: 'Child Health Record', file: '07_health_record.pdf', desc: 'Health information and emergency contacts form.' },
  { name: 'Enrollment Application', file: '11_enrollment_application.pdf', desc: 'The full enrollment application form.' },
];

const details = [
  { icon: '&#128197;', label: 'Program Days', value: 'Monday – Friday' },
  { icon: '&#8987;', label: 'Hours', value: '7:30 AM – 5:30 PM' },
  { icon: '&#127381;', label: 'Ages', value: '2–5 Years Old' },
  { icon: '&#128218;', label: 'Curriculum', value: 'Cambridge EYFS · Play-Based' },
  { icon: '&#127758;', label: 'Languages', value: 'English · Chinese · Thai' },
  { icon: '&#127968;', label: 'Setting', value: '98 Supalai Hills, Phuket' },
  { icon: '&#128176;', label: 'Enrollment Fee', value: '฿30,000 (one-time)' },
  { icon: '&#128197;', label: 'Monthly Tuition', value: '฿30,000 / month' },
];

export default function Enrollment() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    childName: '', dob: '', parentName1: '', parentName2: '',
    email: '', phone: '', languages: '', interest: '', considerations: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `🎒 New Enrollment Application\n\nChild: ${form.childName} (DOB: ${form.dob})\nParent 1: ${form.parentName1}\nParent 2: ${form.parentName2 || 'N/A'}\nEmail: ${form.email}\nPhone: ${form.phone}\nLanguages at home: ${form.languages || 'N/A'}\nWhy interested: ${form.interest || 'N/A'}\nSpecial considerations: ${form.considerations || 'N/A'}`;
    await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID, text }),
    });
    setSubmitted(true);
  };

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
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Enrollment
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Join the Folstad Family
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to welcome your child into our warm, playful community.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="section-pad bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Program Details
            </p>
            <h2 className="section-heading">What to Expect</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {details.map(({ icon, label, value }) => (
              <div key={label} className="bg-white rounded-2xl p-5 shadow-card text-center border border-navy/5">
                <span className="text-3xl block mb-2" dangerouslySetInnerHTML={{ __html: icon }} />
                <p className="text-xs font-body font-bold text-navy/40 uppercase tracking-wide mb-1">{label}</p>
                <p className="font-body font-semibold text-navy text-sm leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="section-pad" style={{ backgroundColor: '#F0F5F2' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Get Started
            </p>
            <h2 className="section-heading">Enrollment Application</h2>
            <p className="text-navy/60 font-body mt-3 max-w-lg mx-auto">
              Fill out this form to express your interest. We&apos;ll be in touch within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-3xl shadow-card p-12 text-center border border-sage/20">
              <span className="text-6xl block mb-6">&#127881;</span>
              <h3 className="font-display text-2xl font-semibold text-navy mb-4">
                Application Received!
              </h3>
              <p className="text-navy/60 font-body leading-relaxed">
                Thank you for your interest in Folstad Curriculum. We&apos;ll review your application
                and be in touch within 48 hours to schedule a meet-and-greet.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-card p-8 border border-navy/5"
            >
              {/* Child Info */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold text-navy mb-5 pb-3 border-b border-navy/10">
                  Child Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                      Child&apos;s Full Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      required
                      value={form.childName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
                      placeholder="First and last name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      required
                      value={form.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Parent Info */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold text-navy mb-5 pb-3 border-b border-navy/10">
                  Parent / Guardian Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                      Parent / Guardian 1 *
                    </label>
                    <input
                      type="text"
                      name="parentName1"
                      required
                      value={form.parentName1}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                      Parent / Guardian 2
                    </label>
                    <input
                      type="text"
                      name="parentName2"
                      value={form.parentName2}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
                      placeholder="Full name (optional)"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
                      placeholder="+66 or international format"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                    Languages Spoken at Home
                  </label>
                  <input
                    type="text"
                    name="languages"
                    value={form.languages}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
                    placeholder="e.g., English, Thai, Chinese..."
                  />
                </div>
              </div>

              {/* Questions */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold text-navy mb-5 pb-3 border-b border-navy/10">
                  Tell Us About Your Family
                </h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                      Why are you interested in Folstad Curriculum? *
                    </label>
                    <textarea
                      name="interest"
                      required
                      rows={4}
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all resize-none"
                      placeholder="Tell us what draws you to our program..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                      Any special considerations, allergies, or needs?
                    </label>
                    <textarea
                      name="considerations"
                      rows={3}
                      value={form.considerations}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all resize-none"
                      placeholder="Dietary needs, allergies, developmental considerations..."
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-amber-400 text-navy font-bold rounded-xl font-body text-base hover:bg-amber-300 transition-all shadow-md hover:shadow-lg"
              >
                Submit Application &#8594;
              </button>
              <p className="text-center text-xs text-navy/40 font-body mt-4">
                We respond within 48 hours. No commitment required.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Documents */}
      <section className="section-pad bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Forms & Documents
            </p>
            <h2 className="section-heading mb-4">Download & Review</h2>
            <p className="text-navy/60 font-body max-w-lg mx-auto">
              All our program documents are available for download. We encourage families to read
              them before reaching out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {docs.map(({ name, file, desc }) => (
              <a
                key={file}
                href={`${import.meta.env.BASE_URL}pdfs/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card border border-navy/8 p-5 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center text-red-500 text-sm shrink-0 group-hover:bg-red-100 transition-colors">
                    PDF
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-navy text-sm mb-1 group-hover:text-sage transition-colors">{name}</h4>
                    <p className="text-navy/50 text-xs font-body leading-relaxed">{desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

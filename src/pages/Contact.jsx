import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `📬 New Contact Form\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject || 'N/A'}\nMessage: ${form.message}`;
    await fetch(`https://api.telegram.org/bot8740238835:AAELxm2JCLcnkMf1qyXTk_yq6ZwV05eLNj8/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: 241746889, text }),
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
        <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-sage/20 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            Whether you have questions about enrollment, our program, or just want to say hello —
            our door is always open.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-pad bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <p className="text-sage font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Program Information
              </p>
              <h2 className="section-heading mb-6">Find Us</h2>
              <div className="flex flex-col gap-5 mb-8">
                {[
                  {
                    icon: '&#127968;',
                    label: 'Setting',
                    value: '98 Supalai Hills, Phuket',
                    sub: 'Phuket, Thailand',
                  },
                  {
                    icon: '&#128197;',
                    label: 'Program Days',
                    value: 'Monday – Friday',
                    sub: '5 days a week',
                  },
                  {
                    icon: '&#128336;',
                    label: 'Hours',
                    value: '7:30 AM – 5:30 PM',
                    sub: 'Drop-off from 7:30 AM',
                  },
                  {
                    icon: '&#128100;',
                    label: 'Capacity',
                    value: 'Ages 2–5',
                    sub: 'Open Enrollment',
                  },
                  {
                    icon: '&#9993;',
                    label: 'Email',
                    value: 'hello@folstadcurriculum.com',
                    sub: 'We respond within 24–48 hours',
                    link: 'mailto:hello@folstadcurriculum.com',
                  },
                ].map(({ icon, label, value, sub, link }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl shrink-0">
                      <span dangerouslySetInnerHTML={{ __html: icon }} />
                    </div>
                    <div>
                      <p className="text-xs font-body font-bold text-navy/40 uppercase tracking-wide mb-0.5">{label}</p>
                      {link ? (
                        <a href={link} className="font-body font-semibold text-navy hover:text-sage transition-colors text-sm">
                          {value}
                        </a>
                      ) : (
                        <p className="font-body font-semibold text-navy text-sm">{value}</p>
                      )}
                      {sub && <p className="text-navy/50 font-body text-xs mt-0.5">{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h4 className="font-display font-semibold text-navy text-sm mb-3">Quick Links</h4>
                <div className="flex flex-col gap-2">
                  <a
                    href={`${import.meta.env.BASE_URL}pdfs/05_parent_welcome_letter.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-body text-navy/70 hover:text-sage transition-colors"
                  >
                    &#128196; Parent Welcome Letter
                  </a>
                  <a
                    href={`${import.meta.env.BASE_URL}pdfs/00_program_overview.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-body text-navy/70 hover:text-sage transition-colors"
                  >
                    &#128196; Program Overview PDF
                  </a>
                  <a
                    href={`${import.meta.env.BASE_URL}pdfs/11_enrollment_application.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-body text-navy/70 hover:text-sage transition-colors"
                  >
                    &#128196; Enrollment Application PDF
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-white rounded-3xl shadow-card p-12 text-center border border-sage/20 h-full flex flex-col items-center justify-center">
                  <span className="text-6xl block mb-6">&#128140;</span>
                  <h3 className="font-display text-2xl font-semibold text-navy mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-navy/60 font-body leading-relaxed">
                    Thank you for reaching out. We&apos;ll get back to you within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl shadow-card p-8 border border-navy/5 flex flex-col gap-5"
                >
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy mb-1">Send Us a Message</h3>
                    <p className="text-navy/50 font-body text-sm">We respond within 24–48 hours.</p>
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
                      placeholder="Your full name"
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
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a topic…</option>
                      <option value="enrollment">Enrollment Inquiry</option>
                      <option value="curriculum">Curriculum Questions</option>
                      <option value="schedule">Schedule & Hours</option>
                      <option value="jobs">Jobs / Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-navy/60 uppercase tracking-wide mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-4 bg-amber-400 text-navy font-bold rounded-xl font-body text-base hover:bg-amber-300 transition-all shadow-md hover:shadow-lg"
                  >
                    Send Message &#8594;
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

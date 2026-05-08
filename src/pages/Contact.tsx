import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Mail, Phone, MessageCircle, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: 'What is your typical project timeline?',
    a: 'Most ESP32 automation projects take 2-4 weeks from design to deployment. BMS power solutions typically require 1-2 weeks. E-waste repurposing projects vary based on complexity, ranging from 3 days to 2 weeks. Rush orders can be accommodated with prior notice.',
  },
  {
    q: 'How do you price your services?',
    a: 'We provide custom quotes based on project complexity, component requirements, and timeline. ESP32 projects start from PKR 15,000, BMS configurations from PKR 8,000, and e-waste repurposing from PKR 5,000. We offer student discounts with valid ID.',
  },
  {
    q: 'Do you offer warranty on your builds?',
    a: 'All our builds come with a 30-day functional warranty covering workmanship and component defects. BMS power solutions include a 90-day battery performance guarantee. Extended warranties are available for industrial deployments.',
  },
  {
    q: 'Can you ship outside Lahore?',
    a: 'Yes, we ship nationwide via TCS and Leopard Courier. Delivery typically takes 2-3 business days to major cities (Karachi, Islamabad, Rawalpindi) and 4-5 days to other locations. Fragile electronics are packaged with anti-static materials and shock protection.',
  },
  {
    q: 'Do you provide source code and documentation?',
    a: 'Absolutely. All ESP32 projects include fully commented C++ source code, circuit schematics, and a build guide. We believe in empowering our clients with knowledge. Custom firmware licensing terms are discussed during project scoping.',
  },
]

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-anim', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-form-section', start: 'top 80%' },
      })
      gsap.fromTo('.contact-info-card', { opacity: 0, x: 20 }, {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-details', start: 'top 80%' },
      })
      gsap.fromTo('.faq-item', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.faq-section', start: 'top 80%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you within 24 hours.')
  }

  return (
    <div ref={pageRef} className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-void flex items-center justify-center px-4">
        <div className="text-center">
          <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
            /// CONTACT
          </span>
          <h1 className="font-display font-bold text-[clamp(48px,10vw,120px)] leading-[0.9] tracking-[-0.04em] text-white mt-4">
            LET&apos;S
            <br />
            <span className="text-accent-green">BUILD</span>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-[560px] mx-auto mt-6">
            Every project starts with a conversation. Tell us what you&apos;re building.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="contact-form-section py-20 md:py-32 bg-surface px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <span className="contact-anim font-mono font-medium text-xs text-accent-green tracking-[0.08em] block opacity-0">
              /// GET IN TOUCH
            </span>
            <h2 className="contact-anim font-display font-bold text-[clamp(32px,5vw,72px)] tracking-[-0.03em] text-white mt-2 opacity-0">
              START A
              <br />
              CUSTOM BUILD
            </h2>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="contact-anim grid grid-cols-1 sm:grid-cols-2 gap-5 opacity-0">
                <div>
                  <label className="block font-mono font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-void border border-border-subtle rounded px-4 py-3.5 font-body text-[15px] text-white focus:border-accent-green focus:shadow-[0_0_0_2px_rgba(0,255,0,0.1)] outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-mono font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-void border border-border-subtle rounded px-4 py-3.5 font-body text-[15px] text-white focus:border-accent-green focus:shadow-[0_0_0_2px_rgba(0,255,0,0.1)] outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="contact-anim opacity-0">
                <label className="block font-mono font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase mb-2">
                  Company / Institution
                </label>
                <input
                  type="text"
                  className="w-full bg-void border border-border-subtle rounded px-4 py-3.5 font-body text-[15px] text-white focus:border-accent-green focus:shadow-[0_0_0_2px_rgba(0,255,0,0.1)] outline-none transition-all"
                  placeholder="Optional"
                />
              </div>

              <div className="contact-anim opacity-0">
                <label className="block font-mono font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase mb-2">
                  Project Type *
                </label>
                <select
                  required
                  className="w-full bg-void border border-border-subtle rounded px-4 py-3.5 font-body text-[15px] text-white focus:border-accent-green outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select project type</option>
                  <option value="esp32">ESP32 Automation</option>
                  <option value="ewaste">E-Waste Repurposing</option>
                  <option value="bms">BMS Power Solution</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact-anim opacity-0">
                <label className="block font-mono font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase mb-2">
                  Budget Range
                </label>
                <select className="w-full bg-void border border-border-subtle rounded px-4 py-3.5 font-body text-[15px] text-white focus:border-accent-green outline-none transition-all appearance-none cursor-pointer">
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under PKR 10,000</option>
                  <option value="10k-25k">PKR 10,000 - 25,000</option>
                  <option value="25k-50k">PKR 25,000 - 50,000</option>
                  <option value="50k+">PKR 50,000+</option>
                </select>
              </div>

              <div className="contact-anim opacity-0">
                <label className="block font-mono font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase mb-2">
                  Preferred Contact
                </label>
                <div className="flex gap-6">
                  {['Email', 'WhatsApp', 'Call'].map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method.toLowerCase()}
                        className="accent-accent-green"
                      />
                      <span className="font-body text-sm text-text-secondary">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="contact-anim opacity-0">
                <label className="block font-mono font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-void border border-border-subtle rounded px-4 py-3.5 font-body text-[15px] text-white focus:border-accent-green focus:shadow-[0_0_0_2px_rgba(0,255,0,0.1)] outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="contact-anim w-full bg-accent-green text-void font-display font-semibold text-sm tracking-[0.04em] py-4 rounded hover:brightness-110 transition-all opacity-0"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <div className="space-y-6">
              <div className="contact-info-card flex gap-4 bg-elevated p-6 rounded-lg opacity-0">
                <div className="w-11 h-11 rounded-full bg-void flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-accent-green" />
                </div>
                <div>
                  <h3 className="font-mono font-medium text-xs text-accent-green tracking-[0.08em] uppercase">
                    WORKSHOP
                  </h3>
                  <p className="font-body text-sm text-text-secondary mt-2 leading-relaxed">
                    123 Tech Corridor, Gulberg III
                    <br />
                    Lahore, Punjab 54000
                    <br />
                    Pakistan
                  </p>
                </div>
              </div>

              <div className="contact-info-card flex gap-4 bg-elevated p-6 rounded-lg opacity-0">
                <div className="w-11 h-11 rounded-full bg-void flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-accent-green" />
                </div>
                <div>
                  <h3 className="font-mono font-medium text-xs text-accent-green tracking-[0.08em] uppercase">
                    EMAIL
                  </h3>
                  <p className="font-mono text-sm text-white mt-2">hello@scrapsilicon.com</p>
                  <p className="font-mono text-sm text-white mt-1">support@scrapsilicon.com</p>
                </div>
              </div>

              <div className="contact-info-card flex gap-4 bg-elevated p-6 rounded-lg opacity-0">
                <div className="w-11 h-11 rounded-full bg-void flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent-green" />
                </div>
                <div>
                  <h3 className="font-mono font-medium text-xs text-accent-green tracking-[0.08em] uppercase">
                    PHONE
                  </h3>
                  <p className="font-mono text-sm text-white mt-2">+92 300 1234567</p>
                  <p className="font-mono text-sm text-white mt-1">+92 321 7654321</p>
                  <a
                    href="https://wa.me/923001234567?text=Hi%20Scrap%20%26%20Silicon%2C%20I%20have%20a%20project%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 font-mono text-xs text-accent-green hover:underline"
                  >
                    <MessageCircle size={14} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-info-card bg-elevated p-6 rounded-lg opacity-0">
                <h3 className="font-mono font-medium text-xs text-accent-green tracking-[0.08em] uppercase mb-4">
                  FOLLOW US
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/scrapsilicon' },
                    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/company/scrapsilicon' },
                    { icon: <Twitter size={20} />, label: 'Twitter', href: 'https://twitter.com/scrapsilicon' },
                    { icon: <MessageCircle size={20} />, label: 'WhatsApp', href: 'https://wa.me/923001234567' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-void flex items-center justify-center text-text-secondary hover:bg-accent-green hover:text-void transition-all duration-300"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="bg-void px-4 sm:px-6 pb-0">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-lg overflow-hidden h-[400px] grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a27e1e5f9%3A0x6f0!2sGulberg%2C+Lahore%2C+Punjab%2C+Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'hue-rotate(90deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Scrap & Silicon Solutions Location - Gulberg, Lahore"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-20 md:py-32 bg-void px-4 sm:px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
              /// FAQ
            </span>
            <h2 className="font-display font-semibold text-[clamp(32px,5vw,72px)] tracking-[-0.03em] text-white mt-2">
              COMMON QUESTIONS
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item bg-surface rounded-lg border border-border-subtle overflow-hidden opacity-0"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-elevated/50 transition-colors"
                >
                  <span className="font-display font-semibold text-lg text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-accent-green shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <p className="font-body text-base text-text-secondary leading-relaxed px-5 pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

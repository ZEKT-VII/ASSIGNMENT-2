import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Recycle, Battery, ArrowRight, Quote, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ─── Hero Section ─── */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const rulerRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        rulerRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power2.out' }
      )
        .to(rulerRef.current, {
          y: 0,
          duration: 1.0,
          ease: 'power3.inOut',
        }, '+=0.2')
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          h1Ref.current?.querySelectorAll('.word') || [],
          { opacity: 0, y: 60, skewY: 4 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.8, stagger: 0.12 },
          '-=0.2'
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          '-=0.2'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] bg-void flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Animated Ruler */}
      <div
        ref={rulerRef}
        className="absolute top-[30vh] left-0 right-0 h-[60px] bg-ruler-bg/80 overflow-hidden"
        style={{ transform: 'translateY(0)' }}
      >
        <div className="flex items-end h-full gap-[1px] px-4">
          {Array.from({ length: 60 }).map((_, i) => {
            const isMajor = i % 10 === 0
            const isMedium = i % 5 === 0
            return (
              <div key={i} className="flex flex-col items-center flex-1">
                <div
                  className={`w-[1px] ${
                    isMajor
                      ? 'h-[60px] bg-accent-green'
                      : isMedium
                      ? 'h-[30px] bg-border-subtle'
                      : 'h-[15px] bg-[rgba(255,255,255,0.05)]'
                  }`}
                />
                {isMajor && (
                  <span className="font-mono text-[10px] text-text-secondary mt-1">
                    {i * 10}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-[800px] mt-16">
        <div
          ref={taglineRef}
          className="font-mono font-medium text-xs text-accent-green tracking-[0.08em] uppercase mb-6 opacity-0"
        >
          /// LAHORE-BASED E-WASTE INNOVATION LAB
        </div>

        <h1
          ref={h1Ref}
          className="font-display font-bold text-[clamp(48px,10vw,120px)] leading-[0.9] tracking-[-0.04em] text-white mb-6"
        >
          <span className="word inline-block opacity-0">FROM</span>{' '}
          <span className="word inline-block opacity-0">SCRAP</span>
          <br />
          <span className="word inline-block opacity-0">TO</span>{' '}
          <span className="word inline-block text-accent-green opacity-0">SILICON</span>
        </h1>

        <p
          ref={subRef}
          className="font-body text-lg text-text-secondary max-w-[560px] mx-auto mb-10 opacity-0"
        >
          We transform discarded electronics into precision-engineered embedded systems,
          automated robotics, and custom power solutions.
        </p>

        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex bg-accent-green text-void font-display font-semibold text-sm tracking-[0.04em] px-8 py-4 rounded hover:shadow-glow hover:scale-[1.02] transition-all duration-300 opacity-0"
          >
            START A CUSTOM BUILD
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border border-border-subtle text-white font-display font-semibold text-sm tracking-[0.04em] px-8 py-4 rounded hover:border-accent-green hover:text-accent-green transition-all duration-300 opacity-0"
          >
            VIEW OUR WORK <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-text-muted" />
      </div>
    </section>
  )
}

/* ─── Services Section ─── */
function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const services = [
    {
      num: '01',
      icon: <Cpu size={48} className="text-accent-green" />,
      title: 'ESP32 Automations',
      desc: 'Custom robotic vehicles and IoT systems built on ESP32 microcontrollers. From obstacle-avoidance robots to Wi-Fi-controlled automation, we program intelligence into hardware.',
    },
    {
      num: '02',
      icon: <Recycle size={48} className="text-accent-green" />,
      title: 'E-Waste Repurposing',
      desc: 'DVD drives become 3D printing pens, old laptops transform into home servers. We see potential where others see disposal, giving electronic scrap a second life as functional tools.',
    },
    {
      num: '03',
      icon: <Battery size={48} className="text-accent-green" />,
      title: 'BMS Power Solutions',
      desc: 'Custom lithium-ion battery configurations with active Battery Management Systems. 3S 5P packs, charge balancing, and thermal protection engineered for your specific power requirements.',
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-grid px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
            /// SERVICES
          </span>
          <h2 className="font-display font-semibold text-[clamp(36px,6vw,80px)] tracking-[-0.03em] text-white mt-2">
            ENGINEERED
            <br />
            SOLUTIONS
          </h2>
          <p className="font-body text-lg text-text-secondary mt-4 max-w-[500px]">
            Three specialized disciplines where e-waste meets innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="service-card glass relative border border-border-subtle rounded-lg p-8 md:p-10 hover:border-accent-green hover:-translate-y-1 hover:shadow-glow transition-all duration-300 opacity-0"
            >
              <span className="absolute top-6 right-6 font-mono text-[48px] text-text-muted opacity-30 leading-none">
                {s.num}
              </span>
              <div className="mb-6">{s.icon}</div>
              <h3 className="font-display font-semibold text-2xl text-white mb-4">
                {s.title}
              </h3>
              <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
                {s.desc}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 font-mono font-medium text-xs text-accent-green tracking-[0.06em] group"
              >
                REQUEST A QUOTE
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Featured Work Section ─── */
function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const projects = [
    {
      img: '/images/portfolio-rover.jpg',
      title: 'Autonomous Rover v2.0',
      desc: 'ESP32-based robotic car with ultrasonic obstacle avoidance, TB6612FNG motor drivers, and custom chassis fabricated from repurposed aluminum extrusion.',
      tags: 'ESP32, Robotics, C++',
    },
    {
      img: '/images/portfolio-battery.jpg',
      title: '3S 5P Power Bank',
      desc: 'Custom lithium-ion pack with active BMS, 18.5V output, 12Ah capacity. Built from reclaimed laptop cells with individual cell monitoring and balance charging.',
      tags: 'BMS, Power Systems, Li-Ion',
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-void px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
            /// PORTFOLIO
          </span>
          <h2 className="font-display font-semibold text-[clamp(36px,6vw,80px)] tracking-[-0.03em] text-white mt-2">
            RECENT
            <br />
            BUILDS
          </h2>
          <p className="font-body text-lg text-text-secondary mt-4 max-w-[500px]">
            Selected projects showcasing our range from robotics to power systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="project-card glass group relative overflow-hidden rounded-lg opacity-0 hover:shadow-glow hover:border-accent-green transition-all duration-300 border border-border-subtle"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="font-mono text-xs text-accent-green tracking-[0.06em]">
                  {p.tags}
                </span>
                <h3 className="font-display font-semibold text-2xl text-white mt-1">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-text-secondary mt-2 max-w-[400px]">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border border-border-subtle text-white font-display font-semibold text-sm tracking-[0.04em] px-8 py-4 rounded hover:border-accent-green hover:text-accent-green transition-all duration-300"
          >
            VIEW FULL GALLERY <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── About Teaser Section ─── */
function AboutTeaserSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-text',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
      gsap.fromTo(
        '.about-image',
        { opacity: 0, x: 30, rotate: 2 },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-void px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-3">
          <span className="about-text font-mono font-medium text-xs text-accent-green tracking-[0.08em] block opacity-0">
            /// ABOUT
          </span>
          <h2 className="about-text font-display font-bold text-[clamp(40px,7vw,96px)] tracking-[-0.04em] text-white mt-4 leading-[0.95] opacity-0">
            ROOTED IN
            <br />
            LAHORE.
            <br />
            BUILT FROM
            <br />
            <span className="text-accent-green">SCRAP.</span>
          </h2>
          <p className="about-text font-body text-lg text-text-secondary leading-relaxed mt-8 opacity-0">
            Founded in the heart of Pakistan&apos;s tech corridor, Scrap & Silicon Solutions is a
            team of embedded systems engineers, hardware hackers, and sustainability advocates. We
            believe the future of technology shouldn&apos;t require new extraction — it requires
            new thinking. Every component we repurpose is one less in a landfill. Every custom
            build we deliver proves that e-waste is just raw material with a story.
          </p>
          <Link
            to="/about"
            className="about-text inline-flex items-center gap-2 mt-8 font-mono font-medium text-xs text-accent-green tracking-[0.06em] group opacity-0"
          >
            MEET THE TEAM
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="lg:col-span-2 relative">
          <div className="about-image relative opacity-0">
            <img
              src="/images/about-workshop.jpg"
              alt="Our workshop"
              className="w-full aspect-[4/5] object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 border-2 border-accent-green rounded-lg translate-x-4 translate-y-4 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const testimonials = [
    {
      quote:
        'The ESP32 automation system they built for our packaging line reduced downtime by 40%. The fact that it was built partly from repurposed industrial controllers made it both cost-effective and environmentally responsible.',
      author: 'Ahmad R.',
      role: 'Operations Manager, Lahore Textiles',
    },
    {
      quote:
        'Their custom BMS power bank powers our field survey equipment for three days straight. Individual cell monitoring gives us confidence in remote locations where power access is limited.',
      author: 'Dr. Fatima K.',
      role: 'Environmental Research Institute',
    },
    {
      quote:
        'I brought them a box of old DVD drives and they returned working 3D printing pens for my students. This is exactly the kind of innovation education needs.',
      author: 'Prof. Hassan M.',
      role: 'University of Engineering & Technology',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-surface px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
            /// TESTIMONIALS
          </span>
          <h2 className="font-display font-semibold text-[clamp(32px,5vw,72px)] tracking-[-0.03em] text-white mt-2">
            WHAT CLIENTS
            <br />
            ARE SAYING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="testimonial-card glass p-8 rounded-lg border-l-[3px] border-accent-green opacity-0"
            >
              <Quote size={24} className="text-accent-green mb-4" />
              <p className="font-body text-base text-white italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-mono font-medium text-sm text-accent-green">{t.author}</p>
              <p className="font-mono text-xs text-text-secondary mt-1">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Blog Preview Section ─── */
function BlogPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.blog-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const posts = [
    {
      img: '/images/blog-battery.jpg',
      cat: 'POWER SYSTEMS',
      title: 'Optimizing Cell Balancing in 3S 5P Lithium-Ion Configurations',
      excerpt:
        'How we achieve ±0.05V balance accuracy across parallel strings using passive bleed resistors and active monitoring.',
      date: '2026-04-15',
    },
    {
      img: '/images/blog-cpp.jpg',
      cat: 'PROGRAMMING',
      title: 'Writing Efficient C++ for Ultrasonic Obstacle Avoidance on ESP32',
      excerpt:
        'Interrupt-driven sensor polling, non-blocking motor control, and PID tuning for real-time robotic navigation.',
      date: '2026-03-28',
    },
    {
      img: '/images/blog-dvd.jpg',
      cat: 'HARDWARE HACKS',
      title: 'From DVD Drive to 3D Pen: A Step-by-Step Teardown',
      excerpt:
        'Salvaging the stepper motor, H-bridge driver, and linear rail from optical drives to build precise filament extruders.',
      date: '2026-03-10',
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-void px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
            /// BLOG
          </span>
          <h2 className="font-display font-semibold text-[clamp(36px,6vw,80px)] tracking-[-0.03em] text-white mt-2">
            FIELD
            <br />
            NOTES
          </h2>
          <p className="font-body text-lg text-text-secondary mt-4 max-w-[500px]">
            Technical insights from the lab — programming guides, build logs, and power system
            analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.title}
              className="blog-card glass group rounded-lg overflow-hidden opacity-0 border border-border-subtle hover:border-accent-green hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-[11px] text-accent-green tracking-[0.06em]">
                  {p.cat}
                </span>
                <h3 className="font-display font-semibold text-lg text-white mt-2 group-hover:text-accent-green transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-text-secondary mt-2 line-clamp-2">
                  {p.excerpt}
                </p>
                <p className="font-mono text-[11px] text-text-muted mt-4">{p.date}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-border-subtle text-white font-display font-semibold text-sm tracking-[0.04em] px-8 py-4 rounded hover:border-accent-green hover:text-accent-green transition-all duration-300"
          >
            READ ALL ARTICLES <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Lead Gen / Contact Section ─── */
function LeadGenSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.lead-form-field',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
      gsap.fromTo(
        '.lead-info',
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-surface px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
            /// GET STARTED
          </span>
          <h2 className="font-display font-bold text-[clamp(32px,5vw,72px)] tracking-[-0.03em] text-white mt-2">
            START A
            <br />
            CUSTOM BUILD
          </h2>

          <form className="mt-10 space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you soon.'); }}>
            <div className="lead-form-field opacity-0">
              <label className="block font-mono font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-void border border-border-subtle rounded px-4 py-3.5 font-body text-[15px] text-white focus:border-accent-green focus:shadow-[0_0_0_2px_rgba(0,255,0,0.1)] outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="lead-form-field opacity-0">
              <label className="block font-mono font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full bg-void border border-border-subtle rounded px-4 py-3.5 font-body text-[15px] text-white focus:border-accent-green focus:shadow-[0_0_0_2px_rgba(0,255,0,0.1)] outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div className="lead-form-field opacity-0">
              <label className="block font-mono font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase mb-2">
                Project Details
              </label>
              <textarea
                rows={4}
                required
                className="w-full bg-void border border-border-subtle rounded px-4 py-3.5 font-body text-[15px] text-white focus:border-accent-green focus:shadow-[0_0_0_2px_rgba(0,255,0,0.1)] outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="lead-form-field w-full bg-accent-green text-void font-display font-semibold text-sm tracking-[0.04em] py-4 rounded hover:brightness-110 transition-all opacity-0"
            >
              SEND INQUIRY
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lead-info opacity-0">
          <p className="font-mono font-medium text-sm text-accent-green">LAHORE, PAKISTAN</p>
          <p className="font-body text-base text-text-secondary mt-2">
            123 Tech Corridor, Gulberg III
            <br />
            Lahore, Punjab 54000
          </p>
          <p className="font-mono text-sm text-white mt-6">hello@scrapsilicon.com</p>
          <p className="font-mono text-sm text-white mt-1">+92 300 1234567</p>

          <div className="flex gap-3 mt-8">
            {['Github', 'Linkedin', 'Twitter'].map((social) => (
              <a
                key={social}
                href={`https://${social.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-elevated flex items-center justify-center text-text-secondary hover:bg-accent-green hover:text-void hover:scale-105 transition-all duration-300"
              >
                {social === 'Github' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                )}
                {social === 'Linkedin' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                )}
                {social === 'Twitter' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <AboutTeaserSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <LeadGenSection />
    </>
  )
}

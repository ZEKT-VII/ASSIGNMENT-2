import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import SEO from '../components/SEO'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Recycle, Battery, ArrowRight, CheckCircle2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    num: '01',
    icon: <Cpu size={48} className="text-accent-green" />,
    title: 'ESP32 Automations',
    desc: 'Custom robotic vehicles and IoT systems built on ESP32 microcontrollers. From obstacle-avoidance robots to Wi-Fi-controlled automation, we program intelligence into hardware.',
    specs: [
      'ESP32-WROOM / ESP32-S3 dev boards',
      'TB6612FNG / L298N motor driver integration',
      'HC-SR04 ultrasonic obstacle avoidance',
      'Wi-Fi / Bluetooth remote control',
      'FreeRTOS multi-tasking firmware',
      'Custom PCB design and fabrication',
    ],
    process: [
      'Requirements Analysis & Feasibility Study',
      'Circuit Design & Component Selection',
      'Firmware Development in C++ / Arduino',
      'Testing, Calibration & Deployment',
    ],
  },
  {
    num: '02',
    icon: <Recycle size={48} className="text-accent-green" />,
    title: 'E-Waste Repurposing',
    desc: 'DVD drives become 3D printing pens, old laptops transform into home servers. We see potential where others see disposal, giving electronic scrap a second life as functional tools.',
    specs: [
      'DVD drive to 3D pen conversion',
      'Laptop battery cell reclamation',
      'Stepper motor salvaging and reconditioning',
      'Power supply unit refurbishment',
      'Custom chassis fabrication',
      'Component testing and grading',
    ],
    process: [
      'E-Waste Assessment & Component Audit',
      'Cleaning, Testing & Refurbishment',
      'Custom Modification & Integration',
      'Quality Control & Documentation',
    ],
  },
  {
    num: '03',
    icon: <Battery size={48} className="text-accent-green" />,
    title: 'BMS Power Solutions',
    desc: 'Custom lithium-ion battery configurations with active Battery Management Systems. 3S 5P packs, charge balancing, and thermal protection engineered for your specific power requirements.',
    specs: [
      '3S 5P / 4S 4P custom configurations',
      'Active cell balancing (±0.05V accuracy)',
      'Overcharge / over-discharge protection',
      'Temperature monitoring & thermal cutoff',
      '12V-24V DC output options',
      '12Ah-20Ah capacity range',
    ],
    process: [
      'Power Requirements Analysis',
      'Cell Selection & Matching',
      'BMS Programming & Protection Setup',
      'Enclosure Design & Final Testing',
    ],
  },
]

const steps = [
  { num: '01', title: 'Consultation', desc: 'We discuss your project requirements, timeline, and budget constraints.' },
  { num: '02', title: 'Design', desc: 'Our engineers create detailed schematics, BOMs, and firmware architecture.' },
  { num: '03', title: 'Build', desc: 'We fabricate PCBs, assemble hardware, and write custom firmware.' },
  { num: '04', title: 'Deliver', desc: 'Rigorous testing, calibration, and on-site deployment support.' },
]

export default function Services() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-detail-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.services-detail', start: 'top 75%' },
      })
      gsap.fromTo('.process-step', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.process-section', start: 'top 80%' },
      })
      gsap.fromTo('.process-line', { scaleX: 0 }, {
        scaleX: 1, duration: 1.5, ease: 'power2.out',
        scrollTrigger: { trigger: '.process-section', start: 'top 80%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="pt-16">
      <SEO 
        title="Our Services | Embedded Systems & E-Waste Hacks"
        description="From ESP32 robotic automations to custom BMS power systems and creative e-waste repurposing services in Pakistan."
      />
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-void flex items-center justify-center px-4">
        <div className="text-center">
          <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
            /// SERVICES
          </span>
          <h1 className="font-display font-bold text-[clamp(48px,10vw,120px)] leading-[0.9] tracking-[-0.04em] text-white mt-4">
            OUR
            <br />
            <span className="text-accent-green">SERVICES</span>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-[600px] mx-auto mt-6">
            Specialized engineering services at the intersection of sustainability and embedded systems.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="services-detail py-20 md:py-32 bg-void px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {services.map((s) => (
            <div
              key={s.num}
              className="service-detail-card bg-surface border border-border-subtle rounded-lg p-8 md:p-12 opacity-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <span className="font-mono text-[64px] text-text-muted opacity-20 leading-none block">
                    {s.num}
                  </span>
                  <div className="mt-4 mb-6">{s.icon}</div>
                  <h2 className="font-display font-semibold text-3xl text-white">
                    {s.title}
                  </h2>
                  <p className="font-body text-base text-text-secondary mt-4 leading-relaxed">
                    {s.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-accent-green text-void font-display font-semibold text-sm tracking-[0.04em] px-6 py-3 rounded mt-6 hover:shadow-glow transition-all"
                  >
                    REQUEST A QUOTE <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-mono font-medium text-xs text-accent-green tracking-[0.08em] uppercase mb-4">
                      Technical Specifications
                    </h3>
                    <ul className="space-y-3">
                      {s.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-accent-green mt-0.5 shrink-0" />
                          <span className="font-body text-sm text-text-secondary">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono font-medium text-xs text-accent-green tracking-[0.08em] uppercase mb-4">
                      Our Process
                    </h3>
                    <div className="space-y-4">
                      {s.process.map((step, i) => (
                        <div key={step} className="flex gap-4">
                          <span className="font-mono text-xs text-text-muted shrink-0 w-6">
                            0{i + 1}
                          </span>
                          <p className="font-body text-sm text-text-secondary">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="process-section py-20 md:py-32 bg-surface px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
              /// PROCESS
            </span>
            <h2 className="font-display font-semibold text-[clamp(32px,5vw,72px)] tracking-[-0.03em] text-white mt-2">
              HOW WE WORK
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line - desktop only */}
            <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[2px] bg-border-subtle">
              <div className="process-line absolute inset-0 bg-accent-green origin-left" style={{ transform: 'scaleX(0)' }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="process-step relative text-center opacity-0">
                  <span className="inline-block font-display font-bold text-4xl text-accent-green bg-surface px-4 relative z-10">
                    {step.num}
                  </span>
                  <h3 className="font-display font-semibold text-xl text-white mt-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-accent-green px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-void text-center md:text-left">
            HAVE A PROJECT IN MIND?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-void text-white font-display font-semibold text-sm tracking-[0.04em] px-8 py-4 rounded hover:bg-elevated transition-all"
          >
            LET&apos;S TALK <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

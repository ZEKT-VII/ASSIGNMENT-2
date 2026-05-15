import { useEffect, useRef } from 'react'
import SEO from '../components/SEO'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Leaf, Lightbulb, Target, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '500+', label: 'Components Repurposed' },
  { value: '50+', label: 'Custom Builds Delivered' },
  { value: '3', label: 'Core Specializations' },
  { value: '100%', label: 'Lahore-Based' },
]

const team = [
  {
    name: 'Bilal Ahmad',
    role: 'Lead Embedded Engineer',
    bio: 'ESP32 specialist with 6+ years in microcontroller programming and PCB design. Passionate about transforming e-waste into functional embedded systems.',
  },
  {
    name: 'Ayesha Khan',
    role: 'Power Systems Engineer',
    bio: 'Expert in lithium-ion battery management systems and power electronics. Leading our BMS research and custom power solution development.',
  },
  {
    name: 'Usman Ali',
    role: 'Hardware Hacker & Developer',
    bio: 'Full-stack hardware developer specializing in e-waste repurposing, 3D printing modifications, and creative circuit design.',
  },
]

const values = [
  {
    icon: <Leaf size={32} className="text-accent-green" />,
    title: 'Sustainability',
    desc: 'Every component repurposed is one less in a landfill. We prioritize environmental responsibility in every build.',
  },
  {
    icon: <Lightbulb size={32} className="text-accent-green" />,
    title: 'Innovation',
    desc: 'We challenge conventional thinking, finding new life in discarded electronics through creative engineering.',
  },
  {
    icon: <Target size={32} className="text-accent-green" />,
    title: 'Precision',
    desc: 'From solder joints to software algorithms, we maintain the highest standards of technical accuracy.',
  },
  {
    icon: <Users size={32} className="text-accent-green" />,
    title: 'Community',
    desc: 'Building Lahore\'s maker community through education, open-source contributions, and collaborative projects.',
  },
]

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-anim', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.about-story', start: 'top 80%' },
      })
      gsap.fromTo('.stat-item', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.stats-section', start: 'top 80%' },
      })
      gsap.fromTo('.team-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.team-section', start: 'top 80%' },
      })
      gsap.fromTo('.value-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.values-section', start: 'top 80%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="pt-16">
      <SEO 
        title="About Us | Scrap & Silicon Solutions"
        description="Learn about our mission to reduce electronic waste in Lahore through creative engineering and sustainable hardware development."
      />
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-void flex items-center justify-center px-4">
        <div className="text-center">
          <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
            /// ABOUT
          </span>
          <h1 className="font-display font-bold text-[clamp(48px,10vw,120px)] leading-[0.9] tracking-[-0.04em] text-white mt-4">
            THE
            <br />
            <span className="text-accent-green">LAB</span>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-[560px] mx-auto mt-6">
            Our story, mission, and the team turning scrap into solutions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story py-20 md:py-32 bg-void px-4 sm:px-6">
        <div className="max-w-[800px] mx-auto">
          <p className="about-anim font-body text-lg text-text-secondary leading-[1.9] opacity-0">
            Scrap & Silicon Solutions was born in a small workshop in Gulberg, Lahore, where a
            group of engineering graduates realized that Pakistan&apos;s growing e-waste problem
            could be addressed through innovative hardware engineering. What started as a passion
            project — building robots from discarded DVD drives and creating power banks from old
            laptop batteries — has evolved into a full-service embedded systems consultancy.
          </p>
          <p className="about-anim font-body text-lg text-text-secondary leading-[1.9] mt-6 opacity-0">
            Our mission is twofold: to provide affordable, custom-engineered embedded solutions
            for local businesses and educational institutions, and to demonstrate that
            sustainability and cutting-edge technology are not mutually exclusive. Every ESP32
            controller we program, every BMS we design, and every piece of e-waste we repurpose
            contributes to a more sustainable tech ecosystem in Pakistan.
          </p>
          <p className="about-anim font-body text-lg text-text-secondary leading-[1.9] mt-6 opacity-0">
            We specialize in three core areas: ESP32-based automation systems for industrial and
            educational applications, custom Battery Management Systems for lithium-ion
            configurations, and creative e-waste repurposing that gives discarded electronics a
            second life. Our team combines expertise in C++ programming, circuit design, and
            mechanical engineering to deliver complete hardware solutions from concept to
            deployment.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section py-16 md:py-24 bg-surface px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="stat-item text-center opacity-0">
              <p className="font-display font-bold text-[clamp(36px,5vw,64px)] text-accent-green">
                {s.value}
              </p>
              <p className="font-mono text-xs text-text-secondary tracking-[0.06em] mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team-section py-20 md:py-32 bg-void px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
              /// TEAM
            </span>
            <h2 className="font-display font-semibold text-[clamp(32px,5vw,72px)] tracking-[-0.03em] text-white mt-2">
              THE ENGINEERS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="team-card bg-surface rounded-lg p-8 text-center opacity-0">
                <div className="w-24 h-24 mx-auto rounded-full bg-elevated flex items-center justify-center mb-6">
                  <span className="font-display font-bold text-2xl text-accent-green">
                    {m.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-white">{m.name}</h3>
                <p className="font-mono text-xs text-accent-green tracking-[0.06em] mt-1">
                  {m.role}
                </p>
                <p className="font-body text-sm text-text-secondary mt-4 leading-relaxed">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section py-20 md:py-32 bg-surface px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
              /// VALUES
            </span>
            <h2 className="font-display font-semibold text-[clamp(32px,5vw,72px)] tracking-[-0.03em] text-white mt-2">
              WHAT DRIVES US
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="value-card bg-elevated p-8 rounded-lg opacity-0"
              >
                <div className="mb-4">{v.icon}</div>
                <h3 className="font-display font-semibold text-xl text-white mb-3">
                  {v.title}
                </h3>
                <p className="font-body text-base text-text-secondary leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

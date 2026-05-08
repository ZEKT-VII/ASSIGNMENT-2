import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const filters = ['All', 'Robotics', 'Power Systems', 'E-Waste Hacks', '3D Printing']

const galleryItems = [
  { img: '/images/gallery-1.jpg', title: 'ESP32 Rover Front View', tags: 'Robotics', aspect: '3/2' },
  { img: '/images/gallery-2.jpg', title: 'ESP32 with Custom Antenna', tags: 'Robotics', aspect: '1/1' },
  { img: '/images/gallery-3.jpg', title: '3S 5P Battery Pack Disassembly', tags: 'Power Systems', aspect: '3/2' },
  { img: '/images/blog-dvd.jpg', title: 'DVD Drive Teardown Process', tags: 'E-Waste Hacks', aspect: '16/9' },
  { img: '/images/gallery-4.jpg', title: 'Completed 3D Pen from DVD Drive', tags: '3D Printing', aspect: '2/3' },
  { img: '/images/portfolio-antenna.jpg', title: 'Custom Yagi-Uda Antenna', tags: 'Robotics', aspect: '1/1' },
  { img: '/images/gallery-5.jpg', title: 'BMS PCB with Active LEDs', tags: 'Power Systems', aspect: '3/2' },
  { img: '/images/portfolio-workshop.jpg', title: 'Workshop Overview', tags: 'E-Waste Hacks', aspect: '16/9' },
  { img: '/images/gallery-6.jpg', title: 'ESP32 Dev Board with HC-SR04', tags: 'Robotics', aspect: '1/1' },
  { img: '/images/portfolio-action.jpg', title: 'Rover Obstacle Course Test', tags: 'Robotics', aspect: '3/2' },
  { img: '/images/gallery-7.jpg', title: '3D Pen Printing Test', tags: '3D Printing', aspect: '2/3' },
  { img: '/images/team.jpg', title: 'Team in Workshop', tags: 'E-Waste Hacks', aspect: '16/9' },
]

export default function Gallery() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filteredItems = activeFilter === 'All' ? galleryItems : galleryItems.filter((i) => i.tags === activeFilter)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-item', { opacity: 0, scale: 0.95 }, {
        opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out',
        scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [activeFilter])

  const openLightbox = (index: number) => {
    const actualIndex = galleryItems.indexOf(filteredItems[index])
    setLightbox(actualIndex)
  }

  const navigateLightbox = (dir: 'prev' | 'next') => {
    if (lightbox === null) return
    if (dir === 'prev') {
      setLightbox(lightbox === 0 ? galleryItems.length - 1 : lightbox - 1)
    } else {
      setLightbox(lightbox === galleryItems.length - 1 ? 0 : lightbox + 1)
    }
  }

  return (
    <div ref={pageRef} className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-void flex items-center justify-center px-4">
        <div className="text-center">
          <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
            /// PORTFOLIO
          </span>
          <h1 className="font-display font-bold text-[clamp(48px,10vw,120px)] leading-[0.9] tracking-[-0.04em] text-white mt-4">
            THE
            <br />
            <span className="text-accent-green">GALLERY</span>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-[560px] mx-auto mt-6">
            Documented builds, teardowns, and transformations.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 bg-void/95 backdrop-blur border-b border-border-subtle px-4 sm:px-6 py-4">
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-mono text-[13px] px-4 py-2 rounded transition-all duration-300 ${
                activeFilter === f
                  ? 'text-accent-green'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              {f}
              {activeFilter === f && (
                <span className="block h-[1px] bg-accent-green mt-1" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 md:py-20 bg-void px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredItems.map((item, i) => (
              <div
                key={item.img + i}
                className="gallery-item break-inside-avoid relative group cursor-pointer rounded-lg overflow-hidden opacity-0"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  style={{ aspectRatio: item.aspect }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-void/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="font-mono text-[11px] text-accent-green">{item.tags}</span>
                    <h3 className="font-display font-semibold text-lg text-white mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-surface px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
              /// TESTIMONIALS
            </span>
            <h2 className="font-display font-semibold text-3xl text-white mt-2">
              CLIENT FEEDBACK
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: 'The ESP32 automation system they built for our packaging line reduced downtime by 40%. The fact that it was built partly from repurposed industrial controllers made it both cost-effective and environmentally responsible.',
                author: 'Ahmad R.',
                role: 'Operations Manager, Lahore Textiles',
              },
              {
                text: 'Their custom BMS power bank powers our field survey equipment for three days straight. Individual cell monitoring gives us confidence in remote locations where power access is limited.',
                author: 'Dr. Fatima K.',
                role: 'Environmental Research Institute',
              },
              {
                text: 'I brought them a box of old DVD drives and they returned working 3D printing pens for my students. This is exactly the kind of innovation education needs.',
                author: 'Prof. Hassan M.',
                role: 'University of Engineering & Technology',
              },
            ].map((t, i) => (
              <div key={i} className="bg-elevated p-8 rounded-lg border-l-[3px] border-accent-green">
                <p className="font-body text-base text-white italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-mono font-medium text-sm text-accent-green mt-6">{t.author}</p>
                <p className="font-mono text-xs text-text-secondary mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] bg-[rgba(18,18,18,0.95)] backdrop-blur flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:text-accent-green transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:text-accent-green transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev') }}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:text-accent-green transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next') }}
          >
            <ChevronRight size={40} />
          </button>
          <div className="max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightbox].img}
              alt={galleryItems[lightbox].title}
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
            <div className="text-center mt-4">
              <span className="font-mono text-xs text-accent-green">
                {String(lightbox + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
              </span>
              <h3 className="font-display font-semibold text-white mt-1">
                {galleryItems[lightbox].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

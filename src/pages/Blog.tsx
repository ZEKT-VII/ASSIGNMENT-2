import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Power Systems', 'Programming', 'Hardware Hacks']

const posts = [
  {
    img: '/images/blog-battery.jpg',
    cat: 'Power Systems',
    title: 'Optimizing Cell Balancing in 3S 5P Lithium-Ion Configurations',
    excerpt:
      'How we achieve ±0.05V balance accuracy across parallel strings using passive bleed resistors and active monitoring. Cell balancing is critical for pack longevity and safety.',
    date: '2026-04-15',
    content: `
      <p>Cell balancing is one of the most critical aspects of lithium-ion battery pack design. In a 3S 5P configuration — three cells in series, five in parallel — maintaining voltage equilibrium across all series groups ensures optimal performance, longevity, and safety.</p>
      <h3>Understanding the 3S 5P Topology</h3>
      <p>In a 3S 5P pack, we connect five 18650 cells in parallel to increase capacity, then connect three such parallel groups in series to achieve the desired voltage. The nominal voltage becomes 11.1V (3 × 3.7V), with a capacity determined by the parallel configuration.</p>
      <h3>Passive vs Active Balancing</h3>
      <p>Passive balancing uses resistors to bleed excess charge from cells with higher voltage. While simpler and more cost-effective, it wastes energy as heat. Active balancing transfers charge between cells using capacitors or inductors, significantly improving efficiency — up to 85-90% energy recovery.</p>
      <h3>Our Approach</h3>
      <p>We implement a hybrid balancing strategy: passive bleed resistors (100Ω, 100mW) for initial coarse balancing during charging, followed by active capacitor-based transfer for fine-tuning. Our BMS monitors each series group at 10Hz, triggering balance operations when voltage differential exceeds 50mV.</p>
      <h3>Results</h3>
      <p>With this approach, we consistently achieve ±0.05V balance accuracy across all series groups. Our test packs have completed over 500 charge cycles with less than 8% capacity degradation — well within industry standards for reclaimed cells.</p>
    `,
  },
  {
    img: '/images/blog-cpp.jpg',
    cat: 'Programming',
    title: 'Writing Efficient C++ for Ultrasonic Obstacle Avoidance on ESP32',
    excerpt:
      'Interrupt-driven sensor polling, non-blocking motor control, and PID tuning for real-time robotic navigation. Master embedded C++ patterns for responsive robotics.',
    date: '2026-03-28',
    content: `
      <p>The ESP32's dual-core architecture opens powerful possibilities for real-time robotics. In this guide, we explore how to structure C++ code for ultrasonic obstacle avoidance that responds within milliseconds — critical for autonomous navigation.</p>
      <h3>Architecture Overview</h3>
      <p>We run sensor polling on Core 0 using FreeRTOS tasks, while motor control and decision logic execute on Core 1. This separation ensures that ultrasonic measurements (taking ~30ms per cycle) never block motor PWM updates.</p>
      <h3>Interrupt-Driven Sensor Polling</h3>
      <p>Instead of blocking with pulseIn(), we use GPIO interrupts triggered by the HC-SR04 echo pin. When the echo rises, we record micros(); when it falls, we calculate distance. This non-blocking approach allows continuous motor control during measurement.</p>
      <h3>PID Controller Implementation</h3>
      <p>Our motor differential uses a simple PID controller: error = desired_distance - measured_distance. Output adjusts left/right motor speeds proportionally. Kp=2.0, Ki=0.1, Kd=0.5 provides stable wall-following behavior at 15cm target distance.</p>
      <h3>Code Example</h3>
      <p>Using FreeRTOS xTaskCreatePinnedToCore(), we create separate tasks for sensors, navigation logic, and motor control. Queue handles pass distance data between tasks, ensuring thread-safe communication without global variable conflicts.</p>
    `,
  },
  {
    img: '/images/blog-dvd.jpg',
    cat: 'Hardware Hacks',
    title: 'From DVD Drive to 3D Pen: A Step-by-Step Teardown',
    excerpt:
      'Salvaging the stepper motor, H-bridge driver, and linear rail from optical drives to build precise filament extruders. Turn e-waste into functional creative tools.',
    date: '2026-03-10',
    content: `
      <p>Every discarded DVD drive contains precision components that can be repurposed into entirely new tools. In this teardown guide, we transform an old LG DVD writer into a fully functional 3D printing pen — perfect for students learning about mechanics and electronics.</p>
      <h3>What You Will Need</h3>
      <p>One DVD drive (IDE or SATA), a 12V 3A power supply, an NTC 100K thermistor, a 24V 40W ceramic heater cartridge, PTFE tubing (2mm ID, 4mm OD), a 0.4mm brass nozzle, and basic soldering equipment.</p>
      <h3>Step 1: Disassembly</h3>
      <p>Remove the drive casing, then carefully extract the optical assembly. The stepper motor that moved the laser head will become our filament drive. Save the metal rails — they form the structural backbone of our pen.</p>
      <h3>Step 2: Extracting the Stepper Motor</h3>
      <p>The stepper is typically a bipolar NEMA 14 or smaller. Note the coil configuration by tracing the ribbon cable. Most DVD steppers have two coils with 4-6 wires. Test resistance between pairs to identify coil windings (should read ~10-20Ω).</p>
      <h3>Step 3: Building the Extruder</h3>
      <p>Mount the stepper motor to a 3D-printed bracket. Install a hobbed bolt or knurled shaft as the filament drive gear. The heater cartridge and thermistor mount in an aluminum block machined to accept the nozzle. PID temperature control maintains 200°C ±2°C for PLA.</p>
    `,
  },
  {
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    cat: 'Hardware Hacks',
    title: 'Building a CNC Plotter from DVD Drives',
    excerpt: 'A comprehensive guide on combining two DVD drives to create a high-precision X-Y plotter, powered by GRBL.',
    date: '2026-02-22',
    content: `
      <p>Building on our previous teardown techniques, we can combine two DVD drives to create a functional CNC pen plotter. This is one of the most rewarding e-waste projects for beginners.</p>
      <h3>The Mechanical Assembly</h3>
      <p>We use one DVD drive mechanism for the X-axis (base) and mount the second one perpendicular to it for the Y-axis. The laser carriage serves as the mounting point for our pen mechanism, which is lifted using a simple micro servo.</p>
      <h3>Electronics & Firmware</h3>
      <p>An Arduino Uno stacked with a CNC Shield V3 drives the two stepper motors using A4988 drivers. We flash the Arduino with the open-source GRBL firmware, turning it into a G-code interpreting machine.</p>
      <h3>Software Workflow</h3>
      <p>Using Inkscape with the Gcodetools extension, you can convert any vector graphic (.svg) into G-code. Software like Universal Gcode Sender (UGS) then streams these commands to the Arduino, bringing your scrap-built plotter to life.</p>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=1000&auto=format&fit=crop',
    cat: 'Programming',
    title: 'ESP32 vs ESP8266: Which to Choose for IoT?',
    excerpt: 'A detailed performance and capability breakdown between the two most popular Wi-Fi microcontrollers for embedded projects.',
    date: '2026-02-15',
    content: `
      <p>When starting an IoT project, the microcontroller choice usually comes down to two Espressif chips: the ESP8266 or the ESP32. While the ESP32 is the successor, the ESP8266 still holds its ground.</p>
      <h3>ESP8266: The Budget Workhorse</h3>
      <p>If you need simple Wi-Fi connectivity for a sensor node, the ESP8266 (often found on NodeMCU boards) is sufficient. It features a single-core 80MHz processor and is highly cost-effective, but it lacks Bluetooth and has limited GPIO pins.</p>
      <h3>ESP32: The Dual-Core Powerhouse</h3>
      <p>The ESP32 boasts a dual-core 240MHz processor, built-in Wi-Fi and Bluetooth (Classic + BLE), hardware encryption, and significantly more GPIOs with advanced features like capacitive touch and DACs. It is our go-to choice for complex robotics and audio processing.</p>
      <h3>Verdict</h3>
      <p>Use the ESP8266 for simple, low-cost sensor nodes. Upgrade to the ESP32 for any project requiring RTOS (multi-threading), Bluetooth, high-speed processing, or advanced peripherals.</p>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=1000&auto=format&fit=crop',
    cat: 'Power Systems',
    title: 'How We Grade and Test Reclaimed 18650 Cells',
    excerpt: 'Our rigorous process for ensuring safety and performance when repurposing lithium-ion cells from dead laptop batteries.',
    date: '2026-01-30',
    content: `
      <p>Repurposing lithium-ion cells is the heart of our power solutions, but it requires extreme caution. Not all reclaimed cells are safe or usable.</p>
      <h3>Step 1: Visual Inspection & Voltage Check</h3>
      <p>Cells with physical damage, rust, or leaking electrolyte are immediately recycled. We measure initial voltage; cells below 2.0V are considered "dead" and discarded due to potential internal copper dendrite formation.</p>
      <h3>Step 2: Capacity Testing</h3>
      <p>We use XTAR VC8 or similar analyzing chargers to run a full Charge-Discharge-Charge cycle. The discharge phase measures the actual capacity in mAh. We only keep cells that retain at least 75% of their original rated capacity.</p>
      <h3>Step 3: Internal Resistance (IR)</h3>
      <p>A cell with high internal resistance will heat up under load. We measure IR using a dedicated AC impedance tester (like the YR1030+). Cells with IR > 80mΩ are relegated to low-drain applications like flashlights, not power banks.</p>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    cat: 'Hardware Hacks',
    title: 'From Broken Tablet to Oscilloscope Display',
    excerpt: 'Salvaging high-resolution TFT screens from e-waste and interfacing them with microcontrollers using LVDS/MIPI to RGB converters.',
    date: '2026-01-12',
    content: `
      <p>A cracked digitizer doesn't mean the LCD underneath is dead. Reclaiming these high-resolution displays can provide beautiful interfaces for your hardware projects.</p>
      <h3>Identifying the Interface</h3>
      <p>Most modern tablet displays use MIPI DSI, which is very difficult to drive directly from an MCU. Older or cheaper tablets often use LVDS or parallel RGB. You must identify the panel model number (printed on the back) to find its datasheet.</p>
      <h3>Driving the Display</h3>
      <p>We often use an SSD1963 or RA8875 controller board as a bridge. For our Portable Oscilloscope project, we used an STM32F429 which has an integrated LCD-TFT controller (LTDC) capable of driving RGB interfaces directly, allowing for buttery smooth waveform rendering.</p>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    cat: 'Programming',
    title: 'Setting Up LoRa Mesh Networks for Rural IoT',
    excerpt: 'Overcoming Wi-Fi range limitations in agricultural monitoring using Long Range (LoRa) radio modules.',
    date: '2025-12-05',
    content: `
      <p>When deploying environmental sensors across acres of farmland, standard Wi-Fi falls short. LoRa (Long Range) is the solution, capable of transmitting data over kilometers with minimal power.</p>
      <h3>The SX1278 Module</h3>
      <p>We utilize the SX1278 transceiver module operating at 433MHz (check local regulations for allowed frequencies). It interfaces with our microcontrollers via SPI.</p>
      <h3>Mesh Topology</h3>
      <p>Instead of a simple point-to-point setup, we use libraries like RadioHead to establish a mesh network. If Node A cannot reach the Gateway directly, it can route its message through Node B. This creates a highly resilient network perfect for rural areas with geographic obstacles.</p>
    `
  }
]

export default function Blog() {
  const pageRef = useRef<HTMLDivElement>(null)
  const articleRef = useRef<HTMLDivElement>(null)
  const [activeCat, setActiveCat] = useState('All')
  
  const [searchParams, setSearchParams] = useSearchParams()
  const postParam = searchParams.get('post')
  const selectedPost = postParam ? parseInt(postParam, 10) : null

  const filteredPosts = activeCat === 'All' ? posts : posts.filter((p) => p.cat === activeCat)

  const handleSelectPost = (index: number | null) => {
    if (index === null) {
      searchParams.delete('post')
      setSearchParams(searchParams)
    } else {
      setSearchParams({ post: index.toString() })
    }
  }

  useEffect(() => {
    if (selectedPost === null) {
      window.scrollTo(0, 0)
      const ctx = gsap.context(() => {
        gsap.fromTo('.blog-card', { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.blog-grid', start: 'top 80%' },
        })
      }, pageRef)
      return () => ctx.revert()
    } else {
      // Scroll to the article content when a post is opened
      setTimeout(() => {
        if (articleRef.current) {
          const y = articleRef.current.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  }, [selectedPost])

  return (
    <div ref={pageRef} className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-void flex items-center justify-center px-4">
        <div className="text-center">
          <span className="font-mono font-medium text-xs text-accent-green tracking-[0.08em]">
            /// BLOG
          </span>
          <h1 className="font-display font-bold text-[clamp(48px,10vw,120px)] leading-[0.9] tracking-[-0.04em] text-white mt-4">
            FIELD
            <br />
            <span className="text-accent-green">NOTES</span>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-[600px] mx-auto mt-6">
            Technical writing from the intersection of code, circuits, and sustainability.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 md:py-32 bg-void px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`font-mono text-[13px] px-5 py-2 rounded border transition-all duration-300 ${
                  activeCat === cat
                    ? 'bg-accent-green text-void border-accent-green'
                    : 'bg-transparent text-text-secondary border-border-subtle hover:border-accent-green hover:text-accent-green'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {!selectedPost && activeCat === 'All' && (
            <div className="mb-16">
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-surface rounded-lg overflow-hidden border border-border-subtle">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={posts[0].img}
                    alt={posts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="font-mono text-[11px] text-accent-green tracking-[0.06em]">
                    {posts[0].cat}
                  </span>
                  <h2 className="font-display font-semibold text-2xl lg:text-3xl text-white mt-3">
                    {posts[0].title}
                  </h2>
                  <p className="font-body text-base text-text-secondary mt-4 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <span className="flex items-center gap-2 font-mono text-xs text-text-muted">
                      <Calendar size={14} /> {posts[0].date}
                    </span>
                  </div>
                  <button
                    onClick={() => handleSelectPost(0)}
                    className="inline-flex items-center gap-2 font-mono font-medium text-xs text-accent-green tracking-[0.06em] mt-6 group"
                  >
                    READ ARTICLE
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            </div>
          )}

          {/* Post Grid / Article View */}
          {selectedPost !== null && posts[selectedPost] ? (
            <div className="max-w-[800px] mx-auto" ref={articleRef}>
              <button
                onClick={() => handleSelectPost(null)}
                className="font-mono text-sm text-accent-green mb-8 hover:underline"
              >
                ← Back to Articles
              </button>
              <article className="bg-surface rounded-lg p-8 md:p-12 border border-border-subtle">
                <span className="font-mono text-[11px] text-accent-green tracking-[0.06em]">
                  {posts[selectedPost].cat}
                </span>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-white mt-4">
                  {posts[selectedPost].title}
                </h1>
                <div className="flex items-center gap-4 mt-4">
                  <span className="flex items-center gap-2 font-mono text-xs text-text-muted">
                    <Calendar size={14} /> {posts[selectedPost].date}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-xs text-text-muted">
                    <Tag size={14} /> {posts[selectedPost].cat}
                  </span>
                </div>
                <div className="aspect-video mt-8 rounded-lg overflow-hidden">
                  <img
                    src={posts[selectedPost].img}
                    alt={posts[selectedPost].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="prose prose-invert mt-8 max-w-none font-body text-base text-text-secondary leading-relaxed space-y-4 [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-4"
                  dangerouslySetInnerHTML={{ __html: posts[selectedPost].content }}
                />
              </article>
            </div>
          ) : (
            <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCat === 'All' ? posts.slice(1) : filteredPosts).map((p) => (
                <article
                  key={p.title}
                  onClick={() => handleSelectPost(posts.indexOf(p))}
                  className="blog-card group bg-surface rounded-lg overflow-hidden border border-border-subtle opacity-0 cursor-pointer"
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
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-mono text-[11px] text-text-muted">{p.date}</span>
                      <span className="font-mono text-xs text-accent-green tracking-[0.06em] group flex items-center gap-1">
                        READ
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-surface px-4 sm:px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-display font-semibold text-2xl text-white mb-2">
            GET FIELD NOTES DELIVERED
          </h2>
          <p className="font-body text-sm text-text-secondary mb-8">
            Subscribe for the latest technical insights from our lab.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for subscribing!')
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-void border border-border-subtle rounded px-4 py-3 font-body text-[15px] text-white focus:border-accent-green outline-none transition-all"
            />
            <button
              type="submit"
              className="bg-accent-green text-void font-display font-semibold text-sm tracking-[0.04em] px-6 py-3 rounded hover:brightness-110 transition-all"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

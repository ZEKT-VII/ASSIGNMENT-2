import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923001234567?text=Hi%20Scrap%20%26%20Silicon%20Solutions%2C%20I%20am%20interested%20in%20a%20custom%20embedded%20systems%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent-green rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,255,0,0.3)] hover:scale-110 transition-transform duration-300 animate-[pulse-scale_2s_ease-in-out_infinite]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-void fill-void" />
    </a>
  )
}

import { Link } from 'react-router'
import { Github, Linkedin, Twitter } from 'lucide-react'

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/store', label: 'Store' },
  { path: '/gallery', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-void border-t border-border-subtle relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-14 pb-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display font-bold text-xl text-white">S&S</span>
              <span className="font-mono text-[11px] text-text-muted tracking-[0.12em]">
                SCRAP & SILICON
              </span>
            </div>
            <p className="font-body text-sm text-text-muted">
              Transforming e-waste into innovation.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-mono text-[13px] text-text-secondary hover:text-accent-green transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-border-subtle mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-text-muted flex items-center gap-2">
            &copy; 2026 Scrap & Silicon Solutions. <span className="hidden md:inline">|</span> Made with <span className="text-accent-green">♻️</span> in Lahore.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-green transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-green transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-green transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

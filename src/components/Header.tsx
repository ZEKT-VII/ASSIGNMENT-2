import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '../hooks/CartContext'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/store', label: 'Store' },
  { path: '/gallery', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { cart, setIsCartOpen } = useCart()
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(18,18,18,0.9)] backdrop-blur-xl border-b border-border-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-white">S&S</span>
            <span className="font-mono text-[11px] text-text-muted tracking-[0.12em] hidden sm:inline">
              SCRAP & SILICON
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-mono text-[13px] tracking-[0.04em] transition-colors duration-300 group ${
                  location.pathname === link.path
                    ? 'text-accent-green'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-accent-green transition-transform duration-300 origin-left ${
                    location.pathname === link.path
                      ? 'w-full scale-x-100'
                      : 'w-full scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white hover:text-accent-green transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent-green text-void text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                  {cartItemCount}
                </span>
              )}
            </button>
            <Link
              to="/contact"
              className="hidden sm:inline-flex bg-accent-green text-void font-display font-semibold text-xs tracking-[0.06em] px-5 py-2.5 rounded hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
            >
              START A BUILD
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-white p-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-void transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`font-display font-semibold text-4xl transition-all duration-500 ${
                  location.pathname === link.path
                    ? 'text-accent-green'
                    : 'text-white hover:text-accent-green'
                }`}
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: mobileOpen ? `${i * 0.08}s` : '0s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

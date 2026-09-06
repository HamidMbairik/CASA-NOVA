import { useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#about', label: 'The House' },
  { href: '#rooms', label: 'Rooms & Suites' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo">
          Casa Nova
          <span className="navbar-logo-sub">Boutique Hotel</span>
        </a>
        <nav className={`navbar-links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar-right">
          <a href="#booking" className="btn btn-gold navbar-cta">
            Reserve
          </a>
          <button
            className={`navbar-toggle ${open ? 'is-active' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
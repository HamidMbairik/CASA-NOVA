import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Casa Nova</span>
          <span className="footer-tagline">Boutique Hotel</span>
        </div>
        <p className="footer-note">
          Travel · Luxury · Warmth · Architecture
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Casa Nova. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
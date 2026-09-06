import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div data-reveal>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Reach the house</h2>
          <p className="section-copy">
            For reservations, private dining, or a quiet word — we reply
            within the day.
          </p>
        </div>
        <div className="contact-details" data-reveal data-reveal-delay="150">
          <div className="contact-row">
            <span className="contact-key">Address</span>
            <span className="contact-val">
              Calle del Olivo 12, Ciudad Vieja
            </span>
          </div>
          <div className="contact-row">
            <span className="contact-key">Telephone</span>
            <span className="contact-val">
              <a href="tel:+34900000000">+34 900 000 000</a>
            </span>
          </div>
          <div className="contact-row">
            <span className="contact-key">Email</span>
            <span className="contact-val">
              <a href="mailto:stay@casanova.example">stay@casanova.example</a>
            </span>
          </div>
          <div className="contact-row">
            <span className="contact-key">Front desk</span>
            <span className="contact-val">Always attended</span>
          </div>
        </div>
      </div>
    </section>
  )
}
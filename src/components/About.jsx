import './About.css'
import aboutImg from '../assets/photos/about.jpg'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-panel" data-reveal>
          <p className="section-label">The House</p>
          <h2 className="section-title">A modern take on Old World warmth</h2>
          <figure className="about-figure">
            <img src={aboutImg} alt="Warm interiors of the Casa Nova dining room" />
          </figure>
        </div>
        <div data-reveal data-reveal-delay="150">
          <p className="section-copy">
            Casa Nova began as a private residence — a study in olive,
            ivory, and gold. Today it is a boutique hotel of just a
            handful of rooms, where architecture and hospitality are
            treated as one craft.
          </p>
          <p className="section-copy">
            Expect unmarked doors, hand-rolled Italian linens, and
            mornings that begin with espresso and citrus under the
            courtyard light.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">12</span>
              <span className="stat-label">Rooms &amp; suites</span>
            </div>
            <div className="stat">
              <span className="stat-num">1</span>
              <span className="stat-label">Courtyard with Citrus Grove</span>
            </div>
            <div className="stat">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Private concierge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
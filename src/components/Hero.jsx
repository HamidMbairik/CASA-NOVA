import './Hero.css'
import heroImg from '../assets/photos/hero.jpg'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-media">
        <img src={heroImg} alt="Casa Nova boutique hotel exterior at golden hour" />
        <div className="hero-shade" />
      </div>
      <div className="container hero-inner">
        <p className="hero-kicker">Welcome to a house of quiet luxury</p>
        <h1 className="hero-title">Casa Nova</h1>
        <p className="hero-line">
          Architecture, warmth, and discretion — a boutique stay
          designed to be remembered.
        </p>
        <div className="hero-actions">
          <a href="#booking" className="btn btn-gold js-scroll">
            Book Your Stay
          </a>
          <a href="#rooms" className="btn btn-outline hero-outline js-scroll">
            Explore Suites
          </a>
        </div>
      </div>
    </section>
  )
}
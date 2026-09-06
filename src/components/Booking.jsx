import { useState } from 'react'
import './Booking.css'

export default function Booking() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(
      `Reservation request — ${data.get('name')}`,
    )
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
        `Arrival: ${data.get('arrival')}\n` +
        `Nights: ${data.get('nights')}\n` +
        `Guests: ${data.get('guests')}\n` +
        `Notes: ${data.get('notes')}`,
    )
    window.location.href = `mailto:stay@casanova.example?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="booking" className="section booking">
      <div className="container booking-inner" data-reveal>
        <p className="section-label booking-label">Reservations</p>
        <h2 className="booking-title">Your room is already waiting</h2>
        <p className="booking-copy">
          Rooms release ninety days in advance and rarely last the week.
          Tell us how you would like to arrive.
        </p>

        {sent ? (
          <p className="booking-thanks">
            Thank you — your email client is open. We will reply within the day.
          </p>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-row">
              <label className="booking-field">
                <span>Name</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label className="booking-field">
                <span>Arrival date</span>
                <input type="date" name="arrival" required />
              </label>
            </div>
            <div className="booking-row">
              <label className="booking-field">
                <span>Nights</span>
                <select name="nights" defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'night' : 'nights'}
                    </option>
                  ))}
                </select>
              </label>
              <label className="booking-field">
                <span>Guests</span>
                <select name="guests" defaultValue="2">
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="booking-field">
              <span>Notes</span>
              <textarea
                name="notes"
                rows="3"
                placeholder="Occasion, dietary needs, arrival time…"
              />
            </label>
            <button type="submit" className="btn btn-gold booking-submit">
              Request to Book
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
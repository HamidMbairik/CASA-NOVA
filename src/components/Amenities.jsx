import './Amenities.css'

const amenities = [
  {
    title: 'Citrus Courtyard',
    desc: 'A hidden grove of lemon and orange trees, torch-lit at dusk.',
  },
  {
    title: 'Spa & Hammam',
    desc: 'A steam room of olive stone and a massage menu drawn from the Mediterranean.',
  },
  {
    title: 'The Library Bar',
    desc: 'Vermouth, amaro, and rare books, served until late.',
  },
  {
    title: 'House Chef',
    desc: 'Seasonal tasting menus cooked over live fire, in-room or in the grove.',
  },
  {
    title: 'Architecture Walks',
    desc: 'Private guided tours of the district\u2019s cork, tile, and tile-decade facades.',
  },
  {
    title: 'Arrival in Style',
    desc: 'Chauffeured pickup and a welcome tray of quince and local wine.',
  },
]

export default function Amenities() {
  return (
    <section id="amenities" className="section amenities">
      <div className="container">
        <div className="amenities-head" data-reveal>
          <p className="section-label">Amenities</p>
          <h2 className="section-title">Considered comforts, quietly offered</h2>
        </div>
        <ul className="amenities-grid">
          {amenities.map((item, index) => (
            <li
              key={item.title}
              className="amenity"
              data-reveal
              data-reveal-delay={index % 3 === 1 ? '150' : index % 3 === 2 ? '300' : '0'}
            >
              <span className="amenity-index" aria-hidden="true" />
              <h3 className="amenity-title">{item.title}</h3>
              <p className="amenity-desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
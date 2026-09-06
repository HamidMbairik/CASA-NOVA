import './Rooms.css'
import groveImg from '../assets/photos/room-grove.jpg'
import atelierImg from '../assets/photos/room-atelier.jpg'
import loftImg from '../assets/photos/room-loft.jpg'

const rooms = [
  {
    name: 'The Grove Suite',
    price: 'From €290',
    img: groveImg,
    alt: 'The Grove Suite with a warm stone bath and garden view',
    desc: 'Framed by the citrus courtyard, with a freestanding stone bath and morning light made for slow mornings.',
  },
  {
    name: 'Corner Atelier',
    price: 'From €340',
    img: atelierImg,
    alt: 'Corner Atelier suite with oak writing desk and twin light',
    desc: 'Two exposures, a writing desk of French oak, and a fireplace that takes the chill off winter evenings.',
  },
  {
    name: 'The Attic Loft',
    price: 'From €410',
    img: loftImg,
    alt: 'The Attic Loft with vaulted ceiling and roof timbers',
    desc: 'Vaulted ceilings under the original roof timbers — the most private, and the most architectural, of the house.',
  },
]

export default function Rooms() {
  return (
    <section id="rooms" className="section rooms">
      <div className="container">
        <div className="rooms-head" data-reveal>
          <div>
            <p className="section-label">Rooms &amp; Suites</p>
            <h2 className="section-title">Twelve rooms, no two alike</h2>
          </div>
          <p className="section-copy rooms-intro">
            Each room is composed rather than decorated — calm palettes,
            tactile materials, and a single gesture of brass or gold.
          </p>
        </div>
        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <article
              key={room.name}
              className="room-card"
              data-reveal
              data-reveal-delay={index === 1 ? '150' : index === 2 ? '300' : '0'}
            >
              <div className="room-media">
                <img src={room.img} alt={room.alt} />
              </div>
              <h3 className="room-name">{room.name}</h3>
              <p className="room-desc">{room.desc}</p>
              <div className="room-foot">
                <span className="room-price">{room.price}</span>
                <a href="#booking" className="room-link js-scroll">
                  Reserve
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
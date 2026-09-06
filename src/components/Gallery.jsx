import './Gallery.css'
import g1 from '../assets/gallery/g1.jpg'
import g2 from '../assets/gallery/g2.jpg'
import g3 from '../assets/gallery/g3.jpg'
import g4 from '../assets/gallery/g4.jpg'
import g5 from '../assets/gallery/g5.jpg'
import g6 from '../assets/gallery/g6.jpg'

const tiles = [
  { src: g1, label: 'Courtyard at golden hour' },
  { src: g2, label: 'Stone bath, Grove Suite' },
  { src: g3, label: 'The Library Bar' },
  { src: g4, label: 'Oak writing desk' },
  { src: g5, label: 'Hammam steam room' },
  { src: g6, label: 'The Attic Loft' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container" data-reveal>
        <p className="section-label">Gallery</p>
        <h2 className="section-title">Moments from the house</h2>
      </div>
      <div className="gallery-grid">
        {tiles.map((tile, i) => (
          <figure
            key={tile.label}
            className={`gallery-tile gallery-tile--${i + 1}`}
            data-reveal
          >
            <img src={tile.src} alt={tile.label} loading="lazy" />
            <figcaption>{tile.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
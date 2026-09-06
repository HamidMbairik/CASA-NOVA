import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useSmoothScroll from './hooks/useSmoothScroll'
import useReveal from './hooks/useReveal'

export default function App() {
  useSmoothScroll()
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
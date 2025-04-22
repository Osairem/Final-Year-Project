import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/images/2.jpg',
      title: 'Majestic Mountains',
      description: 'Discover the breathtaking peaks of KPK'
    },
    {
      image: '/images/3.happy.webp',
      title: 'Rich Cultural Heritage',
      description: 'Experience centuries-old traditions and festivals'
    },
    {
      image: '/images/4.nathia gali.jpg',
      title: 'Natural Wonders',
      description: 'Explore pristine valleys and crystal-clear lakes'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover the Beauty of KPK</h1>
          <p>Explore Mountains, Culture & Adventure</p>
          <Link to="/attractions" className="btn btn-primary btn-lg">
            Explore Now
          </Link>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="quick-facts py-5">
        <div className="container">
          <h2 className="text-center mb-4">Quick Facts About KPK</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="fact-card text-center">
                <h3>Area</h3>
                <p>101,741 km²</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fact-card text-center">
                <h3>Population</h3>
                <p>35.5 Million</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fact-card text-center">
                <h3>Languages</h3>
                <p>Pashto, Urdu, Hindko</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Slider Section */}
      <section className="slider-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Experience KPK</h2>
          <div className="custom-slider">
            <button className="slider-btn prev" onClick={prevSlide}>&lt;</button>
            <div className="slider-container">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className="slide-content">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-btn next" onClick={nextSlide}>&gt;</button>
            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured-destinations py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Featured Destinations</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="destination-card">
                <img src="/images/swat.jpeg" alt="Swat Valley" className="img-fluid" />
                <div className="card-content">
                  <h3>Swat Valley</h3>
                  <p>Known as the Switzerland of Pakistan</p>
                  <Link to="/cities/swat" className="btn btn-outline-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="destination-card">
                <img src="/images/2.jpg" alt="Chitral" className="img-fluid" />
                <div className="card-content">
                  <h3>Chitral</h3>
                  <p>Home to the Kalash Valley</p>
                  <Link to="/cities/chitral" className="btn btn-outline-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="destination-card">
                <img src="/images/1.isl.jpg" alt="Peshawar" className="img-fluid" />
                <div className="card-content">
                  <h3>Peshawar</h3>
                  <p>The City of Flowers</p>
                  <Link to="/cities/peshawar" className="btn btn-outline-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5">
        <div className="container text-center">
          <h2>Ready to Explore KPK?</h2>
          <p className="mb-4">Start planning your adventure today</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 
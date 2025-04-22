import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>About KPK Tourism</h5>
            <p>
              Discover the beauty and rich culture of Khyber Pakhtunkhwa, Pakistan's
              most diverse province. From majestic mountains to ancient heritage sites,
              experience the true essence of KP.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/cities">Cities</Link></li>
              <li><Link to="/attractions">Attractions</Link></li>
              <li><Link to="/hotels">Hotels</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Connect With Us</h5>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2024 KPK Tourism. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
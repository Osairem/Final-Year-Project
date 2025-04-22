import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Hotels.css'

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')

  // Fallback image URL
  const fallbackImage = 'https://via.placeholder.com/300x200?text=Hotel+Image'

  const hotels = [
    {
      id: 1,
      name: 'Pearl Continental Hotel',
      location: 'Peshawar',
      image: '/images/PcPEsh.jpeg',
      rating: 5,
      price: 'Rs. 15,000 - 25,000',
      amenities: ['WiFi', 'Pool', 'Restaurant', 'Spa'],
    },
    {
      id: 2,
      name: 'Swat Serena Hotel',
      location: 'Swat',
      image: '/images/Serena Swat.jpeg',
      rating: 5,
      price: 'Rs. 20,000 - 30,000',
      amenities: ['WiFi', 'Pool', 'Restaurant', 'Spa', 'Gym'],
    },
    {
      id: 3,
      name: 'Green Palace Hotel',
      location: 'Abbottabad',
      image: '/images/GreenAbt.jpeg',
      rating: 4,
      price: 'Rs. 5,000 - 10,000',
      amenities: ['WiFi', 'Restaurant', 'Parking'],
    },
    {
      id: 4,
      name: 'Malam Jabba Ski Resort',
      location: 'Swat',
      image: '/images/skimalamjaba.jpeg',
      rating: 3,
      price: 'Rs. 3,000 - 8,000',
      amenities: ['WiFi', 'Restaurant', 'Ski Equipment'],
    },
  ]

  const locations = ['All', ...new Set(hotels.map((hotel) => hotel.location))]
  const priceRanges = ['All', 'Budget', 'Mid-Range', 'Luxury']

  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = selectedLocation === 'all' || hotel.location === selectedLocation
    
    let matchesPriceRange = true
    if (selectedPriceRange !== '' && selectedPriceRange !== 'All') {
      if (selectedPriceRange === 'Budget') {
        matchesPriceRange = hotel.price.includes('3,000') || hotel.price.includes('5,000')
      } else if (selectedPriceRange === 'Mid-Range') {
        matchesPriceRange = hotel.price.includes('10,000')
      } else if (selectedPriceRange === 'Luxury') {
        matchesPriceRange = hotel.price.includes('15,000') || hotel.price.includes('20,000')
      }
    }
    
    return matchesSearch && matchesLocation && matchesPriceRange
  })

  const handleImageError = (e) => {
    e.target.src = fallbackImage
  }

  return (
    <div className="hotels-page">
      <div className="container py-5">
        <h1 className="text-center mb-4">Hotels & Accommodations</h1>
        
        <div className="row mb-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search hotels..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              {priceRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="row">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="col-md-6 col-lg-4 mb-4">
              <div className="hotel-card">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="hotel-image"
                  onError={handleImageError}
                />
                <div className="hotel-content">
                  <h3>{hotel.name}</h3>
                  <p className="location">{hotel.location}</p>
                  <div className="rating">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="price">{hotel.price} per night</p>
                  <div className="amenities">
                    <h4>Amenities</h4>
                    <ul>
                      {hotel.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/hotels/${hotel.id}`} className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hotels 
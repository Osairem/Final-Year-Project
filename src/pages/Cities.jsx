import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Cities.css'

const Cities = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')

  const cities = [
    {
      id: 1,
      name: 'Peshawar',
      region: 'Central',
      image: '/images/1.isl.jpg',
      description: 'The City of Flowers and the capital of KPK',
      attractions: ['Bala Hisar Fort', 'Qissa Khwani Bazaar', 'Peshawar Museum']
    },
    {
      id: 2,
      name: 'Swat',
      region: 'North',
      image: '/images/swat1.jpeg',
      description: 'Known as the Switzerland of Pakistan',
      attractions: ['Malam Jabba', 'Mingora', 'Kalam Valley']
    },
    {
      id: 3,
      name: 'Chitral',
      region: 'North',
      image: 'https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg',
      description: 'Home to the Kalash Valley and rich cultural heritage',
      attractions: ['Kalash Valley', 'Chitral Fort', 'Shandur Pass']
    },
    {
      id: 4,
      name: 'Abbottabad',
      region: 'Central',
      image: 'https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg',
      description: 'A beautiful hill station with pleasant weather',
      attractions: ['Ilyasi Mosque', 'Thandiani', 'Harnoi Lake']
    }
  ]

  const regions = ['all', ...new Set(cities.map(city => city.region))]

  const filteredCities = cities.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === 'all' || city.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  return (
    <div className="cities-page">
      <div className="container py-5">
        <h1 className="text-center mb-4">Explore Cities in KPK</h1>
        
        {/* Search and Filter Section */}
        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search cities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {regions.map(region => (
                <option key={region} value={region}>
                  {region.charAt(0).toUpperCase() + region.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="row">
          {filteredCities.map(city => (
            <div key={city.id} className="col-md-6 col-lg-4 mb-4">
              <div className="city-card">
                <img src={city.image} alt={city.name} className="city-image" />
                <div className="city-content">
                  <h3>{city.name}</h3>
                  <p>{city.description}</p>
                  <div className="attractions">
                    <h4>Popular Attractions:</h4>
                    <ul>
                      {city.attractions.map((attraction, index) => (
                        <li key={index}>{attraction}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/cities/${city.name.toLowerCase()}`} className="btn btn-primary">
                    Learn More
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

export default Cities 
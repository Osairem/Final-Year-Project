import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Attractions.css'

const Attractions = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  // Fallback image URL
  const fallbackImage = 'https://via.placeholder.com/300x200?text=Attraction+Image'

  const attractions = [
    {
      id: 1,
      name: 'Bala Hisar Fort',
      category: 'Historical',
      location: 'Peshawar',
      image: '/images/Bala_Hisar_Fort.jpg',
      description: 'A historic fort that has stood for centuries, offering panoramic views of Peshawar.',
    },
    {
      id: 2,
      name: 'Malam Jabba',
      category: 'Adventure',
      location: 'Swat',
      image: '/images/MalamJaba.jpeg',
      description: 'A premier ski resort offering winter sports and stunning mountain views.',
    },
    {
      id: 3,
      name: 'Kalash Valley',
      category: 'Cultural',
      location: 'Chitral',
      image: '/images/Kalash.jpeg',
      description: 'Home to the unique Kalash people, known for their distinct culture and traditions.',
    },
    {
      id: 4,
      name: 'Takht-i-Bahi',
      category: 'Historical',
      location: 'Mardan',
      image: '/images/Takt.jpeg',
      description: 'A well-preserved Buddhist monastery complex from the 1st century CE.',
    },
    {
      id: 5,
      name: 'Kalam Valley',
      category: 'Nature',
      location: 'Swat',
      image: '/images/Kalam.jpeg',
      description: 'A beautiful valley known for its lush green meadows and crystal-clear lakes.',
    },
    {
      id: 6,
      name: 'Shandur Pass',
      category: 'Adventure',
      location: 'Chitral',
      image: '/images/Shandur.jpeg',
      description: 'The world\'s highest polo ground, hosting the famous Shandur Polo Festival.',
    },
  ]

  const categories = ['All', 'Adventure', 'Cultural', 'Historical', 'Nature']

  const filteredAttractions = attractions.filter(attraction => {
    const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' ? true : attraction.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleImageError = (e) => {
    e.target.src = fallbackImage
  }

  return (
    <div className="attractions-page">
      <div className="container py-5">
        <h1 className="text-center mb-4">Tourist Attractions in KPK</h1>
        
        {/* Search and Filter Section */}
        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search attractions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="row">
          {filteredAttractions.map(attraction => (
            <div key={attraction.id} className="col-md-6 col-lg-4 mb-4">
              <div className="attraction-card">
                <img src={attraction.image} alt={attraction.name} className="attraction-image" onError={handleImageError} />
                <div className="attraction-content">
                  <h3>{attraction.name}</h3>
                  <p className="location">{attraction.location}</p>
                  <p>{attraction.description}</p>
                  <div className="category-tag">{attraction.category}</div>
                  <Link to={`/attractions/${attraction.id}`} className="btn btn-primary">
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

export default Attractions 
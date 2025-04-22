import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Events.css'

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  // Fallback image URL
  const fallbackImage = 'https://via.placeholder.com/300x200?text=Event+Image'

  const events = [
    {
      id: 1,
      name: "Basant Festival",
      date: "2024-02-15",
      endDate: "2024-02-16",
      category: "Cultural",
      location: "Peshawar",
      image: "/images/Bsanti.jpeg",
      description: "A colorful kite flying festival celebrating the arrival of spring.",
      highlights: ["Kite flying competitions", "Traditional music", "Food stalls"]
    },
    {
      id: 2,
      name: "Chitral Kalash Festival",
      date: "2024-05-20",
      endDate: "2024-05-25",
      category: "Cultural",
      location: "Chitral",
      image: "/images/KalashFe.jpeg",
      description: "Celebration of Kalash culture with traditional dances and rituals.",
      highlights: ["Traditional dances", "Cultural performances", "Local crafts"]
    },
    {
      id: 3,
      name: "Swat Food Festival",
      date: "2024-03-10",
      endDate: "2024-03-12",
      category: "Food",
      location: "Swat",
      image: "/images/SwatFood.jpeg",
      description: "Showcasing the diverse culinary heritage of Swat Valley.",
      highlights: ["Local cuisine", "Cooking demonstrations", "Food competitions"]
    },
    {
      id: 4,
      name: "Peshawar Literary Festival",
      date: "2024-04-05",
      endDate: "2024-04-07",
      category: "Arts",
      location: "Peshawar",
      image: "/images/LiPesh.jpeg",
      description: "A gathering of writers, poets, and literary enthusiasts.",
      highlights: ["Book launches", "Poetry readings", "Panel discussions"]
    },
    {
      id: 5,
      name: "Malam Jabba Ski Festival",
      date: "2024-01-15",
      endDate: "2024-01-20",
      category: "Sports",
      location: "Malam Jabba",
      image: "/images/MalamJaba.jpeg",
      description: "Annual winter sports festival featuring skiing competitions.",
      highlights: ["Skiing competitions", "Snow activities", "Winter sports"]
    },
    {
      id: 6,
      name: "Hazara Cultural Festival",
      date: "2024-06-10",
      endDate: "2024-06-12",
      category: "Cultural",
      location: "Mansehra",
      image: "/images/HazaraFe.jpeg",
      description: "Celebrating the rich cultural heritage of Hazara region.",
      highlights: ["Folk music", "Traditional dances", "Cultural exhibitions"]
    }
  ]

  const months = [
    'All',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const categories = ['All', 'Sports', 'Cultural', 'Food', 'Music', 'Arts']

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase())
    const eventDate = new Date(event.date)
    const eventMonth = months[eventDate.getMonth() + 1]
    const matchesMonth = selectedMonth === '' || selectedMonth === 'All' ? true : eventMonth === selectedMonth
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' ? true : event.category === selectedCategory
    return matchesSearch && matchesMonth && matchesCategory
  })

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const handleImageError = (e) => {
    e.target.src = fallbackImage
  }

  return (
    <div className="events-page">
      <div className="container py-5">
        <h1 className="text-center mb-4">Events & Festivals in KPK</h1>
        
        {/* Search and Filter Section */}
        <div className="row mb-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map(month => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
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

        {/* Events Grid */}
        <div className="row">
          {filteredEvents.map(event => (
            <div key={event.id} className="col-md-6 col-lg-4 mb-4">
              <div className="event-card">
                <img
                  src={event.image}
                  alt={event.name}
                  className="event-image"
                  onError={handleImageError}
                />
                <div className="event-content">
                  <h3>{event.name}</h3>
                  <p className="date">
                    {formatDate(event.date)} - {formatDate(event.endDate)}
                  </p>
                  <p className="location">{event.location}</p>
                  <p>{event.description}</p>
                  <div className="category-tag">{event.category}</div>
                  <div className="highlights">
                    <h4>Highlights:</h4>
                    <ul>
                      {event.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/events/${event.id}`} className="btn btn-primary">
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

export default Events 
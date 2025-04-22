import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cities from './pages/Cities'
import Attractions from './pages/Attractions'
import Hotels from './pages/Hotels'
import Events from './pages/Events'
import Contact from './pages/Contact'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 
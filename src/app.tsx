import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Categories from './pages/categories'
import Challenges from './pages/challenges'
import Timeline from './pages/timeline'
import Prizes from './pages/prizes'
import Register from './pages/register'
import Contact from './pages/contact'
import FAQ from './pages/faq'
import Rules from './pages/rules'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/prizes" element={<Prizes />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

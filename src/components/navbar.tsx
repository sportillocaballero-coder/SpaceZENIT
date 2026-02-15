import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre nosotros', path: '/about' },
    { name: 'Desafíos', path: '/challenges' },
    { name: 'Cronograma', path: '/timeline' },
    { name: 'Premios', path: '/prizes' },
    { name: 'Normas', path: '/rules' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contacto', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-space rounded-lg flex items-center justify-center">
            </div>
            <span className="text-xl font-bold text-space-700 hidden sm:inline group-hover:text-space-600 transition">
              Argentina al Espacio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-space-600 
                  hover:bg-space-50 rounded-lg transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/register"
              className="btn-accent text-sm"
            >
              Registrarse Ahora
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 pb-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-space-600 
                  hover:bg-space-50 rounded-lg transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-2 btn-accent text-center"
            >
              Registrarse Ahora
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

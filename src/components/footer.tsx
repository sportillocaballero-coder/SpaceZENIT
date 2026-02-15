import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-space-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-space-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <span className="text-lg font-bold">Argentina al Espacio</span>
            </div>
            <p className="text-space-200 text-sm">
              Hackathon multidisciplinaria para estudiantes innovadores
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-space-100">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-space-200 hover:text-white transition">Inicio</Link></li>
              <li><Link to="/about" className="text-space-200 hover:text-white transition">Sobre</Link></li>
              <li><Link to="/categories" className="text-space-200 hover:text-white transition">Categorías</Link></li>
              <li><Link to="/timeline" className="text-space-200 hover:text-white transition">Cronograma</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-space-100">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/prizes" className="text-space-200 hover:text-white transition">Premios</Link></li>
              <li><Link to="/rules" className="text-space-200 hover:text-white transition">Normas</Link></li>
              <li><Link to="/faq" className="text-space-200 hover:text-white transition">FAQ</Link></li>
              <li><Link to="/contact" className="text-space-200 hover:text-white transition">Contacto</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-space-100">Siguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-space-300 hover:text-white transition hover:scale-110 transform duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-space-300 hover:text-white transition hover:scale-110 transform duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 1.5 9 1.5z"/>
                </svg>
              </a>
              <a href="#" className="text-space-300 hover:text-white transition hover:scale-110 transform duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2v10h-8v-10h8zm-9-2v10H4V3h7z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-space-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-space-300">
            <p>&copy; {currentYear} Desafío: Argentina al Espacio. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacidad</a>
              <a href="#" className="hover:text-white transition">Términos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

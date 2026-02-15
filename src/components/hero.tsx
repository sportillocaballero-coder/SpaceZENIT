import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-space flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: scrollY * 0.5 }}
          className="absolute top-0 right-0 w-96 h-96 bg-accent-orange rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{ y: scrollY * -0.3 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent-red rounded-full blur-3xl opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Desafío:
            <span className="block bg-gradient-to-r from-accent-orange to-accent-red bg-clip-text text-transparent">
              Argentina al Espacio
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
            ¿Estás listo para conquistar el próximo horizonte?
          </p>
          <p className="text-lg md:text-xl text-space-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            El espacio ya no es solo cosa de películas. El Desafío Argentina al Espacio llega para demostrar 
            que el futuro de la humanidad fuera de la Tierra se escribe con la tonada argentina. 
            <br /><br />
            <span className="font-bold">Es Soberanía 🇦🇷</span>
          </p>
          <p className="text-lg text-space-100 mb-8 max-w-3xl mx-auto">
            48 horas para cambiar la historia. Trabaja codo a codo con mentores expertos en sedes 
            presenciales y virtuales. Buscamos soluciones profesionales, defensas técnicas apasionadas 
            y proyectos que el mundo entero quiera mirar.
          </p>
          <div className="inline-block px-8 py-4 bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20">
            <p className="text-3xl font-bold text-accent-orange">Mayo 2026</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <button className="btn-accent px-8 py-3 text-lg">
            Registrarse Ahora
          </button>
          <button className="px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-space-600 transition-all duration-300">
            Más Información
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <p className="text-white text-opacity-70 text-sm mb-2">Desplázate para descubrir más</p>
          <svg className="w-6 h-6 mx-auto text-white text-opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

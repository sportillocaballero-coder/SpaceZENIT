import Hero from '../components/hero'
import { motion } from 'framer-motion'
import Card from '../components/card'
import { Link } from 'react-router-dom'

export default function Home() {
  const highlights = [
    {
      icon: '🎓',
      title: 'Para Estudiantes',
      description: 'Oportunidad para estudiantes de 16+ años de demostrar su talento'
    },
    {
      icon: '🌍',
      title: 'Multidisciplinaria',
      description: '8 categorías diferentes: Física, Software, Agronomía, Economía y más'
    },
    {
      icon: '🏆',
      title: 'Premios Atractivos',
      description: 'Participa y gana increíbles premios en dinero y reconocimientos'
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Conecta con otros estudiantes, mentores y profesionales del sector'
    },
  ]

  return (
    <>
      <Hero />

      {/* Highlights Section */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">¿Por Qué Participar?</h2>
            <p className="section-subtitle">
              Una oportunidad única para mostrar tu creatividad e innovación
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                gradient
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Una Hackathon Diferente</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Desafío: Argentina al Espacio es más que una hackathon. Es una experiencia única
                donde estudiantes de diversas disciplinas se unen para resolver problemas reales
                relacionados con el espacio, la ciencia y la tecnología.
              </p>
              <ul className="space-y-4 mb-8">
                {['Duración: 48 horas', 'Mentoría especializada', 'Recursos disponibles', 'Comunidad activa'].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-accent-orange rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary inline-block">
                Saber Más Sobre Nosotros
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-space rounded-2xl flex items-center justify-center shadow-glow-lg">
                <div className="text-center text-white p-8">
                  <div className="text-8xl mb-4">🛸</div>
                  <p className="text-xl font-semibold">Innovación Sin Límites</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-space">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo Para Despegar?
            </h2>
            <p className="text-xl text-space-100 mb-8">
              Únete a cientos de estudiantes innovadores. Las inscripciones abren en marzo de 2026.
            </p>
            <Link to="/register" className="btn-accent text-lg px-8 py-3 inline-block">
              Registrarse Ahora
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

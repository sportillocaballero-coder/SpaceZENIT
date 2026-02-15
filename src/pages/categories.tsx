import { motion } from 'framer-motion'
import Card from '../components/card'

export default function Categories() {
  const categories = [
    {
      icon: '🔬',
      title: 'Física',
      description: 'Problemas relacionados con fenómenos físicos en el espacio, gravitación y dinámica orbital'
    },
    {
      icon: '💻',
      title: 'Ingeniería de Software',
      description: 'Desarrollo de aplicaciones, sistemas embebidos y software para misiones espaciales'
    },
    {
      icon: '🌾',
      title: 'Agronomía',
      description: 'Soluciones agricolas sostenibles impulsadas por tecnología espacial y satélites'
    },
    {
      icon: '💰',
      title: 'Economía',
      description: 'Análisis económico del sector espacial y modelos de negocio innovadores'
    },
    {
      icon: '⚙️',
      title: 'Programación',
      description: 'Desarrollo de código para sistemas de control, automatización y procesamiento de datos'
    },
    {
      icon: '🧪',
      title: 'Ciencia General',
      description: 'Investigaciones científicas aplicadas a la exploración y desarrollo espacial'
    },
    {
      icon: '⚖️',
      title: 'Derecho',
      description: 'Marco legal, normativas internacionales y consideraciones éticas del espacio'
    },
    {
      icon: '📢',
      title: 'Divulgación Científica',
      description: 'Comunicación efectiva de conceptos espaciales para el público general'
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-space text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Categorías de Participación</h1>
            <p className="text-xl text-space-100">
              Elige la disciplina que más apasione tu equipo
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">8 Disciplinas Diferentes</h2>
            <p className="section-subtitle">
              Trabajaremos en conjunto para resolver desafíos reales del mundo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                gradient
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interdisciplinary Benefits */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Enfoque Multidisciplinario</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                La exploración espacial requiere colaboración entre diferentes disciplinas. 
                En nuestro hackathon, profesionales de distintas áreas trabajarán juntos para 
                crear soluciones integrales.
              </p>
              <ul className="space-y-4">
                {[
                  'Los ingenieros colaboran con académicos',
                  'Los economistas trabajan con científicos',
                  'Los expertos en derecho aseguran la sostenibilidad',
                  'Los comunicadores transmiten el impacto',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-accent-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-space-50 border-2 border-space-200 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-space-900 mb-6">¿Cómo Funciona?</h3>
              <div className="space-y-6">
                {[
                  { number: '1', title: 'Regístrate', desc: 'En una o más categorías de interés' },
                  { number: '2', title: 'Forma un Equipo', desc: 'De 2-5 integrantes con diferentes especialidades' },
                  { number: '3', title: 'Colabora', desc: 'Aprovecha mentores expertos en tu área' },
                  { number: '4', title: 'Presenta', desc: 'Tu solución ante el jurado calificador' },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-accent-orange text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <p className="font-semibold text-space-900">{step.title}</p>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

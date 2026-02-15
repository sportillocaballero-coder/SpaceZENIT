import { motion } from 'framer-motion'
import Card from '../components/card'

export default function Prizes() {
  const prizes = [
    {
      position: '🥇',
      title: 'Primer Lugar',
      prize: 'Por definir',
      perPerson: 'Por definir',
      benefits: ['Mentoría Premium', 'Conferencias Magistrales', 'Red de Contactos Exclusiva']
    },
    {
      position: '🥈',
      title: 'Segundo Lugar',
      prize: 'Por definir',
      perPerson: 'Por definir',
      benefits: ['Mentoría Premium', 'Conferencias Magistrales', 'Red de Contactos']
    },
    {
      position: '🥉',
      title: 'Tercer Lugar',
      prize: 'Por definir',
      perPerson: 'Por definir',
      benefits: ['Mentoría Estándar', 'Certificados Oficiales', 'Material de Estudio']
    },
  ]

  const specialAwards = [
    {
      icon: '⭐',
      title: 'Mejor Innovación Tecnológica',
      prize: 'Por definir',
      description: 'Para el equipo que presente la solución tecnológica más innovadora'
    },
    {
      icon: '🌍',
      title: 'Mejor Impacto Social',
      prize: 'Por definir',
      description: 'Para el equipo con mayor potencial de impacto en la sociedad'
    },
    {
      icon: '🎨',
      title: 'Mejor Divulgación Científica',
      prize: 'Por definir',
      description: 'Para la presentación más clara y atractiva'
    },
    {
      icon: '🤝',
      title: 'Mejor Trabajo en Equipo',
      prize: 'Por definir',
      description: 'Para el equipo que mejor demuestre colaboración y sinergia'
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Premios & Reconocimientos</h1>
            <p className="text-xl text-red-100">
              Más de $40,000 USD en premios totales
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Prizes */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Premios Principales</h2>
            <p className="section-subtitle">
              Reconocimiento y recompensas para los equipos ganadores
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`rounded-lg border-2 p-8 text-center transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-accent-orange shadow-glow-lg transform scale-105'
                    : index === 1
                    ? 'bg-gradient-to-br from-gray-50 to-blue-50 border-space-400'
                    : 'bg-gradient-to-br from-orange-50 to-red-50 border-space-300'
                }`}
              >
                <p className="text-6xl mb-4">{prize.position}</p>
                <h3 className="text-2xl font-bold text-space-900 mb-2">{prize.title}</h3>
                <p className="text-4xl font-bold text-accent-orange mb-2">{prize.prize}</p>
                <p className="text-sm text-gray-600 mb-6">{prize.perPerson}</p>

                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-3">BENEFICIOS ADICIONALES</p>
                  <ul className="space-y-2">
                    {prize.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="text-accent-orange">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Awards */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Premios Especiales</h2>
            <p className="section-subtitle">
              Categorías adicionales para reconocer diferentes tipos de excelencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialAwards.map((award, index) => (
              <Card
                key={index}
                icon={award.icon}
                title={award.title}
                className="bg-white"
              >
                <p className="text-accent-orange font-bold text-lg mb-2">{award.prize}</p>
                <p className="text-sm text-gray-600">{award.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool */}
      <section className="section bg-gradient-space text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Fondo Total de Premios</h2>
            <p className="text-6xl font-bold text-accent-orange mb-6">$40,000+</p>
            <p className="text-xl text-space-100 max-w-2xl mx-auto">
              Distribución: Premios principales ($30,000) + Premios especiales ($10,000)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-space-600 p-8 rounded">
            <h3 className="text-2xl font-bold text-space-900 mb-4">Información Importante</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-accent-orange font-bold">•</span>
                <span>Los premios se distribuyen de forma equitativa entre los miembros del equipo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-orange font-bold">•</span>
                <span>Los ganadores recibirán certificados oficiales de participación</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-orange font-bold">•</span>
                <span>Acceso a oportunidades de empleo y becas de nuestras instituciones colaboradoras</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-orange font-bold">•</span>
                <span>Cobertura mediática y promoción de proyectos en plataformas oficiales</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

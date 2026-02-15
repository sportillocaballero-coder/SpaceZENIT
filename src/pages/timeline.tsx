import { motion } from 'framer-motion'

export default function Timeline() {
  const preEventPhase = [
    {
      week: 'Semana 1 de Abril',
      title: 'Soberanía Argentina',
      description: 'Tutorías sobre el uso de datos SAOCOM y mapas de la CONAE',
      icon: '🛰️'
    },
    {
      week: 'Semana 2 de Abril',
      title: 'Física y Ciencias Espaciales',
      description: 'Órbita baja, propulsión y astronomía',
      icon: '🔬'
    },
    {
      week: 'Semana 3 de Abril',
      title: 'Derecho y Economía Espacial',
      description: 'Legislación, ética y modelos de negocio',
      icon: '⚖️'
    },
    {
      week: 'Todo Abril',
      title: 'Formación de Equipos',
      description: 'Busca tu equipo multidisciplinario en Discord',
      icon: '👥'
    },
  ]

  const mainEvent = [
    {
      day: 'Viernes por la tarde',
      title: 'Inicio de la Competencia',
      description: 'Apertura del evento en sedes presenciales y virtuales. Consultoría de dudas iniciales.',
      icon: '🚀'
    },
    {
      day: 'Sábado',
      title: 'Jornada Intensiva',
      description: 'Desarrollo completo con soporte técnico constante y mentoría disponible en todos los canales.',
      icon: '💻'
    },
    {
      day: 'Domingo por la tarde',
      title: 'Presentaciones en Vivo',
      description: 'Presentación de 3 minutos ante jurado. Documentación completa entregada. Preguntas del jurado.',
      icon: '🎤'
    },
    {
      day: 'Domingo 21:00 hs',
      title: 'Resultados y Clasificación',
      description: 'Se anuncian los equipos finalistas que avanzan a la etapa nacional.',
      icon: '🏆'
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
            <h1 className="text-5xl font-bold mb-4">Cronograma del Evento</h1>
            <p className="text-xl text-space-100">
              48 horas de competencia + Fase pre-evento en Abril
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pre-Event Phase */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Fase Pre-Evento: Abril 2026</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Preparación, tutorías y formación de equipos antes de la competencia principal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preEventPhase.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border-2 border-space-200 rounded-lg p-6 hover:shadow-glow transition-all duration-300"
              >
                <p className="text-4xl mb-3">{item.icon}</p>
                <h3 className="text-lg font-bold text-space-900 mb-2">{item.week}</h3>
                <p className="text-space-700 font-semibold text-sm mb-2">{item.title}</p>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Event Timeline */}
      <section className="section bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Competencia Principal: 48 Horas</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Viernes por la tarde hasta domingo por la noche
            </p>
          </motion.div>

          <div className="space-y-6">
            {mainEvent.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-lg border-l-4 border-space-600 p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">{event.icon}</div>
                  <div className="flex-grow">
                    <p className="text-accent-orange font-bold text-lg mb-2">{event.day}</p>
                    <h3 className="text-2xl font-bold text-space-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sedes Regionales */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">6 Nodos Regionales</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Competencia simultánea en sedes presenciales y virtuales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🔵', nombre: 'Nodo Buenos Aires', subtitulo: 'Sede Independiente' },
              { emoji: '🟢', nombre: 'Región Centro', subtitulo: 'Córdoba, Santa Fe, Entre Ríos, La Pampa' },
              { emoji: '🟡', nombre: 'Región Cuyo', subtitulo: 'Mendoza, San Juan, San Luis' },
              { emoji: '🟠', nombre: 'Región NOA', subtitulo: 'Jujuy, Salta, Tucumán, Catamarca, La Rioja, Santiago del Estero' },
              { emoji: '🔴', nombre: 'Región NEA', subtitulo: 'Misiones, Corrientes, Chaco, Formosa' },
              { emoji: '🟣', nombre: 'Región Patagonia', subtitulo: 'Neuquén, Río Negro, Chubut, Santa Cruz, Tierra del Fuego' },
            ].map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg border-2 border-space-200 p-6 text-center hover:shadow-glow transition-all duration-300"
              >
                <p className="text-5xl mb-3">{region.emoji}</p>
                <h3 className="text-lg font-bold text-space-900 mb-1">{region.nombre}</h3>
                <p className="text-sm text-gray-600">{region.subtitulo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluación */}
      <section className="section bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Proceso de Evaluación</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg border-l-4 border-accent-orange p-6"
            >
              <h3 className="text-2xl font-bold text-space-900 mb-4">Sedes Presenciales</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Presentación de 3 minutos ante jurado</li>
                <li>✓ Preguntas en vivo del jurado</li>
                <li>✓ Documentación completa entregada</li>
                <li>✓ Entorno físico con mentores</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg border-l-4 border-space-600 p-6"
            >
              <h3 className="text-2xl font-bold text-space-900 mb-4">Sedes Virtuales (Discord)</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Presentación de 3 minutos vía escenario de Discord</li>
                <li>✓ Preguntas a través de plataforma</li>
                <li>✓ Documentación completa entregada</li>
                <li>✓ Canales privados por equipo</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 bg-accent-orange bg-opacity-10 border border-accent-orange rounded-lg p-6 text-center"
          >
            <p className="text-gray-800 font-semibold mb-2">📊 Clasificación por Sedes</p>
            <p className="text-sm text-gray-700">
              Cada sede gestiona sus propios cupos: <span className="font-bold">1 clasificado por cada 10 equipos</span> 
              que entreguen documentación completa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section bg-gradient-space text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Comienza en Abril</h2>
          <p className="text-xl text-space-100 mb-8 max-w-2xl mx-auto">
            Las tutorías y formación de equipos comienzan en abril. La competencia principal es en mayo.
          </p>
          <a href="/register" className="btn-accent px-8 py-3 text-lg inline-block">
            Registrarse Ahora
          </a>
        </motion.div>
      </section>
    </div>
  )
}

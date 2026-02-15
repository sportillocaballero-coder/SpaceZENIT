import { motion } from 'framer-motion'
import Card from '../components/card'

export default function Challenges() {
  const challenges = [
    {
      eje: 'Argentina al Espacio 🛰️',
      color: 'from-green-50 to-white border-green-300',
      desafios: [
        {
          icon: '💡',
          title: 'El Silencio de las Estrellas',
          description: 'La contaminación lumínica está opacando el cielo nocturno. Diseña una campaña de concientización o tecnología para reducir la contaminación lumínica.',
          nivel: 'Bajo - Intermedio'
        },
        {
          icon: '♻️',
          title: 'Rastro de Basura en el Cono Sur',
          description: 'Diseña un software que optimice el rastreo de basura espacial desde estaciones terrestres en la Patagonia, considerando interferencia climática.',
          nivel: 'Avanzado',
          perfiles: 'Físicos, Ingenieros de Software'
        },
        {
          icon: '🌾',
          title: 'Soberanía de Datos: SAOCOM al Servicio',
          description: 'Utiliza imágenes de satélites SAOCOM para predecir rendimiento de cosechas e inundaciones. Crea un modelo de negocio que demuestre el ahorro estatal o privado.',
          nivel: 'Intermedio - Avanzado',
          perfiles: 'Agrónomos, Economistas, Programadores'
        },
      ]
    },
    {
      eje: '🔬 Ciencia y Física General',
      color: 'from-blue-50 to-white border-blue-300',
      desafios: [
        {
          icon: '🗑️',
          title: 'Basura en el Patio de Casa',
          description: 'Idear un método de frenado para satélites pequeños o sistemas de limpieza espacial que evite crear más basura sin destruir satélites activos.',
          nivel: 'Intermedio - Avanzado'
        },
        {
          icon: '⚡',
          title: 'Energía en la Luna - Rovers',
          description: 'Los rovers lunares mueren en sombra eterna. Diseña un sistema de repetidores de energía o solución para operar en zonas oscuras sin quedarse sin batería.',
          nivel: 'Intermedio - Avanzado'
        },
        {
          icon: '🚀',
          title: 'Propulsión de Bajo Costo',
          description: 'Diseña un modelo de construcción de cohetes y satélites más viable y accesible. La industria aeroespacial es cara pero es necesario llegar al espacio.',
          nivel: 'Intermedio - Avanzado',
          perfiles: 'Ingenieros Mecánicos, Aeroespaciales, Físicos'
        },
      ]
    },
    {
      eje: '💰 Economía, Derecho y Divulgación',
      color: 'from-purple-50 to-white border-purple-300',
      desafios: [
        {
          icon: '📢',
          title: 'Traductor de Ciencia - Divulgación',
          description: 'Toma un descubrimiento científico (ej. Ondas Gravitacionales) y crea una campaña que lo explique solo con analogías de la vida cotidiana sin perder rigor.',
          nivel: 'Bajo - Intermedio - Avanzado'
        },
        {
          icon: '🎬',
          title: 'Cápsula del Tiempo Inclusiva',
          description: 'Si enviáramos un nuevo Disco de Oro al espacio representando la humanidad actual con minorías y diversidad, ¿qué datos, sonidos y leyes enviaríamos?',
          nivel: 'Intermedio'
        },
        {
          icon: '📈',
          title: 'La Bolsa de Valores de la Luna',
          description: 'Si comenzamos a extraer materiales en la Luna, ¿cómo se comercia? Diseña un sistema financiero para el intercambio de recursos entre colonias y la Tierra.',
          nivel: 'Intermedio - Avanzado',
          perfiles: 'Economistas, Desarrolladores'
        },
        {
          icon: '🛸',
          title: 'Fake News Galácticas',
          description: 'Crea una plataforma o campaña transmedia para combatir teorías conspirativas usando datos científicos con lenguaje viral para redes sociales.',
          nivel: 'Intermedio'
        },
        {
          icon: '🌍',
          title: 'Seguros para Turistas Espaciales',
          description: 'Crea la primera Póliza de Seguro Espacial. ¿Qué responsabilidad legal hay si un turista se enferma en órbita o el cohete falla?',
          nivel: 'Intermedio',
          perfiles: 'Abogados, Actuarios, Médicos'
        },
      ]
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
            <h1 className="text-5xl font-bold mb-4">Desafíos Argentina al Espacio</h1>
            <p className="text-xl text-space-100">
              9 desafíos multidisciplinarios para resolver en 48 horas
            </p>
          </motion.div>
        </div>
      </div>

      {/* Challenges by Axis */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {challenges.map((eje, ejeIdx) => (
            <motion.div
              key={ejeIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: ejeIdx * 0.2, duration: 0.6 }}
              className="mb-16"
            >
              <div className={`bg-gradient-to-r ${eje.color} border-l-4 rounded-lg p-8 mb-8`}>
                <h2 className="text-3xl font-bold text-space-900 mb-2">{eje.eje}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eje.desafios.map((challenge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-white border-2 border-space-200 rounded-lg p-6 hover:shadow-glow transition-all duration-300"
                  >
                    <p className="text-4xl mb-3">{challenge.icon}</p>
                    <h3 className="text-xl font-bold text-space-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{challenge.description}</p>
                    <div className="space-y-2 border-t pt-4">
                      <div className="inline-block px-3 py-1 bg-space-100 text-space-700 rounded-full text-xs font-semibold">
                        {challenge.nivel}
                      </div>
                      {challenge.perfiles && (
                        <p className="text-xs text-gray-600 italic mt-2">
                          👥 {challenge.perfiles}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Cómo Funcionan los Desafíos</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Elige tu Desafío',
                description: 'Selecciona uno de los 9 desafíos mencionados o crea una solución interdisciplinaria'
              },
              {
                icon: '👥',
                title: 'Forma tu Equipo',
                description: 'Agrupa 2-6 personas de diferentes disciplinas para abordar el problema completo'
              },
              {
                icon: '🏆',
                title: 'Compite y Gana',
                description: '48 horas para desarrollar tu solución, presentarla y competir por premios'
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-white rounded-lg border-2 border-space-200 hover:shadow-md transition"
              >
                <p className="text-5xl mb-4">{step.icon}</p>
                <h3 className="text-xl font-bold text-space-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-space text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">¿Cuál es tu Desafío?</h2>
          <p className="text-xl text-space-100 mb-8 max-w-2xl mx-auto">
            Elige tu disciplina favorita y sé parte de la revolución espacial argentina
          </p>
          <a href="/register" className="btn-accent px-8 py-3 text-lg inline-block">
            Registrarse Ahora
          </a>
        </motion.div>
      </section>
    </div>
  )
}

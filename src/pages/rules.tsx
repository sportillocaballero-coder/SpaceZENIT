import { motion } from 'framer-motion'

export default function Rules() {
  const rulesCategories = [
    {
      title: 'Requisitos de Participación',
      rules: [
        'Debes tener 16 años o más',
        'Participación en equipos de 2 a 5 integrantes',
        'Todos los integrantes deben registrarse',
        'Completar el formulario de registro antes del 31 de marzo',
        'Aceptar los términos y condiciones del hackathon',
      ]
    },
    {
      title: 'Propiedad Intelectual y Licencias',
      rules: [
        'Los proyectos desarrollados pertenecen al equipo',
        'El hackathon tiene derecho a usar los proyectos para fines de promoción',
        'Los ganadores pueden publicar sus soluciones bajo licencia open source',
        'Respeta las licencias de dependencias y herramientas utilizadas',
        'No pueden usarse proyectos previamente desarrollados',
      ]
    },
    {
      title: 'Código de Conducta',
      rules: [
        'Respeto mutuo entre participantes',
        'No se toleran comportamientos discriminatorios',
        'Comunicación respetuosa en todas las plataformas',
        'Seguir las instrucciones del equipo organizador',
        'Mantener ambientes seguros e inclusivos',
      ]
    },
    {
      title: 'Criterios de Evaluación',
      rules: [
        'Innovación: 30% - Originalidad y creatividad',
        'Implementación: 25% - Calidad de desarrollo',
        'Impacto: 25% - Potencial de cambio real',
        'Presentación: 15% - Claridad de exposición',
        'Trabajo en Equipo: 5% - Colaboración observada',
      ]
    },
    {
      title: 'Normas Técnicas',
      rules: [
        'El código debe estar documentado',
        'Debe haber un README con instrucciones de ejecución',
        'Subir el proyecto a GitHub o repositorio similar',
        'Usar las herramientas y tecnologías apropiadas',
        'La solución debe ser funcional en el acto de presentación',
      ]
    },
    {
      title: 'Desqualificación',
      rules: [
        'Plagio o copia de código sin atribución',
        'Uso de proyectos previamente desarrollados',
        'Incumplimiento grave del código de conducta',
        'No presentarse al acto de premiación',
        'Falseamiento de información en el registro',
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
            <h1 className="text-5xl font-bold mb-4">Normas y Condiciones</h1>
            <p className="text-xl text-space-100">
              Lee cuidadosamente nuestras reglas antes de participar
            </p>
          </motion.div>
        </div>
      </div>

      {/* Rules Grid */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Información Importante</h2>
            <p className="section-subtitle">
              Conoce todas las reglas que rigen el hackathon
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rulesCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
                className="bg-white border-2 border-space-200 rounded-lg p-8 hover:shadow-glow transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-space-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-accent-orange rounded-full flex items-center justify-center text-white">
                    ✓
                  </span>
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.rules.map((rule, ruleIdx) => (
                    <li key={ruleIdx} className="flex gap-3 text-gray-700">
                      <span className="text-accent-orange font-bold flex-shrink-0">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-yellow-500 bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ Aviso Importante</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Al registrarte en el hackathon, aceptas automáticamente todas estas normas y condiciones.
              El incumplimiento grave de cualquiera de estas reglas puede resultar en la desqualificación 
              de tu equipo y la devolución de cualquier premio.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nos reservamos el derecho de actualizar estas normas en cualquier momento. Las actualizaciones 
              serán comunicadas a través de email a todos los participantes registrados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Responsibilities */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Responsabilidades del Equipo</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📋',
                title: 'Comunicación',
                description: 'Mantener contacto con el equipo de soporte y asistir a sesiones obligatorias'
              },
              {
                icon: '⚙️',
                title: 'Desarrollo',
                description: 'Asegurar que el proyecto funcione correctamente y esté debidamente documentado'
              },
              {
                icon: '🎯',
                title: 'Presentación',
                description: 'Presentar el proyecto en la fecha indicada siguiendo los formatos requeridos'
              },
            ].map((responsibility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-space-50 border border-space-200 rounded-lg hover:shadow-md transition"
              >
                <p className="text-5xl mb-4">{responsibility.icon}</p>
                <h3 className="text-xl font-bold text-space-900 mb-2">{responsibility.title}</h3>
                <p className="text-gray-700">{responsibility.description}</p>
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
          <h2 className="text-4xl font-bold mb-4">¿Estás listo?</h2>
          <p className="text-xl text-space-100 mb-8 max-w-2xl mx-auto">
            Si aceptas todas estas normas y condiciones, prepárate para vivir una experiencia increíble
          </p>
          <a href="/register" className="btn-accent px-8 py-3 text-lg inline-block">
            Registrarse Ahora
          </a>
        </motion.div>
      </section>
    </div>
  )
}

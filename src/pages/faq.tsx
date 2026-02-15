import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Cuál es la edad mínima para participar?',
      answer: 'La edad mínima es 16 años. No hay límite de edad máxima.'
    },
    {
      question: '¿Puedo participar solo o debo formar un equipo?',
      answer: 'Debes participar en un equipo de 2 a 5 integrantes. Si no tienes equipo, puedes registrarte y te conectaremos con otros participantes.'
    },
    {
      question: '¿Necesito experiencia previa?',
      answer: 'No es necesario. Aceptamos participantes de todos los niveles de experiencia. Tendrás acceso a mentoría y recursos educativos.'
    },
    {
      question: '¿Cuál es el costo de participación?',
      answer: 'La participación es completamente gratuita. Solo debes completar tu registro en el formulario.'
    },
    {
      question: '¿Qué incluye la mentoría?',
      answer: 'Tendrás acceso a sesiones semanales con expertos en tu categoría de interés, recursos de aprendizaje, workshops especializados y soporte técnico.'
    },
    {
      question: '¿Cómo se evalúan los proyectos?',
      answer: 'Los proyectos se evalúan según: innovación (30%), implementación (25%), impacto (25%), presentación (15%), trabajo en equipo (5%).'
    },
    {
      question: '¿Es obligatorio presentar físicamente?',
      answer: 'Por ahora la hackathon es principalmente virtual, pero habrá una premiación presencial en mayo en Buenos Aires.'
    },
    {
      question: '¿Qué herramientas/recursos tecnológicos necesito?',
      answer: 'Necesitas una computadora con acceso a internet. Las herramientas específicas dependerán de tu categoría (software, Python, Jupyter, etc.)'
    },
    {
      question: '¿Puedo cambiar de categoría después de registrarme?',
      answer: 'Sí, puedes solicitar un cambio de categoría hasta 15 días después de tu registro.'
    },
    {
      question: '¿Hay algún requisito mínimo de dedicación?',
      answer: 'Recomendamos dedicar entre 10-15 horas semanales durante los 3 meses del hackathon. Las mentorías son flexibles según tu disponibilidad.'
    },
    {
      question: '¿Qué pasa si mi equipo se divide durante el hackathon?',
      answer: 'Contacta al equipo de soporte. Podemos ayudarte a reorganizar el equipo o conectarte con otros participantes.'
    },
    {
      question: '¿Cómo se distribuyen los premios entre los miembros del equipo?',
      answer: 'Los premios se distribuyen equitativamente entre todos los miembros del equipo ganador, a menos que el equipo acuerde otra distribución.'
    },
    {
      question: '¿Hay oportunidades de empleo después de la hackathon?',
      answer: 'Sí, tenemos partners empresariales que buscan talento. Los proyectos destacados tendrán exposición a estas oportunidades.'
    },
    {
      question: '¿Qué ocurre con mis datos personales?',
      answer: 'Tus datos solo se utilizan para administrar el hackathon y comunicaciones relacionadas. Ver nuestra política de privacidad completa en el footer.'
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
            <h1 className="text-5xl font-bold mb-4">Preguntas Frecuentes</h1>
            <p className="text-xl text-space-100">
              Resuelve tus dudas sobre el hackathon
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 5) * 0.05, duration: 0.4 }}
                className="border border-space-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 bg-white hover:bg-space-50 transition-colors duration-300 flex items-center justify-between text-left font-semibold text-space-900"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-accent-orange">Q</span>
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-space-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                </button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openIndex === index ? 1 : 0,
                    height: openIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-space-50 border-t border-space-200 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-space-900 mb-4">
              ¿No encontraste tu respuesta?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Contáctanos directamente para resolver tus dudas específicas
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Ir a Contacto
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

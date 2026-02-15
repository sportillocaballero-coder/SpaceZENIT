import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  })

  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Contact Form Data:', data)
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      info: 'soporte@argentina-al-espacio.com',
      description: 'Envíanos un email y te responderemos en 24 horas'
    },
    {
      icon: '📱',
      title: 'Teléfono',
      info: '+54 9 11 XXXX-XXXX',
      description: 'Llámanos durante horario de oficina (L-V 9:00-18:00)'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      info: 'Buenos Aires, Argentina',
      description: 'Oficina central en la Ciudad Autónoma'
    },
    {
      icon: '💬',
      title: 'Discord',
      info: 'Comunidad Argentina al Espacio',
      description: 'Únete a nuestro servidor para chat en tiempo real'
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
            <h1 className="text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-xl text-space-100">
              Estamos aquí para ayudarte
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Formas de Contacto</h2>
            <p className="section-subtitle">
              Múltiples canales para que nos encuentres
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border-2 border-space-200 rounded-lg p-6 text-center hover:shadow-glow transition-all duration-300"
              >
                <p className="text-5xl mb-4">{method.icon}</p>
                <h3 className="text-xl font-bold text-space-900 mb-2">{method.title}</h3>
                <p className="text-accent-orange font-semibold mb-2">{method.info}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-space-900 mb-8">Envíanos un Mensaje</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded"
                >
                  <p className="text-green-700 font-semibold">
                    ✓ ¡Mensaje enviado! Te responderemos pronto.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    {...register('name', {
                      required: 'El nombre es requerido',
                      minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                    })}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    {...register('email', {
                      required: 'El email es requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    placeholder="¿Sobre qué es tu consulta?"
                    {...register('subject', {
                      required: 'El asunto es requerido',
                      minLength: { value: 5, message: 'Mínimo 5 caracteres' }
                    })}
                    className={errors.subject ? 'border-red-500' : ''}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tu mensaje..."
                    {...register('message', {
                      required: 'El mensaje es requerido',
                      minLength: { value: 10, message: 'Mínimo 10 caracteres' }
                    })}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-accent py-3 text-lg font-semibold"
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg border-2 border-space-200 p-8">
                <h3 className="text-2xl font-bold text-space-900 mb-4">Horario de Atención</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold">Lunes a Viernes:</span> 09:00 - 18:00 ART</p>
                  <p><span className="font-semibold">Sábados:</span> 10:00 - 14:00 ART</p>
                  <p><span className="font-semibold">Domingos:</span> Cerrado</p>
                  <p className="mt-4 text-sm text-gray-600">
                    Para consultas urgentes, envía un email con asunto "URGENTE"
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border-2 border-space-200 p-8">
                <h3 className="text-2xl font-bold text-space-900 mb-4">Tiempo de Respuesta</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold">Emails:</span> 24 horas</p>
                  <p><span className="font-semibold">Discord:</span> 2-4 horas</p>
                  <p><span className="font-semibold">Teléfono:</span> Inmediato (en horario)</p>
                  <p className="mt-4 text-sm text-gray-600">
                    Nos comprometemos a responder todas tus consultas
                  </p>
                </div>
              </div>

              <div className="bg-gradient-space text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">¿Necesitas Ayuda Rápida?</h3>
                <p className="mb-6 text-space-100">
                  Revisa nuestra sección de FAQ o únete a nuestra comunidad en Discord
                </p>
                <a href="/faq" className="inline-block btn-accent">
                  Ver Preguntas Frecuentes
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

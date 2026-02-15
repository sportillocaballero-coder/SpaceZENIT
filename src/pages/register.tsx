import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  age: number
  institution: string
  category: string
  experience: string
  agreeTerms: boolean
}

export default function Register() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: 16,
      institution: '',
      category: '',
      experience: 'beginner',
      agreeTerms: false,
    }
  })

  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would send the data to your backend
      console.log('Form Data:', data)
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const categories = [
    'Física',
    'Ingeniería de Software',
    'Agronomía',
    'Economía',
    'Programación',
    'Ciencia General',
    'Derecho',
    'Divulgación Científica',
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
            <h1 className="text-5xl font-bold mb-4">Registro para la Hackathon</h1>
            <p className="text-xl text-space-100">
              Únete a la comunidad de innovadores
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <section className="section">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg"
            >
              <p className="text-green-700 font-semibold">
                ✓ ¡Registro completado exitosamente! Te enviaremos un email de confirmación.
              </p>
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg border-2 border-space-200 p-8 shadow-md"
          >
            {/* Personal Information */}
            <h2 className="text-2xl font-bold text-space-900 mb-6">Información Personal</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  {...register('firstName', {
                    required: 'El nombre es requerido',
                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                  })}
                  className={errors.firstName ? 'border-red-500' : ''}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Tu apellido"
                  {...register('lastName', {
                    required: 'El apellido es requerido',
                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                  })}
                  className={errors.lastName ? 'border-red-500' : ''}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+54 9 XXX XXX XXXX"
                  {...register('phone', {
                    required: 'El teléfono es requerido',
                    minLength: { value: 9, message: 'Teléfono inválido' }
                  })}
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Edad
                </label>
                <input
                  type="number"
                  min="16"
                  max="24"
                  {...register('age', {
                    required: 'La edad es requerida',
                    min: { value: 16, message: 'Debes tener entre 16 y 24 años' },
                    max: { value: 24, message: 'Debes tener entre 16 y 24 años' }
                  })}
                  className={errors.age ? 'border-red-500' : ''}
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Institución Educativa
                </label>
                <input
                  type="text"
                  placeholder="Tu escuela/universidad"
                  {...register('institution', {
                    required: 'La institución es requerida'
                  })}
                  className={errors.institution ? 'border-red-500' : ''}
                />
                {errors.institution && (
                  <p className="text-red-500 text-sm mt-1">{errors.institution.message}</p>
                )}
              </div>
            </div>

            {/* Interest & Experience */}
            <h2 className="text-2xl font-bold text-space-900 mb-6 mt-8">Intereses y Experiencia</h2>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Categoría de Interés Principal
              </label>
              <select
                {...register('category', {
                  required: 'Debes seleccionar una categoría'
                })}
                className={errors.category ? 'border-red-500' : ''}
              >
                <option value="">Selecciona una categoría...</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
              )}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nivel de Experiencia
              </label>
              <div className="space-y-3">
                {[
                  { value: 'beginner', label: 'Principiante (sin experiencia previa)' },
                  { value: 'intermediate', label: 'Intermedio (algo de experiencia)' },
                  { value: 'advanced', label: 'Avanzado (experiencia significativa)' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      value={option.value}
                      {...register('experience')}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('agreeTerms', {
                    required: 'Debes aceptar los términos y condiciones'
                  })}
                  className="w-5 h-5 mt-1"
                />
                <span className="text-gray-700">
                  Acepto los términos y condiciones, y autorizo el procesamiento de mis datos personales
                </span>
              </label>
              {errors.agreeTerms && (
                <p className="text-red-500 text-sm mt-1">{errors.agreeTerms.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-accent py-3 text-lg font-semibold"
            >
              Registrarse Ahora
            </button>
          </motion.form>
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
            <h2 className="section-title">¿Qué Sucede Después?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '1', text: 'Enviaremos un email de confirmación' },
              { number: '2', text: 'Recibirás los términos de participación' },
              { number: '3', text: 'Formarás tu equipo (2-5 personas)' },
              { number: '4', text: '¡A trabajar en tu proyecto!' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <p className="text-gray-700 font-semibold">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

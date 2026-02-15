import { motion } from 'framer-motion'
import Card from '../components/card'

export default function About() {
  const objectives = [
    'Fomentar el pensamiento crítico y la resolución de problemas',
    'Promover la interdisciplinariedad en la innovación',
    'Desarrollar habilidades de trabajo en equipo',
    'Conectar estudiantes con profesionales del sector',
  ]

  const benefits = [
    {
      icon: '🧠',
      title: 'Desarrolla Habilidades',
      description: 'Aprende nuevas competencias en un ambiente colaborativo y desafiante'
    },
    {
      icon: '🌟',
      title: 'Gana Experiencia',
      description: 'Trabaja en proyectos reales con mentores experimentados'
    },
    {
      icon: '🎁',
      title: 'Oportunidades',
      description: 'Acceso a ofertas laborales y becas de instituciones colaboradoras'
    },
    {
      icon: '📚',
      title: 'Aprendizaje',
      description: 'Talleres y capacitaciones en disciplinas relacionadas al espacio'
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
            <h1 className="text-5xl font-bold mb-4">Sobre Desafío: Argentina al Espacio</h1>
            <p className="text-xl text-space-100">
              Una iniciativa para impulsar la innovación en jóvenes talentos
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Content */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">¿Qué es la Hackathon?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Desafío: Argentina al Espacio es una hackathon diseñada para 
                estudiantes de 16 a 24 años. Durante 48 horas intensas de competencia, los participantes 
                trabajarán en equipos para resolver problemas reales relacionados con el espacio, la ciencia 
                y la tecnología a nivel nacional.
              </p>
              <h3 className="text-2xl font-bold text-space-900 mb-4 mt-8">Organizado Conjuntamente</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Esta hackathon es una iniciativa conjunta de <span className="font-bold">Constelar</span> y 
                los equipos de investigación <span className="font-bold">Stellaris</span>, <span className="font-bold">Celeste y Blanca Space</span>, 
                y <span className="font-bold">GJTeam</span>.
              </p>
              <h3 className="text-2xl font-bold text-space-900 mb-4 mt-8">Modelo Híbrido: Presencial y Virtual</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                El evento se desarrollará de forma simultánea en <span className="font-bold">sedes físicas regionales</span> y 
                <span className="font-bold"> sedes virtuales</span> mediante Discord, conectando a participantes de todo el país.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nuestro objetivo es crear un espacio donde la innovación, la creatividad y el 
                trabajo en equipo sean las herramientas principales para generar soluciones 
                que impacten positivamente en la sociedad y el desarrollo espacial de Argentina.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-space-50 border-4 border-space-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-space-700 mb-4">Detalles del Evento</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-space-900">Duración</p>
                    <p className="text-gray-700">48 horas intensas de competencia</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-space-900">Edad</p>
                    <p className="text-gray-700">Entre 16 y 24 años</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-space-900">Formato</p>
                    <p className="text-gray-700">Híbrido: Sedes presenciales + virtuales</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-space-900">Equipo</p>
                    <p className="text-gray-700">2-6 integrantes multidisciplinarios</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-space-900">Formato</p>
                    <p className="text-gray-700">Equipos de 2-5 participantes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nuestros Objetivos</h2>
            <p className="section-subtitle">
              Aspiramos a crear una comunidad de innovadores
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-lg border-l-4 border-space-600 shadow-md hover:shadow-lg transition"
              >
                <p className="text-gray-700 font-semibold">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Beneficios de Participar</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                gradient
              />
            ))}
          </div>
        </div>
      </section>

      {/* Teams & Partners */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Equipos Organizadores</h2>
            <p className="section-subtitle">
              Una iniciativa conjunta de equipos de investigación y desarrollo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Constelar', logo: 'Constelarlogobl.png' },
              { name: 'Stellaris', logo: 'StellarisBLlogo.png' },
              { name: 'Celeste y Blanca Space', logo: 'CelesteyBlancaSpa.png' },
              { name: 'GJTeam', logo: 'GJTEAM.jpeg' },
            ].map((team, index) => {
              const initials = team.name.split(' ').map(w => w[0]).join('').substring(0, 2);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-lg border-2 border-space-200 p-8 flex flex-col items-center justify-center hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-24 h-24 mb-4 bg-gradient-to-br from-space-100 to-space-50 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={`/images/logo/${team.logo}`} 
                      alt={team.name}
                      className="w-20 h-20 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-16 h-16 bg-gradient-to-br from-space-600 to-space-700 rounded flex items-center justify-center"><span class="text-white font-bold text-lg">${initials}</span></div>`;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-space-900 text-center">{team.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient-space">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {[
              { number: '500+', label: 'Estudiantes Esperados' },
              { number: '8', label: 'Categorías' },
              { number: '5', label: 'Equipos Organizadores' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center"
              >
                <p className="text-5xl font-bold text-accent-orange mb-2">{stat.number}</p>
                <p className="text-xl text-space-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

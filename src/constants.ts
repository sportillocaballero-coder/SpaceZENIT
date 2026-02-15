// Event Information
export const EVENT_NAME = 'Desafío: Argentina al Espacio'
export const EVENT_YEAR = 2026
export const EVENT_MONTH = 'Mayo'
export const EVENT_START_DATE = '2026-03-01'
export const EVENT_END_DATE = '2026-05-31'

// Contact Information
export const CONTACT_EMAIL = 'soporte@argentina-al-espacio.com'
export const CONTACT_PHONE = '+54 9 11 XXXX-XXXX'
export const CONTACT_LOCATION = 'Buenos Aires, Argentina'

// Event Details
export const MIN_AGE = 16
export const MIN_TEAM_SIZE = 2
export const MAX_TEAM_SIZE = 5
export const TOTAL_PRIZE_POOL = 40000

// Categories
export const CATEGORIES = [
  'Física',
  'Ingeniería de Software',
  'Agronomía',
  'Economía',
  'Programación',
  'Ciencia General',
  'Derecho',
  'Divulgación Científica',
]

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
  discord: '#',
  linkedin: '#',
}

// Timeline Dates
export const TIMELINE_EVENTS = [
  {
    month: 'Marzo 2026',
    title: 'Lanzamiento & Inscripciones',
    description: 'Se abre el registro para todos los interesados. Sesión de presentación del hackathon.',
  },
  {
    month: 'Marzo - Abril 2026',
    title: 'Desarrollo & Mentoría',
    description: 'Los equipos trabajan en sus proyectos. Sesiones de mentoría semanales con expertos en cada categoria.',
  },
  {
    month: 'Abril 2026',
    title: 'Feria de Avances',
    description: 'Presentación del progreso realizado. Networking con otros participantes y patrocinadores.',
  },
  {
    month: 'Abril - Mayo 2026',
    title: 'Refinamiento Final',
    description: 'Pulir las soluciones. Preparación para la presentación final ante el jurado.',
  },
  {
    month: 'Mayo 2026',
    title: 'Gran Final',
    description: 'Presentaciones finales. Premiación de equipos ganadores. Ceremonia de clausura.',
  },
]

// Evaluation Criteria
export const EVALUATION_CRITERIA = {
  innovation: { weight: 30, label: 'Innovación' },
  implementation: { weight: 25, label: 'Implementación' },
  impact: { weight: 25, label: 'Impacto' },
  presentation: { weight: 15, label: 'Presentación' },
  teamwork: { weight: 5, label: 'Trabajo en Equipo' },
}

// Prize Distribution
export const PRIZES = {
  first: { amount: 15000, position: 'Primer Lugar' },
  second: { amount: 10000, position: 'Segundo Lugar' },
  third: { amount: 5000, position: 'Tercer Lugar' },
  special: { amount: 10000, description: 'Premios especiales' },
}

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  description: string
  icon?: ReactNode
  children?: ReactNode
  className?: string
  gradient?: boolean
  hover?: boolean
}

export default function Card({
  title,
  description,
  icon,
  children,
  className = '',
  gradient = false,
  hover = true,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { translateY: -5 } : {}}
      className={`rounded- lg border border-space-100 p-6 transition-all duration-300 
        ${hover ? 'hover:shadow-glow' : ''} 
        ${gradient ? 'bg-gradient-to-br from-space-50 to-white' : 'bg-white'}
        ${className}`}
    >
      {icon && (
        <div className="text-4xl mb-4">{icon}</div>
      )}
      <h3 className="text-xl font-bold text-space-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {children}
    </motion.div>
  )
}

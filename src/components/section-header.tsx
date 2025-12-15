import { motion } from 'framer-motion'
import { Badge } from './ui/badge'

interface SectionHeaderProps {
  label: string
  title: string
  description: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      className="mx-auto flex max-w-3xl flex-col items-center text-center space-y-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Badge className="uppercase tracking-tight text-[11px]" variant="outline">
        {label}
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-semibold text-white">{title}</h2>
      <p className="text-lg text-slate-200/80">{description}</p>
    </motion.div>
  )
}

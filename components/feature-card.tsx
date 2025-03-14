"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4 rounded-full bg-primary/10 p-3">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}


"use client"

import { motion } from "motion/react"
import { Check } from "lucide-react"

export default function SalientFeaturesSection() {
  const features = [
    "G+ 29 Floors",
    "4625 ft Wave-inspired tower",
    "65% open space",
    "Showrooms 1,370 - 6,400 sq ft",
    "Offices 750 - 1,950 sq ft",
    "21ft Frontage",
    "Double-height Retail",
    "2 Prisho-height Atriums",
    "20 High-Speed Elevators",
    "Three Basement Parking",
    "Green Building"
  ]

  return (
    <section id="salient-features" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-primary mb-16"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Salient Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ x: 5, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                <Check size={16} className="text-white" />
              </div>
              <span className="text-primary font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

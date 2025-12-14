"use client"

import { motion } from "motion/react"

export default function ConfigurationsSection() {
  const configurations = [
    {
      value: "799 - 1873 sq ft",
      label: "CARPET AREA (APPROX.)"
    },
    {
      value: "1457 - 3068 sq ft",
      label: "CARPET AREA (INDICASIUM)"
    },
    {
      value: "₹1.29 Cr*",
      label: "ONWARDS"
    }
  ]

  return (
    <section id="configurations" className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {configurations.map((config, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-10 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {config.value}
              </h3>
              <p className="text-sm text-muted-foreground font-medium tracking-wide">
                {config.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

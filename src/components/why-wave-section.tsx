"use client"

import { motion } from "motion/react"

export default function WhyWaveSection() {
  const features = [
    {
      title: "Differentness",
      subtitle: "Unrivalled",
      description: "Girnaar's first premium township in Ahmedabad with 100% villas."
    },
    {
      title: "Magnificent Visibility",
      subtitle: "",
      description: "A must for West India's most strategically connected locality fronts GMFC with highway proximity."
    },
    {
      title: "India Credibility",
      subtitle: "",
      description: "Globally reputed firm and architecture combined trust in Ahmedabad for world styling one space."
    }
  ]

  return (
    <section id="why-section" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-primary mb-16"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Swaroop?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {feature.title}
              </h3>
              {feature.subtitle && (
                <p className="text-xl text-secondary mb-4 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.subtitle}
                </p>
              )}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

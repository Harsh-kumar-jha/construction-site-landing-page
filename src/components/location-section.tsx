"use client"

import { motion } from "motion/react"

export default function LocationSection() {
  return (
    <section id="location" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Visit Us Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Find us at Krishna Estate, Kathwada, Ahmedabad
          </p>
        </motion.div>

        {/* Map - Full Width */}
        <motion.div
          className="relative w-full h-[500px] md:h-[600px] bg-gray-200 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps?q=SWAROOP+INFRA+BUILD,+Kathwada-Singarva+Road,+Ahmedabad,+Gujarat&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Swaroop Infra Build Location Map"
            className="absolute inset-0"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <p className="text-sm text-primary font-medium leading-relaxed">
              Shed no. B/55 First Floor, Krishna Estate, Nr. Krishna way Bridge, Kathwada singarva road. Kathwada - 382430 Ahmedabad
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

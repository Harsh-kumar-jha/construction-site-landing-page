"use client"

import { motion } from "motion/react"

export default function TaglineSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            A Life Long View
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
            for a very few.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

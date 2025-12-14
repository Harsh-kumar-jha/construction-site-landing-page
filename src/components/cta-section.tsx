"use client"

import { motion } from "motion/react"

interface CTASectionProps {
  onContactClick: () => void
}

export default function CTASection({ onContactClick }: CTASectionProps) {
  return (
    <section className="w-full py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Your Next Big Business Move Starts Here.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              onClick={onContactClick}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-all font-medium text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
            <motion.button
              onClick={onContactClick}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-all font-medium text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Site Visit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

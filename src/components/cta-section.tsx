"use client"

import { motion } from "motion/react"

interface CTASectionProps {
  onContactClick: () => void
}

export default function CTASection({ onContactClick }: CTASectionProps) {
  return (
    <motion.section
      className="w-full py-20 bg-green-900 text-accent-foreground relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent-foreground/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-foreground/5 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          className="text-xl text-accent-foreground/90 mb-10 text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get a free, no-obligation quote from our experienced team. We're here to help bring your construction vision
          to life.
        </motion.p>
        <motion.button
          onClick={onContactClick}
          className="bg-white text-accent hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Now
        </motion.button>
      </div>
    </motion.section>
  )
}

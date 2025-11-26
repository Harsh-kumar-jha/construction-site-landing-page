"use client"

import { motion } from "motion/react"

interface HeroVideoProps {
  videoUrl?: string
  onContactClick: () => void
}

export default function HeroVideo({ videoUrl, onContactClick }: HeroVideoProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0 w-full h-full">
        <video src="../assets/swaroop-video-1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional Construction Services
          </motion.h1> */}
          {/* <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-10 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Excellence in every project, from concept to completion
          </motion.p> */}
          {/* <motion.button
            onClick={onContactClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
          </motion.button> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="text-white/70 text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-white/70"
        >
          ↓
        </motion.div>
      </motion.div>
    </div>
  )
}

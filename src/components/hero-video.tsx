"use client"

import { motion } from "motion/react"
import { MapPin } from "lucide-react"

interface HeroVideoProps {
  videoUrl?: string
  onContactClick: () => void
}

export default function HeroVideo({ videoUrl, onContactClick }: HeroVideoProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0 w-full">
        <video src="../assets/swaroop-video-1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          className="max-w-4xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-white text-6xl md:text-8xl font-bold mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Swaroop
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MapPin size={20} />
            <span className="text-lg">Vaishnodev - near Gurdhamdev</span>
          </motion.div>

          <motion.p
            className="text-white text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Girnaar Technopark
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded text-sm font-medium">2BHK</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded text-sm font-medium">3BHK</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded text-sm font-medium">Duplex</span>
          </motion.div>

          <motion.button
            onClick={onContactClick}
            className="bg-white text-primary px-8 py-3 rounded font-medium text-sm hover:bg-white/90 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enquire Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
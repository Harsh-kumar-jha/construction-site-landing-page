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
            Swaroop <span className="text-green-500">Infra</span>
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 mb-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* <MapPin size={20} /> */}
            {/* <span className="text-lg">Vaishnodev - near Gurdhamdev</span> */}
          </motion.div>

          {/* Tagline with Modern Styling */}
          <div className="mb-10 relative">
            {/* Decorative Line Top */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative inline-block"
            >
              {/* Solid Foundation */}
              <motion.h2
                className="text-white text-3xl md:text-5xl lg:text-4xl font-extrabold mb-2 relative"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                    Solid Foundation
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  ></motion.span>
                </span>
                <span className="text-green-400 mx-2">,</span>
              </motion.h2>

              {/* Strong Leadership */}
              <motion.h2
                className="text-white text-3xl md:text-5xl lg:text-4xl font-extrabold relative"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-green-300 via-white to-green-300 bg-clip-text text-transparent">
                    Strong Leadership
                  </span>
                  <motion.span
                    className="absolute -bottom-2 right-0 h-1 bg-gradient-to-l from-green-400 via-green-500 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  ></motion.span>
                </span>
              </motion.h2>

              {/* Decorative Glow Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-transparent to-green-400/20 blur-2xl -z-10"
              ></motion.div>
            </motion.div>

            {/* Decorative Line Bottom */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
            ></motion.div>
          </div>

          {/* <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded text-sm font-medium">2BHK</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded text-sm font-medium">3BHK</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded text-sm font-medium">Duplex</span>
          </motion.div> */}

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
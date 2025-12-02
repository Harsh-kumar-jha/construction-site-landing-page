"use client"

import { motion } from "motion/react"

interface HeroVideoProps {
  videoUrl?: string
  onContactClick: () => void
}

export default function HeroVideo({ videoUrl, onContactClick }: HeroVideoProps) {
  return (
    <div className="relative w-full h-[65vh] overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0 w-full">
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
          {/* Content is commented out as per original */}
        </motion.div>
      </div>
    </div>
  )
}
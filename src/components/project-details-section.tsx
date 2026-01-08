"use client"

import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { useState, useEffect, useRef } from "react"

interface Project {
  id: number
  name: string
  photo: string
  description: string
}

export default function ProjectDetailsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Project data using existing images from assets
  const projects: Project[] = [
    {
      id: 1,
      name: "Amar Instruments LLP",
      photo: "/assets/image-1.jpg",
      description: "Premium residential apartments with modern amenities",
    },
    {
      id: 2,
      name: "Bungalow",
      photo: "/assets/image-2.jpg",
      description: "Luxury high-rise living in the heart of the city",
    },
    {
      id: 3,
      name: "Colourinn Industries PVT LTD",
      photo: "/assets/5.png",
      description: "Exclusive villa community with private gardens",
    },
    {
      id: 4,
      name: "Galson Engineering Service",
      photo: "/assets/WhatsApp%20Image%202025-12-10%20at%2014.04.45_e72ef43c.jpg",
      description: "Modern eco-friendly development with sustainable living spaces"
    },
    {
      id: 5,
      name: "Malbar Industrial Estate",
      photo: "/assets/malbar-industrial-estate.jpeg",
      description: "A well-planned industrial estate offering robust infrastructure, efficient layouts, and easy connectivity, ideal for manufacturing and logistics operations."
    },
    {
      id: 6,
      name: "Shivlakshi Arcade",
      photo: "/assets/WhatsApp%20Image%202026-01-08%20at%209.15.35%20PM.jpeg",
      description: "A modern commercial arcade designed for retail and office spaces, featuring contemporary architecture, high visibility, and convenient access for businesses."
    },
    {
      id: 7,
      name: "Vinayak-4",
      photo: "/assets/WhatsApp%20Image%202026-01-08%20at%209.15.36%20PM-cover.jpeg",
      description: "A premium residential and mixed-use development focused on comfort, smart planning, and a balanced urban lifestyle with essential amenities."
    },
    {
      id: 8,
      name: "VR ECO Recycling",
      photo: "/assets/WhatsApp%20Image%202026-01-08%20at%209.15.36%20PM-new.jpeg",
      description: "An eco-conscious industrial facility dedicated to recycling and sustainable waste management, built to support environmental responsibility and green practices."
    },
    {
      id: 9,
      name: "RK Industrial Estate",
      photo: "/assets/WhatsApp%20Image%202026-01-08%20at%209.15.36%20PM.jpeg",
      description: "A strategically located industrial estate providing scalable spaces, modern utilities, and seamless transportation access for growing enterprises."
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isHovering) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isHovering, currentIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="w-full py-20 bg-linear-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Our Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of exceptional construction projects that define excellence
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main Carousel */}
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                {/* Project Image with Parallax Effect */}
                <motion.div
                  className="relative w-full h-[600px] md:h-[700px] bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={projects[currentIndex].photo}
                    alt={projects[currentIndex].name}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Animated Decorative Elements */}
                  <motion.div
                    className="absolute top-8 right-8 w-24 h-24 border-2 border-white/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute bottom-32 left-8 w-16 h-16 border-2 border-white/10 rounded-lg"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Project Details Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="max-w-3xl"
                    >
                      <motion.div
                        className="flex items-center gap-4 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span className="text-white text-sm font-semibold">
                            Project #{String(projects[currentIndex].id).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="h-px flex-1 bg-linear-to-r from-white/50 to-transparent max-w-xs" />
                      </motion.div>

                      <motion.h3
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {projects[currentIndex].name}
                      </motion.h3>

                      <motion.p
                        className="text-lg md:text-xl text-white/90 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        {projects[currentIndex].description}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Modern Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 group z-20"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isHovering ? 1 : 0.7, x: 0 }}
              transition={{ duration: 0.3 }}
              aria-label="Previous project"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 p-4 rounded-full shadow-xl transition-all duration-300">
                <ChevronLeft className="text-white" size={28} />
              </div>
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 group z-20"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isHovering ? 1 : 0.7, x: 0 }}
              transition={{ duration: 0.3 }}
              aria-label="Next project"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 p-4 rounded-full shadow-xl transition-all duration-300">
                <ChevronRight className="text-white" size={28} />
              </div>
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlayPause}
              className="absolute bottom-6 right-6 group z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 p-3 rounded-full shadow-xl transition-all duration-300">
                {isPlaying ? (
                  <Pause className="text-white" size={20} fill="white" />
                ) : (
                  <Play className="text-white" size={20} fill="white" />
                )}
              </div>
            </motion.button>

            {/* Progress Bar */}
            {isPlaying && !isHovering && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: "linear" }}
                key={currentIndex}
              >
                <div className="h-full bg-primary" style={{ width: '100%' }} />
              </motion.div>
            )}
          </div>

          {/* Modern Progress Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
            </motion.button>

            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to project ${ index + 1 }`}
                >
                  {index === currentIndex ? (
                    <motion.div
                      layoutId="activeIndicator"
                      className="w-12 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  ) : (
                    <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50 rounded-full transition-colors" />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>

          {/* Project Counter */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground font-medium">
              <span className="text-primary font-bold text-lg">{String(currentIndex + 1).padStart(2, '0')}</span>
              {" / "}
              <span className="text-gray-400">{String(projects.length).padStart(2, '0')}</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface Project {
  id: number
  name: string
  photo: string
  description: string
}

export default function ProjectDetailsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

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
    <section className="w-full py-20 bg-gradient-to-b from-secondary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of exceptional construction projects
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
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Project Image */}
                <div className="relative w-full h-[500px] md:h-[600px] bg-secondary/10">
                  <Image
                    src={projects[currentIndex].photo}
                    alt={projects[currentIndex].name}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Project Details Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="inline-block bg-primary/80 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Project #{projects[currentIndex].id}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold mb-4">
                        {projects[currentIndex].name}
                      </h3>
                      <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                        {projects[currentIndex].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${ index === currentIndex
                  ? "bg-primary w-12 h-3"
                  : "bg-primary/30 hover:bg-primary/50 w-3 h-3"
                  }`}
                aria-label={`Go to project ${ index + 1 }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${ index === currentIndex
                  ? "ring-4 ring-primary scale-105"
                  : "opacity-60 hover:opacity-100"
                  }`}
                whileHover={{ scale: index === currentIndex ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-full h-32 md:h-40">
                  <Image
                    src={project.photo}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm font-semibold truncate">
                    {project.name}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

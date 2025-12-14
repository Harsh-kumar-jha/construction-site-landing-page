"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<"exterior" | "interior">("exterior")
  const [currentImage, setCurrentImage] = useState(0)

  const images = {
    exterior: [
      { src: "/assets/image-1.jpg", alt: "Building Exterior View 1" },
      { src: "/assets/image-2.jpg", alt: "Building Exterior View 2" },
      { src: "/assets/5.png", alt: "Property Layout View" },
    ],
    interior: [
      { src: "/assets/WhatsApp Image 2025-12-10 at 14.04.45_e72ef43c.jpg", alt: "Interior Space" },
      { src: "/assets/image-1.jpg", alt: "Interior Detail" },
      { src: "/assets/image-2.jpg", alt: "Interior Layout" },
    ]
  }

  const currentImages = activeTab === "exterior" ? images.exterior : images.interior

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  return (
    <section id="gallery" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            See what space really looks like
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => { setActiveTab("exterior"); setCurrentImage(0); }}
            className={`px-8 py-3 rounded-lg font-medium transition-all ${ activeTab === "exterior"
              ? "bg-secondary text-white"
              : "bg-gray-100 text-primary hover:bg-gray-200"
              }`}
          >
            Exterior
          </button>
          <button
            onClick={() => { setActiveTab("interior"); setCurrentImage(0); }}
            className={`px-8 py-3 rounded-lg font-medium transition-all ${ activeTab === "interior"
              ? "bg-secondary text-white"
              : "bg-gray-100 text-primary hover:bg-gray-200"
              }`}
          >
            Interior
          </button>
        </div>

        {/* Gallery Carousel */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-4/3 bg-gray-200 rounded-lg overflow-hidden">
            <motion.div
              key={`${ activeTab }-${ currentImage }`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={currentImages[currentImage].src}
                alt={currentImages[currentImage].alt}
                fill
                className="object-cover"
                priority={currentImage === 0}
              />
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>

          {/* Image Counter */}
          <div className="text-center mt-4 text-muted-foreground">
            {currentImage + 1} / {currentImages.length}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { Building2, Clock, MapPin, Phone, Hammer, Award } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

interface AboutSectionProps {
  images?: string[]
}

const aboutData = {
  name: "Hitesh bhai and Harshil bhai",
  yearsExperience: "15+ Years",
  serviceArea: "Shed no. B/55 First Floor, Krishna Estate, Nr. Krishna way Bridge, Kathwada singgarva road. Kathwada - 342430 Ahmedabad",
  phone: "+91 9712902617",
  anotherPhone: "+91 9624117814",
  description:
    "We specialize in high-quality residential, commercial, and industrial construction projects. Our team is committed to delivering excellence, safety, and reliability on every project.",
  specialties: [
    {
      icon: Building2,
      title: "Residential Construction",
      description: "Custom homes and renovations",
    },
    {
      icon: Hammer,
      title: "Commercial Projects",
      description: "Office buildings and retail spaces",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Licensed and insured professionals",
    },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultImages = [
    "../../assets/image-1.jpg",
    "../../assets/image-2.jpg",
  ]

  const displayImages = defaultImages

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [displayImages.length]);


  return (
    <section className="w-full py-20 bg-secondary/5" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <motion.div
                className="flex"
                animate={{ x: `-${ currentIndex * 100 }%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {displayImages.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt=""
                    className="w-full flex-shrink-0 object-cover aspect-square"
                  />
                ))}
              </motion.div>

              {/* Buttons */}
              <button
                onClick={() => setCurrentIndex((currentIndex - 1 + displayImages.length) % displayImages.length)}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
              >
                ‹
              </button>

              <button
                onClick={() => setCurrentIndex((currentIndex + 1) % displayImages.length)}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
              >
                ›
              </button>
            </div>
          </motion.div>


          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{aboutData.name}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{aboutData.description}</p>
            </motion.div>

            <motion.div className="grid grid-cols-1 gap-4" variants={containerVariants}>
              {[
                {
                  icon: Clock,
                  label: "Experience",
                  value: aboutData.yearsExperience,
                },
                {
                  icon: MapPin,
                  label: "Service Area",
                  value: aboutData.serviceArea,
                },
                {
                  icon: Phone,
                  label: "Contact",
                  value: aboutData.phone + ", " + aboutData.anotherPhone,
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <Icon className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-xl font-semibold text-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div className="space-y-3" variants={itemVariants}>
              <h3 className="text-lg font-semibold text-foreground">Our Specialties</h3>
              <div className="space-y-2">
                {aboutData.specialties.map((specialty, index) => {
                  const Icon = specialty.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground p-2 rounded-lg hover:bg-primary/5 transition-colors"
                      whileHover={{ x: 8 }}
                      variants={itemVariants}
                    >
                      <Icon size={18} className="text-accent flex-shrink-0" />
                      <span>{specialty.title}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

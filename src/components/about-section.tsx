"use client"

import { Building2, Clock, MapPin, Phone, Hammer, Award } from "lucide-react"
import { motion } from "motion/react"

interface AboutSectionProps {
  images?: string[]
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

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-secondary/5" id="about">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section: Image Left + Content Right */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Top Left Image */}
          <motion.div
            className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <img
              src="../../assets/image-1.jpg"
              alt="Construction site"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Top Right Content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {aboutData.name}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {aboutData.description}
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={containerVariants}>
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
                      <p className="text-lg font-semibold text-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Content Left + Image Right */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Bottom Left Content */}
          <motion.div className="space-y-4 order-2 md:order-1" variants={containerVariants}>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-foreground"
              variants={itemVariants}
            >
              Our Specialties
            </motion.h3>
            <div className="space-y-4">
              {aboutData.specialties.map((specialty, index) => {
                const Icon = specialty.icon
                return (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg hover:bg-primary/5 transition-colors border border-border"
                    variants={itemVariants}
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={24} className="text-accent flex-shrink-0" />
                      <h4 className="text-lg font-semibold text-foreground">{specialty.title}</h4>
                    </div>
                    <p className="text-muted-foreground ml-9">{specialty.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
          >
            <img
              src="../../assets/image-2.jpg"
              alt="Construction project"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
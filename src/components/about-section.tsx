"use client"

import { Building2, Clock, MapPin, Phone, Hammer, Award, Mail } from "lucide-react"
import { motion } from "motion/react"

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
  yearsExperience: "10+ Years",
  serviceArea: "Kathwada, Ahmedabad",
  address: " Shed no. B/55 First Floor, Krishna Estate, Nr. Krishna way Bridge, Kathwada singarva road. Kathwada - 382430",
  phone: "+91 9712902617",
  anotherPhone: "+91 9624117814",
  email: "swaroopinfrabuild6161@gmail.com",
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
    <section className="w-full py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Meet Our Team
          </h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-secondary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {aboutData.name}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutData.description}
            </p>
          </div>
        </motion.div>

        {/* Info Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:border-secondary transition-all"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          >
            <Clock className="text-secondary mx-auto mb-4" size={40} />
            <p className="text-sm text-muted-foreground mb-2">Experience</p>
            <p className="text-2xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {aboutData.yearsExperience}
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:border-secondary transition-all"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          >
            <Phone className="text-secondary mx-auto mb-4" size={40} />
            <p className="text-sm text-muted-foreground mb-2">Contact</p>
            <p className="text-base font-semibold text-primary mb-1">{aboutData.phone}</p>
            <p className="text-base font-semibold text-primary">{aboutData.anotherPhone}</p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:border-secondary transition-all"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          >
            <Mail className="text-secondary mx-auto mb-4" size={40} />
            <p className="text-sm text-muted-foreground mb-2">Email</p>
            <p className="text-sm font-medium text-primary break-words">
              {aboutData.email}
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:border-secondary transition-all"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          >
            <MapPin className="text-secondary mx-auto mb-4" size={40} />
            <p className="text-sm text-muted-foreground mb-2">Location</p>
            <p className="text-base font-semibold text-primary">
              {aboutData.serviceArea}
            </p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              {aboutData.address}
            </p>
          </motion.div>
        </motion.div>

        {/* Specialties Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            variants={itemVariants}
          >
            Our Specialties
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aboutData.specialties.map((specialty, index) => {
              const Icon = specialty.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center border-2 border-gray-200 hover:border-secondary transition-all shadow-sm"
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: "0 15px 40px rgba(0,0,0,0.12)" }}
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {specialty.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {specialty.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
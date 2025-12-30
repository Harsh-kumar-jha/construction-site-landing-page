"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import { motion } from "motion/react"

export default function AddressSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="w-full py-16 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Address */}
            <motion.div
              className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Our Address</h3>
                <p className="text-muted-foreground">
                  SG Highway, Vaishnodev Junction, Ahmedabad
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Phone Numbers</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+919712902617" className="hover:text-primary transition-colors block">
                    +91 9712902617
                  </a>
                  <a href="tel:+919624117814" className="hover:text-primary transition-colors block">
                    +91 9624117814
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Email Address</h3>
                <p className="text-muted-foreground">
                  <a
                    href="mailto:Swaroopinfrabuild6161@gmail.com"
                    className="hover:text-primary transition-colors break-all"
                  >
                    Swaroopinfrabuild6161@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

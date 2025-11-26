"use client"

import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import { motion } from "motion/react"

export default function Footer() {
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

  return (
    <footer className="w-full bg-foreground text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-xl font-bold">BuildCraft</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Quality construction & contract work services for all your building needs.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <motion.a href="#hero" className="hover:text-primary transition-colors" whileHover={{ x: 4 }}>
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a href="#about" className="hover:text-primary transition-colors" whileHover={{ x: 4 }}>
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a href="#contact" className="hover:text-primary transition-colors" whileHover={{ x: 4 }}>
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Renovations</li>
              <li>Interior Finishing</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-white/80">
              <motion.div className="flex items-center gap-2" whileHover={{ x: 4 }}>
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" whileHover={{ x: 4 }}>
                <Mail size={16} />
                <span>info@buildcraft.com</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" whileHover={{ x: 4 }}>
                <MapPin size={16} />
                <span>Metro Area, State</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social & Bottom */}
        <motion.div
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/60 text-sm">&copy; 2025 BuildCraft. All rights reserved.</p>
          <motion.div
            className="flex gap-4 mt-4 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="text-white/60 hover:text-primary transition-colors"
              aria-label="Facebook"
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-white/60 hover:text-primary transition-colors"
              aria-label="Twitter"
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-white/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

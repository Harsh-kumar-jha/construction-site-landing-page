"use client"

import { Menu, X, Phone, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setIsOpen(false)
    }
  }

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Why Us", id: "why-section" },
    { label: "Location", id: "location" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled
        ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-200"
        : "bg-white/95 backdrop-blur-md border-b border-gray-100"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-extrabold text-[#0A2E5C] hover:text-[#154a8a] transition-colors cursor-pointer"
            >
              Swaroop <span className="text-green-500">Infra</span> Build
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 hover:text-green-500 transition-colors font-medium relative group text-[#0A2E5C] cursor-pointer text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden xl:flex items-center gap-4"
          >
            <a
              href="tel:+919712902617"
              className="flex items-center gap-2 text-sm text-[#0A2E5C] hover:text-green-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 97129 02617</span>
            </a>
            <div className="w-px h-6 bg-gray-300"></div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 bg-linear-to-r from-[#0A2E5C] to-[#154a8a] text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Get Quote
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#0A2E5C] hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="pb-4 pt-2 space-y-1 border-t border-gray-200">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-[#0A2E5C] font-medium hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-4 px-4 space-y-3 border-t border-gray-200 mt-2">
                  <a
                    href="tel:+919712902617"
                    className="flex items-center gap-3 text-sm text-[#0A2E5C] hover:text-green-500"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 97129 02617</span>
                  </a>
                  <a
                    href="mailto:Swaroopinfrabuild6161@gmail.com"
                    className="flex items-center gap-3 text-sm text-[#0A2E5C] hover:text-green-500"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-xs break-all">Swaroopinfrabuild6161@gmail.com</span>
                  </a>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection("contact")}
                    className="w-full px-5 py-3 bg-gradient-to-r from-[#0A2E5C] to-[#154a8a] text-white rounded-lg font-medium hover:shadow-lg transition-all"
                  >
                    Get Quote
                  </motion.button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
"use client"

import { Phone, Mail, MapPin, Instagram, MapPinned, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react"
// import { motion } from "motion/react"

export default function Footer() {
  const projects = [
    "Shivlakshi Arcade",
    "ColourInn Industries Pvt Ltd",
    "R.K Industrial Estate",
    "VR Eco Recycling",
    "Amar Instruments LLP",
    "Galson Engineering Services",
    "Malbar Industrial Estate",
    "Vinayak -4"
  ]

  return (
    <footer className="w-full bg-linear-to-br from-[#0A2E5C] via-[#0d3869] to-[#0A2E5C] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* QR Codes Section */}
        <div
        // initial={{ opacity: 0, y: 30 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.6 }}
        // className="mb-16 pb-12 border-b border-white/10"
        >
          {/* <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20"> */}
          {/* Instagram QR */}
          {/* <div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <Instagram className="w-7 h-7 text-green-400" />
                <h3 className="text-2xl font-bold">Instagram</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-2xl transform transition-all hover:shadow-green-500/20">
                <div className="w-52 h-52 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-sm text-center p-4">
                    <Instagram className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                    <p className="font-semibold">Instagram QR</p>
                    <p className="text-xs mt-1">Scan to Follow</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-green-400 font-medium">@_SWAROOP_INFRA_BUILD_</p>
            </div> */}

          {/* Location QR */}
          {/* <div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPinned className="w-7 h-7 text-green-400" />
                <h3 className="text-2xl font-bold">Location</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-2xl transform transition-all hover:shadow-green-500/20">
                <div className="w-52 h-52 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-sm text-center p-4">
                    <MapPinned className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                    <p className="font-semibold">Location QR</p>
                    <p className="text-xs mt-1">Get Directions</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-green-400 font-medium">Scan for Directions</p>
            </div> */}
          {/* </div> */}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-5"
          >
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Swaroop Infra Build
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium property development with excellence and trust in Ahmedabad. Building your dreams with quality and precision.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3 pt-2">
              <a
                // whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                // whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                // whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                // whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Projects Section */}
          <div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              Our Projects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  // whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-green-400 transition-colors cursor-pointer group"
                >
                  <ArrowRight className="w-3 h-3 text-green-500 group-hover:translate-x-1 transition-transform" />
                  <span>{project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                // whileHover={{ x: 5 }}
                href="tel:+919712902617"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-green-400 transition-all group"
              >
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <div>+91 9712902617</div>
                  <div>+91 9624117814</div>
                </div>
              </a>

              <a
                // whileHover={{ x: 5 }}
                href="mailto:Swaroopinfrabuild6161@gmail.com"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-green-400 transition-all group"
              >
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="break-all">Swaroopinfrabuild6161@gmail.com</span>
              </a>

              <div
                // whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-sm text-white/70 hover:text-green-400 transition-all group cursor-pointer"
              >
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <MapPin size={16} />
                </div>
                <span>Shop no. B/55 First Floor, Krishna Estate, Nr. Krishna way Bridge, Kathwada singgarva road. Kathwada - 342430 Ahmedabad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/50 text-sm">
            &copy; 2025 <span className="text-green-400 font-semibold">Swaroop Infra Build</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-green-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
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
        <div
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <div className="space-y-4" >
            <h3 className="text-xl font-bold">BuildCraft</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Quality construction & contract work services for all your building needs.
            </p>
          </div>

          {/* Quick Links */}
          <div >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors cursor-pointer" >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Renovations</li>
              <li>Interior Finishing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div >
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2" >
                <Phone size={16} />
                <span>+91 9712902617,</span>
                <span>+91 9624117814</span>
              </div>
              <div className="flex items-center gap-2" >
                <Mail size={16} />
                <span>swaroopinfrabuild6161@gmail.com</span>
              </div>
              <div className="flex items-center gap-2" >
                <MapPin size={16} />
                <span>
                  Krishna Estate, Nr Krishna way Bridge, Kathwada Singgarva road, Kathwada
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Bottom */}
        <div
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-sm">&copy; 2025 BuildCraft. All rights reserved.</p>
          <div
            className="flex gap-4 mt-4 md:mt-0"
          >
            {/* <a
              href="#"
              className="text-white/60 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-primary transition-colors"
              aria-label="Twitter"


            >
              <Twitter size={20} />
            </a> */}
            <a
              href="https://www.instagram.com/_swaroop_infra_build_?igsh=dG45eWQ0dHF0YXY%3D&utm_source=qr"
              target="_blank"
              className="text-white/60 hover:text-primary transition-colors"
              aria-label="Instagram"


            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

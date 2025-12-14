"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const footerLinks = [
    { label: "Projects", href: "#configurations" },
    { label: "Farmhouse", href: "#gallery" },
    { label: "Legalities", href: "#rera-compliance" },
    { label: "Team", href: "#about" },
    { label: "Forum", href: "#gallery" },
    { label: "Get in touch", href: "#contact" },
  ]

  return (
    <footer className="w-full bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>AMAR INSTRUMENTS LLP</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Premium property development with excellence and trust in Ahmedabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-secondary transition-colors cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Projects</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Swaroop - Girnaar Technopark</li>
              <li>Residential Townships</li>
              <li>Commercial Spaces</li>
              <li>Premium Villas</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Info</h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 shrink-0" />
                <div>
                  <div>+91 9712902617</div>
                  <div>+91 9624117814</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 shrink-0" />
                <span>Swaroopinfrabuild6161@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>
                  SG Highway, Vaishnodev Junction, Ahmedabad
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">&copy; 2025 AMAR INSTRUMENTS LLP. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

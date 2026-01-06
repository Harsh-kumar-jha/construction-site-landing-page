"use client"

import { motion } from "motion/react"
import { MapPin, Clock, Building2, Car } from "lucide-react"

export default function LocationSection() {
  const highlights = [
    {
      icon: <MapPin size={24} />,
      text: "Direct access to SG Road Ring Road & Sarkhej city"
    },
    {
      icon: <Clock size={24} />,
      text: "40 mins to Airport"
    },
    {
      icon: <Building2 size={24} />,
      text: "Surrounded by upcoming residential and hospitals, zones"
    },
    {
      icon: <Car size={24} />,
      text: "Excellent visibility from one of Ahmedabad's busiest corridor"
    }
  ]

  return (
    <section id="location" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Krishna Estate | <span className="text-secondary">Kathwada, Ahmedabad</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A business location that connects everywhere and moves anything.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    {highlight.icon}
                  </div>
                  <p className="text-primary pt-3 font-medium">{highlight.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="relative aspect-4/3 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.234567890123!2d72.6789012!3d23.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sKrishna%20Estate%2C%20Kathwada%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krishna Estate Location Map"
              className="absolute inset-0"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <p className="text-xs text-primary font-medium leading-relaxed">
                Shop no. B/55 First Floor, Krishna Estate, Nr. Krishna way Bridge, Kathwada singgarva road. Kathwada - 342430 Ahmedabad
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

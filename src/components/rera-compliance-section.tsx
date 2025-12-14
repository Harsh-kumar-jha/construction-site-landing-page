"use client"

import { motion } from "motion/react"
import { QrCode, ExternalLink } from "lucide-react"

export default function RERAComplianceSection() {
  return (
    <section id="rera-compliance" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            RERA Compliance
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* QR Code Placeholder */}
              <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <QrCode size={80} className="text-gray-400" />
              </div>

              {/* Details */}
              <div className="flex-1 text-left">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Registration Number</p>
                  <p className="text-3xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    GAJM3544
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground">
                    View Girnar Technopark RERA details
                  </p>
                </div>

                <a
                  href="https://rera.gujarat.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors font-medium"
                >
                  Visit RERA Website
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-muted-foreground">
                This project is registered under RERA Act 2016 and complies with all regulatory requirements.
                Scan the QR code or visit the official RERA website for complete project details.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

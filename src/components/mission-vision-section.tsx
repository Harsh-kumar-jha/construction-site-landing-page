"use client"

import { Target, Eye, TrendingUp } from "lucide-react"
import { motion } from "motion/react"

const cards = [
  {
    icon: Target,
    title: "OUR MISSION",
    description:
      "To deliver high-quality construction solutions by using superior materials, modern construction techniques, and a highly skilled workforce. We are committed to maintaining the highest standards of safety, precision, and workmanship while ensuring timely project completion. Our mission is to build long-lasting structures that meet client expectations and foster trust through transparency, reliability, and consistent quality.",
  },
  {
    icon: Eye,
    title: "OUR VISION",
    description:
      "To become a recognized and reliable name in the construction industry by creating strong, sustainable, and aesthetically sound structures. We aim to contribute to infrastructure development through innovation, integrity, and excellence, while building projects that stand the test of time and add long-term value to our clients and communities.",
  },
  {
    icon: TrendingUp,
    title: "OUR GOAL",
    description:
      "Our goal is to consistently deliver high-quality, durable, and sustainable construction solutions that exceed client expectations. We aim to grow as a reliable and respected construction brand by embracing innovation, maintaining the highest standards of workmanship, and building long-term partnerships based on trust, integrity, and excellence.",
  },
]

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#0A2E5C] mb-3">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-[#0A2E5C] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Card Header with Icon */}
                <div className="bg-gradient-to-r from-[#0A2E5C] to-[#154a8a] p-6 flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-16 h-16 text-white" />
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0A2E5C] mb-4 flex items-center gap-2">
                    {card.title}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      className="h-0.5 bg-gradient-to-r from-[#0A2E5C] to-transparent flex-1"
                    ></motion.div>
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {card.description}
                  </p>
                </div>

                {/* Decorative Bottom Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="h-1 bg-gradient-to-r from-[#0A2E5C] via-[#154a8a] to-[#0A2E5C] origin-left"
                ></motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

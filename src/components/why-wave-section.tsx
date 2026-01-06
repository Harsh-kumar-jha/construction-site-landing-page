"use client"

import { motion } from "motion/react"
import { Users, Award, Clock, DollarSign, Headphones } from "lucide-react"

const reasons = [
  {
    number: "01",
    icon: Users,
    title: "EXPERIENCED TEAM",
    description:
      "Our skilled and experienced team brings years of industry expertise, ensuring precision, reliability, and excellence in every project we undertake.",
  },
  {
    number: "02",
    icon: Award,
    title: "QUALITY MATERIALS",
    description:
      "We use only certified, high-quality materials to deliver strong, durable, and long-lasting structures that meet the highest standards.",
  },
  {
    number: "03",
    icon: Clock,
    title: "ON-TIME COMPLETION",
    description:
      "With effective planning and efficient execution, we are committed to completing every project on schedule without compromising on quality.",
  },
  {
    number: "04",
    icon: DollarSign,
    title: "TRANSPARENT COSTING",
    description:
      "We believe in complete transparency. Our pricing is clear and honest, with no hidden costs, giving our clients total confidence and trust.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "AFTER-WORK SUPPORT",
    description:
      "Our relationship doesn't end at project handover. We provide reliable post-completion support and assistance to ensure long-term satisfaction.",
  },
]

export default function WhyWaveSection() {
  return (
    <section id="why-section" className="w-full py-16 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-[#0A2E5C] flex items-center gap-3">
            <span className="text-green-500 text-5xl">▶</span>
            WHY <span className="font-extrabold">CHOOSE US</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 h-1 bg-gradient-to-r from-[#0A2E5C] to-gray-300 origin-left"
            ></motion.div>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card Content */}
                <div className="p-6 relative">
                  {/* Large Number in Background */}
                  <div className="absolute -right-4 -top-2 text-8xl font-extrabold text-gray-100 group-hover:text-green-50 transition-colors duration-300">
                    {reason.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 mb-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0A2E5C] to-[#154a8a] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0A2E5C] mb-3 relative z-10 tracking-tight">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-justify relative z-10">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="h-1 bg-gradient-to-r from-green-500 via-[#0A2E5C] to-green-500 origin-left"
                ></motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Factory, Building2, Home } from "lucide-react"
import { motion } from "motion/react"

const services = [
  {
    icon: Factory,
    title: "INDUSTRIAL PROJECTS",
    description:
      "We specialize in constructing industrial facilities such as warehouses, manufacturing units, and industrial sheds. Our team focuses on structural strength, safety compliance, efficient layouts, and timely project delivery. Using high-quality materials and modern construction techniques, we ensure long-lasting and high-performance industrial infrastructure.",
    bgColor: "from-[#0A2E5C] to-[#0d3869]",
  },
  {
    icon: Building2,
    title: "COMMERCIAL PROJECTS",
    description:
      "Our commercial construction services include offices, shopping complexes, showrooms, and business spaces. We combine smart planning, modern architecture, and durable construction methods to deliver cost-effective and aesthetically pleasing structures. Every project is executed with attention to quality, functionality, and aesthetics.",
    bgColor: "from-[#0A2E5C] to-[#0d3869]",
  },
  {
    icon: Home,
    title: "RESIDENTIAL CONSTRUCTION",
    description:
      "We offer end-to-end residential construction services, including independent houses, apartments, and housing projects. From planning to finishing, we focus on quality craftsmanship, reliable materials, and customer satisfaction to create homes that are safe, comfortable, and built to last.",
    bgColor: "from-[#0A2E5C] to-[#0d3869]",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12">
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
            OUR <span className="font-extrabold">SERVICE</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 h-1 bg-gradient-to-r from-[#0A2E5C] to-gray-300 origin-left"
            ></motion.div>
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-0">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Card Container */}
                <div
                  className={`flex flex-col ${ isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center gap-0 overflow-hidden`}
                >
                  {/* Icon Section */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full lg:w-1/3 bg-gradient-to-br ${ service.bgColor } py-12 flex items-center justify-center relative`}
                  >
                    {/* Circular Background */}
                    <div className="relative">
                      <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{ scale: 1, rotate: 360 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                        className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl"
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-16 h-16 text-green-500" strokeWidth={2.5} />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="w-full lg:w-2/3 bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 border-t-4 border-gray-200"
                  >
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      className="text-2xl lg:text-3xl font-bold text-[#0A2E5C] mb-4 tracking-tight"
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      className="text-gray-700 leading-relaxed text-justify"
                    >
                      {service.description}
                    </motion.p>
                  </motion.div>
                </div>

                {/* Divider Line (except for last item) */}
                {index < services.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                    className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent origin-center"
                  ></motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

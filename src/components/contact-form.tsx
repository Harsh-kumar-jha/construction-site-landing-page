"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "motion/react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    workType: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const workTypes = [
    "Residential Construction",
    "Commercial Construction",
    "Industrial Construction",
    "Other",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          contractorEmail: "contractor@example.com",
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({
          name: "",
          phone: "",
          email: "",
          workType: "",
          message: "",
        })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError("Failed to send request. Please try again or contact us directly.")
      }
    } catch (err) {
      setError("An error occurred. Please try again later.")
      console.error("Form submission error:", err)
    } finally {
      setLoading(false)
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

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

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" variants={formVariants}>
            Contact Us
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground" variants={formVariants}>
            Fill out the form below and we'll get back to you with a free quote
          </motion.p>
        </motion.div>

        {success && (
          <motion.div
            className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className="text-green-600 shrink-0" size={24} />
            <div>
              <p className="font-semibold text-green-900">Your request has been submitted!</p>
              <p className="text-green-800 text-sm">We'll review your project details and contact you soon.</p>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <AlertCircle className="text-red-600 shrink-0" size={24} />
            <div>
              <p className="font-semibold text-red-900">Error</p>
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-8 rounded-lg border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Name */}
          <motion.div variants={formVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground cursor-pointer"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Phone */}
          <motion.div variants={formVariants}>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number
            </label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(555) 123-4567"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground cursor-pointer"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={formVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground cursor-pointer"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Work Type */}
          <motion.div variants={formVariants}>
            <label htmlFor="workType" className="block text-sm font-medium text-foreground mb-2">
              Type of Work
            </label>
            <motion.select
              id="workType"
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground cursor-pointer"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <option value="">Select a work type...</option>
              {workTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </motion.select>
          </motion.div>

          {/* Message */}
          <motion.div variants={formVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Project Details / Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none cursor-pointer"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
            variants={formVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
                Sending...
              </>
            ) : (
              <>
                <Mail size={20} />
                Send Request
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

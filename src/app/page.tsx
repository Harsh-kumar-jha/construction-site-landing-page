"use client"

import { useState } from "react"
import Header from "../components/header"
import HeroVideo from "../components/hero-video"
import AboutSection from "../components/about-section"
import CTASection from "../components/cta-section"
import ContactForm from "../components/contact-form"
import Footer from "../components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <main className="w-full">
      <Header />

      <HeroVideo onContactClick={() => scrollToSection("contact")} />

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <section id="cta" className="w-full">
        <CTASection onContactClick={() => scrollToSection("contact")} />
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="w-full">
        <ContactForm />
      </section>

      <Footer />
    </main>
  )
}

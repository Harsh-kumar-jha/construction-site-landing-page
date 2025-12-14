"use client"

import { useState } from "react"
import Header from "../components/header"
import HeroVideo from "../components/hero-video"
import TaglineSection from "../components/tagline-section"
import ConfigurationsSection from "../components/configurations-section"
import WhyWaveSection from "../components/why-wave-section"
import SalientFeaturesSection from "../components/salient-features-section"
import GallerySection from "../components/gallery-section"
import LocationSection from "../components/location-section"
import RERAComplianceSection from "../components/rera-compliance-section"
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

      {/* Hero Section */}
      <HeroVideo onContactClick={() => scrollToSection("contact")} />

      {/* Tagline Section */}
      <TaglineSection />

      {/* Configurations Section */}
      <ConfigurationsSection />

      {/* Why Wave Section */}
      <WhyWaveSection />

      {/* Salient Features Section */}
      <SalientFeaturesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Location Section */}
      <LocationSection />

      {/* RERA Compliance Section */}
      <RERAComplianceSection />

      {/* About Section (Team) */}
      <section id="about" className="w-full">
        <AboutSection />
      </section>

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


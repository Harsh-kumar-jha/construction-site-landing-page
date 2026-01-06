"use client"

import { useState } from "react"
import Header from "../components/header"
import AddressSection from "../components/address-section"
import ProjectDetailsSection from "../components/project-details-section"
import HeroVideo from "../components/hero-video"
import TaglineSection from "../components/tagline-section"
import ConfigurationsSection from "../components/configurations-section"
import WhyWaveSection from "../components/why-wave-section"
import SalientFeaturesSection from "../components/salient-features-section"
import LocationSection from "../components/location-section"
import AboutSection from "../components/about-section"
import ServicesSection from "../components/services-section"
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
      <section id="hero" className="w-full">
        <HeroVideo onContactClick={() => scrollToSection("contact")} />
      </section>

      {/* Address Section */}
      <AddressSection />

      {/* Project Details Section */}
      <ProjectDetailsSection />

      {/* Tagline Section */}
      {/* <TaglineSection /> */}

      {/* Configurations Section */}
      {/* <ConfigurationsSection /> */}

      {/* Why Choose Us Section */}
      <WhyWaveSection />

      {/* Salient Features Section */}
      {/* <SalientFeaturesSection /> */}

      {/* Location Section */}
      <section id="location" className="w-full">
        <LocationSection />
      </section>

      {/* About Section (Team) */}
      <section id="about" className="w-full">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services" className="w-full">
        <ServicesSection />
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


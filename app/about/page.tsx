"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ChairmanMessage from "@/components/chairman-message"
import AchievementsSection from "@/components/achievements-section"
import ClientsSection from "@/components/clients-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function AboutPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="perspective-1000"
    >
      {/* Hero Section */}
      <motion.section
        className="relative h-[200px] md:h-[250px]"
        initial={{ rotateX: 10 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about%20us.jpg-tL4Wk0qIChf4QbOi9sgz90anze1BRT.jpeg"
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 font-['Poppins']"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.div
            className="h-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          ></motion.div>
        </div>
      </motion.section>

      {/* About Content */}
      <motion.section
        className="py-16 sm:py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch gap-8 sm:gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl h-full">
                <Image
                  src="/images/service1.jpg"
                  alt="ATA CONSTRUCTIONS"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-[#00aee7] h-full flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#132d4c] mb-6 font-['Poppins']">
                  ATA CONSTRUCTIONS PVT LTD
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-[#00aee7] mb-5 sm:mb-6"></div>

                <p className="text-gray-700 mb-6 leading-relaxed font-['Roboto']">
                  ATA CONSTRUCTIONS PVT LTD is a professionally managed company catering to the growing demand in the
                  Delhi market for reliable construction services. The ongoing construction boom and continuous
                  expansion of various entities have fueled the growth of both the industry and our company.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed font-['Roboto']">
                  At ATA CONSTRUCTIONS PVT LTD, we adhere to stringent quality control systems and safety policies. Our
                  vision for growth is centered on delivering superior quality, innovation, and integrity. Within this
                  framework, we assure all our clients sustainable, environmentally friendly, and integrated solutions,
                  driven by our commitment to excellence and continuous development.
                </p>

                <div className="mt-auto">
                  <Button
                    size="lg"
                    className="bg-[#00aee7] hover:bg-[#132d4c] text-white px-8 font-['Poppins']"
                    onClick={() => document.getElementById("quotation-form-trigger")?.click()}
                  >
                    Get Quotation
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Chairman Message Section */}
      <ChairmanMessage />

      {/* Company Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#132d4c] mb-6 font-['Poppins']">Company Information</h3>
            <div className="w-16 h-1 bg-[#00aee7] mb-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-[#132d4c] mb-4 font-['Poppins']">Address</h4>
                <p className="text-gray-700 mb-6 font-['Roboto']">
                  C-76, Ground Floor, Abul Fazal Enclave-I,
                  <br />
                  (Near Axis Bank ATM), Okhla, Jamia Nagar,
                  <br />
                  New Delhi-110025
                </p>

                <h4 className="text-xl font-semibold text-[#132d4c] mb-4 font-['Poppins']">Contact</h4>
                <p className="text-gray-700 font-['Roboto']">
                  Phone:{" "}
                  <a href="tel:+918743881877" className="text-[#00aee7] hover:underline">
                    +91 8743881877
                  </a>
                  ,{" "}
                  <a href="tel:+919891561318" className="text-[#00aee7] hover:underline">
                    +91 9891561318
                  </a>
                  ,{" "}
                  <a href="tel:+917065425011" className="text-[#00aee7] hover:underline">
                    +91 7065425011
                  </a>
                  <br />
                  Email:{" "}
                  <a href="mailto:constructionsata@gmail.com" className="text-[#00aee7] hover:underline">
                    constructionsata@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#132d4c] mb-4 font-['Poppins']">Services</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 font-['Roboto']">
                  <li>Civil & Structural Construction</li>
                  <li>Internal & External Finishing</li>
                  <li>External Development</li>
                  <li>Civil Construction</li>
                  <li>Interior Works</li>
                  <li>Turnkey Projects</li>
                  <li>Plumbing & Firefighting Works</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </motion.div>
  )
}

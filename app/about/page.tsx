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

                <p className="text-gray-700 mb-6 leading-relaxed font-['Roboto'] text-justify">
                  At ATA Constructions Pvt. Ltd., our vision is to be recognized as a leading force in the construction and interior industry—renowned for our integrity, innovation, and commitment to excellence.
                  We aspire to shape the future of infrastructure by delivering world-class civil, structural, and turnkey solutions that not only meet but exceed client expectations. Our goal is to consistently elevate the standards of quality, sustainability, and efficiency in every project we undertake.
                  We envision a company where design meets durability, where every structure tells a story of craftsmanship and care, and where our clients find lasting value and trust.
                </p>

                <div className="text-gray-700 leading-relaxed font-['Roboto'] text-justify">
                  <p className="mb-4">
                    <strong>Our Core Values</strong><br />
                    At ATA Constructions Pvt. Ltd., our values are the foundation of everything we build. They guide our decisions, define our culture, and reflect our commitment to excellence.
                  </p>

                  <ul className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Integrity:</strong> We uphold the highest standards of honesty and ethics.
                    </li>
                    <li>
                      <strong>Quality:</strong> We never compromise on quality.
                    </li>
                    <li>
                      <strong>Innovation:</strong> We embrace change and seek innovative solutions.
                    </li>
                    <li>
                      <strong>Customer-Centric Approach:</strong> We listen, understand, and customize solutions.
                    </li>
                    <li>
                      <strong>Teamwork:</strong> Our diverse team works together.
                    </li>
                    <li>
                      <strong>Sustainability:</strong> We are committed to green development.
                    </li>
                    <li>
                      <strong>Safety:</strong> We prioritize the safety of our team and clients.
                    </li>
                  </ul>
                </div>

                <div className="mt-auto pt-6">
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

      {/* Company Info Section - Updated Background and Centered Text */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-blue-100 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-[#132d4c] mb-6 font-['Poppins']">Company Information</h3>
            <div className="w-16 h-1 bg-[#00aee7] mb-6 mx-auto"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              <div>
                <h4 className="text-xl font-semibold text-[#132d4c] mb-4 font-['Poppins']">Address</h4>
                <p className="text-gray-700 mb-6 font-['Roboto']">
                  C-76, Ground Floor, Abul Fazal Enclave-I,<br />
                  (Near Axis Bank ATM), Okhla, Jamia Nagar,<br />
                  New Delhi-110025
                </p>

                <h4 className="text-xl font-semibold text-[#132d4c] mb-4 font-['Poppins']">Contact</h4>
                <p className="text-gray-700 font-['Roboto']">
                  Phone:{" "}
                  <a href="tel:+918743881877" className="text-[#00aee7] hover:underline">+91 8743881877</a>,{" "}
                  <a href="tel:+919891561318" className="text-[#00aee7] hover:underline">+91 9891561318</a>,{" "}
                  <a href="tel:+917065425011" className="text-[#00aee7] hover:underline">+91 7065425011</a><br />
                  Email:{" "}
                  <a href="mailto:constructionsata@gmail.com" className="text-[#00aee7] hover:underline">
                    constructionsata@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#132d4c] mb-4 font-['Poppins']">Services</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 font-['Roboto'] text-left inline-block">
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

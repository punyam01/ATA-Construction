"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const portfolioItems = [
  {
    category: "CIVIL & STRUCTURAL CONSTRUCTION",
    description:
      "We provide comprehensive civil and structural construction services for residential, commercial, and industrial projects.",
    images: ["/images/civilcons2.png", "/images/civilcons1.jpg", "/images/civilcons3.jpg", "/images/civilcons4.jpeg", "/images/civilcons5.jpeg", "/images/civilcons6.jpeg"],
  },
  {
    category: "INTERNAL & EXTERNAL FINISHING",
    description:
      "Our finishing services ensure high-quality interior and exterior aesthetics for all types of buildings.",
    images: ["/images/interior4.jpg", "/images/interior5.jpg", "/images/interior3.jpg", "/images/interior6.jpeg", "/images/inerior7.jpeg", "/images/interior8.jpeg"],
  },
  {
    category: "EXTERNAL DEVELOPMENT",
    description:
      "We offer complete external development solutions including landscaping, drainage systems, and site improvements.",
    images: ["/images/ext1.jpg", "/images/ext4.jpg", "/images/ext2.jpg", "/images/ext6.jpeg", "/images/ext5.jpeg", "/images/ext7.jpeg"],
  },
  {
    category: "CIVIL CONSTRUCTION",
    description:
      "Our civil construction services cover everything from foundation work to structural framing and concrete pouring.",
    images: ["/images/const1.jpg", "/images/const2.jpg", "/images/const3.jpg", "/images/const4.jpeg", "/images/const5.jpeg", "/images/const6.jpeg"],
  },
  {
    category: "INTERIOR WORKS",
    description:
      "Our interior services include custom cabinetry, shelving, and woodwork to enhance the functionality and aesthetics of your living spaces.",
    images: ["/images/interior1.jpg", "/images/interior2.jpg", "/images/interior9.jpeg", "/images/interior10.jpeg", "/images/interior11.jpeg", "/images/interior12.jpeg"],
  },
  {
    category: "TURNKEY PROJECTS",
    description: "We offer end-to-end project management and execution for turnkey construction projects.",
    images: ["/images/tur1.jpg", "/images/tur3.jpg", "/images/tur2.jpg", "/images/turn4.jpeg", "/images/turn5.jpeg", "/images/serv7.jpeg"],
  },
  {
    category: "PLUMBING & FIREFIGHTING WORKS",
    description: "Our specialized team handles all plumbing and firefighting system installations with expertise.",
    images: ["/images/plum4.jpg", "/images/plum3.jpg", "/images/plum2.jpg", "/images/plum5.jpeg", "/images/plum6.jpeg", "/images/serv8.webp"],
  },
]

export default function PortfolioPage() {
  const [currentSlides, setCurrentSlides] = useState<{ [key: string]: number }>(
    portfolioItems.reduce((acc, item) => {
      acc[item.category] = 0
      return acc
    }, {} as { [key: string]: number })
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const nextSlide = (category: string) => {
    const maxIndex = portfolioItems.find((item) => item.category === category)?.images.length || 0
    setCurrentSlides((prev) => ({
      ...prev,
      [category]: prev[category] === maxIndex - 1 ? 0 : prev[category] + 1,
    }))
  }

  const prevSlide = (category: string) => {
    const maxIndex = portfolioItems.find((item) => item.category === category)?.images.length || 0
    setCurrentSlides((prev) => ({
      ...prev,
      [category]: prev[category] === 0 ? maxIndex - 1 : prev[category] - 1,
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="perspective-1000"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#132d4c] mb-4 font-['Poppins']">Our Work</h2>
            <div className="w-24 h-1 bg-[#00aee7] mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto font-['Roboto']">
              Explore our portfolio showcasing our expertise across various construction and renovation projects.
            </p>
          </div>

          <div className="space-y-20">
            {portfolioItems.map((item) => (
              <div key={item.category} className="mb-16">
                <h3 className="text-2xl font-bold text-[#132d4c] mb-4">{item.category}</h3>
                <p className="text-gray-700 mb-8 max-w-3xl">{item.description}</p>

                <div className="relative">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <div className="relative h-[200px] md:h-[350px]">
                      {item.images.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            index === currentSlides[item.category] ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {image ? (
                            <Image
                              src={image}
                              alt={`${item.category} - Image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gray-300"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation buttons */}
                  <button
                    onClick={() => prevSlide(item.category)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => nextSlide(item.category)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {item.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlides((prev) => ({ ...prev, [item.category]: index }))}
                        className={`w-3 h-3 rounded-full ${
                          index === currentSlides[item.category] ? "bg-white" : "bg-white/50"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const projects = [
    {
      id: 1,
      title: "Construction of Civil, Internal Plaster, IPS Flooring",
      description:
        "Construction of Civil, Internal Plaster, IPS Flooring, Internal finishing, Door Frame & Shutter fixing, Kota Stone Fixing.",
      images: ["/images/service1.jpg", "/images/service2.jpg"],
      category: "Commercial",
      client: "PARAS",
      amount: "12,17,245 - 70,87,391",
      year: "2012 TO 2015",
      contactPerson: "Mr. SP Thakur (DPM), Mr. CS Azad (PM)",
      area: "70,000 Sqft",
    },
    {
      id: 2,
      title: "Renovation and Rectification of EWS",
      description: "Renovation and Rectification of EWS at Mahindra Chloris Faridabad",
      images: ["/images/service3.jpg", "/images/service4.jpg"],
      category: "Residential",
      client: "MLDL",
      amount: "19,00,641",
      year: "2016",
      contactPerson: "Mr. Raisuddin (GM)",
      area: "24000 sqft",
    },
    {
      id: 3,
      title: "Road & Boundary wall works",
      description:
        "Road & Boundary wall works, Rectification of Tower J&K, House Keeping, MS work and Internal Painting work at Mahindra AURA",
      images: ["/images/service5.jpg", "/images/service1.jpg"],
      category: "Infrastructure",
      client: "MLDL",
      amount: "56,11,349",
      year: "2017",
      contactPerson: "Mr. Raisuddin (GM), Mr. Vijesh (PM)",
      area: "43,000 sqft",
    },
    {
      id: 4,
      title: "Application of SKK painting system",
      description:
        "Application of SKK painting system at THGG site, TATA Housing Gurgaon Gateway Phase-1, village Bajhera, sec-112, Gurgaon",
      images: ["/images/service2.jpg", "/images/service3.jpg"],
      category: "Residential",
      client: "JMC TATA",
      amount: "1,09,01,000",
      year: "2017",
      contactPerson: "Mr. Manmohan (AGM), Mr. Jha (Senior engg)",
      area: "1,00,000 Sqft",
    },
    {
      id: 5,
      title: "Supply, Installation & Painting of Podium Facade",
      description: "Supply, Installation & Painting of Podium Facade of Gurgaon Gateway",
      images: ["/images/service4.jpg", "/images/service5.jpg"],
      category: "Commercial",
      client: "TATA",
      amount: "12,32,181",
      year: "2017",
      contactPerson: "Mr. Manmohan (AGM)",
      area: "13 MT",
    },
    {
      id: 6,
      title: "Internal Renovation Works",
      description: "Internal Renovation Works at Stanza Living Haus Khas, New Delhi",
      images: ["/images/service1.jpg", "/images/service2.jpg"],
      category: "Residential",
      client: "INDIVIDUAL",
      amount: "20,000,00",
      year: "2018",
      contactPerson: "Mr. Ravi Raj",
      area: "2,250 Sqft",
    },
    {
      id: 7,
      title: "Execution of Civil, Structure & Internal Finishing works",
      description: "Execution of Civil, Structure & Internal Finishing works of D-28, Sector-105 Noida",
      images: ["/images/service3.jpg", "/images/service4.jpg"],
      category: "Residential",
      client: "INDIVIDUAL",
      amount: "2,60,39,200",
      year: "2017-2018",
      contactPerson: "Mr. Wasif",
      area: "11,836 sqft",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setCurrentImage(0)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setCurrentImage(0)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projects[currentProject].images.length)
  }

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + projects[currentProject].images.length) % projects[currentProject].images.length,
    )
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#132d4c] mb-8">Our Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Image Carousel - Appears first on mobile */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-xl h-[300px] md:h-full"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            {projects[currentProject].images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${projects[currentProject].title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Image Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {projects[currentProject].images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Project Details - Appears second on mobile */}
          <motion.div
            className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-4 inline-block px-3 py-1 bg-[#00aee7] text-white text-sm rounded-full">
              {projects[currentProject].category}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#132d4c] mb-4">{projects[currentProject].title}</h3>
            <p className="text-gray-700 mb-6">{projects[currentProject].description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-[#132d4c]">Client:</p>
                <p className="text-gray-700">{projects[currentProject].client}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#132d4c]">Amount:</p>
                <p className="text-gray-700">{projects[currentProject].amount}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#132d4c]">Year:</p>
                <p className="text-gray-700">{projects[currentProject].year}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#132d4c]">Area:</p>
                <p className="text-gray-700">{projects[currentProject].area}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-semibold text-[#132d4c]">Contact Person:</p>
                <p className="text-gray-700">{projects[currentProject].contactPerson}</p>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="flex justify-between">
              <button
                onClick={prevProject}
                className="flex items-center text-[#132d4c] hover:text-[#00aee7] transition-colors"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous Project
              </button>
              <button
                onClick={nextProject}
                className="flex items-center text-[#132d4c] hover:text-[#00aee7] transition-colors"
              >
                Next Project
                <ChevronRight className="h-5 w-5 ml-1" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentProject(index)
                setCurrentImage(0)
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentProject ? "bg-[#00aee7]" : "bg-gray-300"
              } focus:outline-none`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

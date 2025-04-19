"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

const projects = [
  {
    id: 1,
    title: "Modern Office Building",
    description: "Complete construction of a 5-story office building with modern amenities and sustainable features.",
    images: ["/images/service1.jpg", "/images/service2.jpg", "/images/service3.jpg"],
    category: "Commercial",
  },
  {
    id: 2,
    title: "Luxury Residential Complex",
    description: "Development of a high-end residential complex with 50 premium apartments and community facilities.",
    images: ["/images/service4.jpg", "/images/service5.jpg", "/images/service1.jpg"],
    category: "Residential",
  },
  {
    id: 3,
    title: "Hospital Renovation",
    description: "Complete renovation and expansion of an existing healthcare facility to modern standards.",
    images: ["/images/service2.jpg", "/images/service3.jpg", "/images/service4.jpg"],
    category: "Healthcare",
  },
]

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    setCurrentImage(0)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    setCurrentImage(0)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev === projects[currentProject].images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? projects[currentProject].images.length - 1 : prev - 1))
  }

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-[#132d4c] text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          OUR PROJECTS
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-[#00aee7] mx-auto mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        ></motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Project Image Carousel */}
          <motion.div
            className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {projects[currentProject].images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                {image ? (
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Project ${currentProject + 1} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-300"></div>
                )}
              </div>
            ))}

            {/* Image Navigation */}
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

          {/* Project Details */}
          <motion.div
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-4 inline-block px-3 py-1 bg-[#00aee7] text-white text-sm rounded-full">
              {projects[currentProject].category}
            </div>
            <h3 className="text-2xl font-bold text-[#132d4c] mb-4">{projects[currentProject].title}</h3>
            <p className="text-gray-700 mb-8">{projects[currentProject].description}</p>

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

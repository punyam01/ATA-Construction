"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { X } from "lucide-react"

const projectImages = [
  "/images/Paras_01.png",
  "/images/Paras_02.png",
  "/images/Paras_03.png",
  "/images/Mahindra_01.png",
  "/images/mahindra_02.png",
  "/images/Tata_01.png",
  "/images/Tata_02.png",
  "/images/Taj Resort_02.png",
  "/images/Taj Resort_01.png",
  "/images/Taj Resort_05.png",
  "/images/TAJ VIVANTA_01.png",
  "/images/TAJ VIVANTA_02.png",
  "/images/TAJ VIVANTA_05.png",
  "/images/School_01.png",
  "/images/School_02.png",
  "/images/School_03.png",
  "/images/LEARNING SCHOOL MATTER_04.png",
  "/images/LEARNING SCHOOL MATTER_02.png",
  "/images/LEARNING SCHOOL MATTER_03.png",
  "/images/Umang_02.png",
]

const ProjectGallery = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-[#132d4c] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
           PROJECT GALLERY
        </motion.h2>

        {/* <p className="text-center text-gray-600 mb-8">
          Hover on an image to view it fullscreen
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {projectImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-40 overflow-hidden cursor-pointer group"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Fullscreen image on hover */}
        <AnimatePresence>
          {hoveredImage !== null && (
            <motion.div
              key="hover-image"
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onMouseLeave={() => setHoveredImage(null)} // Optional: close on mouse leave fullscreen
            >
              <motion.div
                className="relative w-screen h-screen"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={projectImages[hoveredImage] || "/placeholder.svg"}
                  alt={`Project ${hoveredImage + 1}`}
                  priority
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
                <button
                  onClick={() => setHoveredImage(null)}
                  aria-label="Close fullscreen image"
                  className="
                    absolute top-4 right-4 
                    bg-transparent 
                    text-white 
                    p-2 
                    cursor-pointer 
                    hover:text-gray-300 
                    outline-none 
                    focus:outline-none 
                    border-none
                    z-50
                  "
                  style={{ userSelect: "none" }}
                >
                  <X size={32} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectGallery

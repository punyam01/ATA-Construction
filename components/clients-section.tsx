"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Pause, Play } from "lucide-react"

// Sample client logos
const clients = [
  {
    id: 1,
    name: "SAP",
    logo: "/images/client1.jpg",
  },
  {
    id: 2,
    name: "Infosys",
    logo: "/images/client2.jpg",
  },
  {
    id: 3,
    name: "Spotify",
    logo: "/images/client3.jpg",
  },
  {
    id: 4,
    name: "Shopify",
    logo: "/images/client4.jpg",
  },
  {
    id: 5,
    name: "EY",
    logo: "/images/client5.jpg",
  },
  {
    id: 6,
    name: "Figma",
    logo: "/images/client6.jpg",
  },
  {
    id: 7,
    name: "Duolingo",
    logo: "/images/client7.jpg",
  },
]

const ClientsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [isPaused, setIsPaused] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationId: number
    let lastTimestamp = 0
    const speed = 0.5 // pixels per millisecond

    const animate = (timestamp: number) => {
      if (!isPaused && carouselRef.current) {
        if (lastTimestamp) {
          const delta = timestamp - lastTimestamp
          const newPosition = currentPosition + speed * delta

          // Reset position when all logos have scrolled
          const containerWidth = carouselRef.current.scrollWidth
          const viewportWidth = carouselRef.current.offsetWidth

          if (newPosition > containerWidth - viewportWidth) {
            setCurrentPosition(0)
          } else {
            setCurrentPosition(newPosition)
          }
        }
        lastTimestamp = timestamp
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused, currentPosition])

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <section ref={ref} className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white font-['Poppins']">OUR CLIENTS</h2>
          <button
            onClick={togglePause}
            className="bg-[#00aee7] hover:bg-[#132d4c] text-white p-2 rounded-full transition-colors"
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          <div
            ref={carouselRef}
            className="flex items-center space-x-16 py-8"
            style={{
              transform: `translateX(-${currentPosition}px)`,
              transition: isPaused ? "none" : "transform 0.1s linear",
            }}
          >
            {/* Duplicate the clients array to create a seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-6 rounded-lg flex items-center justify-center h-24 w-40"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {client.logo ? (
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="max-h-16 w-auto object-contain filter brightness-0 invert"
                  />
                ) : (
                  <div className="text-white text-center">{client.name}</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection

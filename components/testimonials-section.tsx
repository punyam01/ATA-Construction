"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    id: 1,
    title: "Smooth and Hassle-free Experience",
    content:
      "I recently had Hammad Jasimi from H&H Associates complete a waterproofing project at my home, and I am delighted with the results. Hammad was professional, knowledgeable, and completed the work efficiently. The waterproofing quality was excellent, and the entire process was smooth and hassle-free. I highly recommend Hammad and his team for any waterproofing needs.",
    author: "Ravinder Kumar",
    company: "DS Group",
    rating: 5,
  },
  {
    id: 2,
    title: "Awesome Service",
    content:
      "H&H Associates handled a retrofitting project at my property, and I couldn't be happier with the outcome. The team was highly professional, and knowledgeable, and ensured the work was completed on time and to a high standard. The improvements have greatly enhanced the safety and stability of the structure. I highly recommend H&H Associates for any retrofitting needs.",
    author: "Osama",
    company: "Lumna House",
    rating: 5,
  },
  {
    id: 3,
    title: "Excellent Quality Work",
    content:
      "The interior design work done by ATA Constructions exceeded my expectations. Their attention to detail and creative solutions transformed my space completely. The team was punctual, professional, and kept me informed throughout the project. I would definitely hire them again for future projects.",
    author: "Priya Sharma",
    company: "Residential Client",
    rating: 5,
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section ref={ref} className="py-16 bg-gray-100 bg-opacity-50 bg-[url('/images/dot-pattern.png')] bg-repeat">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-[#132d4c] text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          TESTIMONIALS
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-[#132d4c] mb-4 text-center">{testimonial.title}</h3>
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 text-center">"{testimonial.content}"</p>
                    <div className="text-center">
                      <p className="font-bold text-[#132d4c]">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-[#132d4c]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-[#132d4c]" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-[#00aee7]" : "bg-gray-300"
                } focus:outline-none`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

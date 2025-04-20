"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useInView } from "react-intersection-observer"

const testimonials = [
  // First slide with 3 testimonials
  [
    {
      id: 1,
      title: "Smooth and Hassle-free Experience",
      content:
        "I recently had Mustafa Ahmad from ATA Constructions Private Ltd complete a Plumbing & Firefighting Works project at my home, and I am delighted with the results. Hammad was professional, knowledgeable, and completed the work efficiently. The Plumbing & Firefighting Works quality was excellent, and the entire process was smooth and hassle-free. I highly recommend Hammad and his team for any Plumbing & Firefighting Works needs.",
      author: "Ravinder Kumar",
      company: "DS Group",
      rating: 5,
    },
    {
      id: 2,
      title: "Awesome Service",
      content:
        "ATA Constructions Private Ltd handled a Interior Works project at my property, and I am happy with the outcome. The team was highly professional, and knowledgeable, and ensured the work was completed on time and to a high standard. The improvements have greatly enhanced the safety and stability of the structure. I highly recommend ATA Constructions Private Ltd  for any Interior Works.",
      author: "Osama",
      company: "Lumna House",
      rating: 5,
    },
    {
      id: 3,
      title: "Excellent Quality Work",
      content:
        "The Internal & External Finishing work done by ATA Constructions exceeded my expectations. Their attention to detail and creative solutions transformed my space completely. The team was punctual, professional, and kept me informed throughout the project. I would definitely hire them again for future projects.",
      author: "Priya Sharma",
      company: "Residential Client",
      rating: 5,
    },
  ],
  // Second slide with 3 testimonials (duplicated for demonstration)
  [
    {
      id: 4,
      title: "Professional and Reliable",
      content:
        "Working with ATA Constructions on our commercial renovation was a great experience. Their team was professional, reliable, and delivered exceptional quality work. The project was completed on schedule and within budget. Their expertise in commercial construction is evident in the final result.",
      author: "Rajiv Mehta",
      company: "Mehta Enterprises",
      rating: 5,
    },
    {
      id: 5,
      title: "Outstanding Craftsmanship",
      content:
        "The Turnkey Projects completed by ATA Constructions was outstanding. Their attention to detail and commitment to safety standards was impressive. The team was courteous, clean, and efficient. I appreciate their transparent communication throughout the project and would definitely use their services again.",
      author: "Aisha Khan",
      company: "Modern Living Spaces",
      rating: 5,
    },
    {
      id: 6,
      title: "Exceeded Expectations",
      content:
        "ATA Constructions exceeded all my expectations with their HVAC installation. From the initial consultation to the final inspection, their team demonstrated exceptional knowledge and skill. The new system has significantly improved our energy efficiency and indoor comfort. Highly recommended!",
      author: "Vikram Singh",
      company: "Green Valley Resorts",
      rating: 5,
    },
  ],
  // Third slide with 3 testimonials (duplicated for demonstration)
  [
    {
      id: 7,
      title: "Timely and Cost-Effective",
      content:
        "ATA Constructions completed our bathroom renovation in a timely and cost-effective manner. Their team provided excellent suggestions that helped us maximize our budget without compromising on quality. The finished bathroom looks stunning and functions perfectly. We're already planning our next project with them.",
      author: "Meera Patel",
      company: "Homeowner",
      rating: 5,
    },
    {
      id: 8,
      title: "Exceptional Project Management",
      content:
        "The project management skills of ATA Constructions are exceptional. They coordinated multiple subcontractors seamlessly for our office renovation, ensuring minimal disruption to our operations. Their proactive communication and problem-solving abilities made the entire process stress-free.",
      author: "Sanjay Gupta",
      company: "Gupta Technologies",
      rating: 5,
    },
    {
      id: 9,
      title: "High-Quality Structural Work",
      content:
        "We hired ATA Constructions for some structural modifications to our heritage building. Their understanding of structural engineering and respect for the historical elements of our property was impressive. The work was completed with high precision and quality, preserving the character while improving the functionality.",
      author: "Ananya Reddy",
      company: "Heritage Preservation Trust",
      rating: 5,
    },
  ],
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

        <div className="relative w-full mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((slideTestimonials, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {slideTestimonials.map((testimonial) => (
                      <motion.div
                        key={testimonial.id}
                        className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: (testimonial.id % 3) * 0.2 }}
                      >
                        <h3 className="text-xl font-bold text-[#132d4c] mb-3 text-center">{testimonial.title}</h3>
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4 text-sm flex-grow overflow-y-auto max-h-40">
                          "{testimonial.content}"
                        </p>
                        <div className="text-center mt-auto pt-4 border-t border-gray-100">
                          <p className="font-bold text-[#132d4c]">{testimonial.author}</p>
                          <p className="text-gray-600 text-sm">{testimonial.company}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                aria-label={`Go to testimonial slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

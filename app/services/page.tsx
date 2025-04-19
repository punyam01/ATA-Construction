"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Updated services list
const services = [
  {
    id: "civil-construction",
    title: "Civil & Structural Construction",
    description:
      "We provide comprehensive civil and structural construction services for residential, commercial, and industrial projects. Our team of experienced engineers and workers ensures high-quality construction that meets all safety standards and client requirements.",
    image: "/images/service1.jpg",
  },
  {
    id: "interior-exterior",
    title: "Internal & External Finishing",
    description:
      "Our finishing services ensure high-quality interior and exterior aesthetics for all types of buildings. We specialize in wall finishes, flooring, ceiling work, painting, and exterior cladding to enhance the appearance and durability of your property.",
    image: "/images/service2.jpg",
  },
  {
    id: "external-development",
    title: "External Development",
    description:
      "We offer complete external development solutions including landscaping, drainage systems, and site improvements. Our services help create functional and attractive outdoor spaces that complement your building and enhance its value.",
    image: "/images/service3.jpg",
  },
  {
    id: "civil-works",
    title: "Civil Construction",
    description:
      "Our civil construction services cover everything from foundation work to structural framing and concrete pouring. We handle projects of all sizes with precision and attention to detail, ensuring structural integrity and longevity.",
    image: "/images/service4.jpg",
  },
  {
    id: "interior-works",
    title: "Interior Works",
    description:
      "Our interior services include custom cabinetry, shelving, and woodwork to enhance the functionality and aesthetics of your living spaces. We create beautiful and practical interiors tailored to your specific needs and preferences.",
    image: "/images/service5.jpg",
  },
  {
    id: "turnkey-projects",
    title: "Turnkey Projects",
    description:
      "We offer end-to-end project management and execution for turnkey construction projects. From initial design to final handover, we handle all aspects of the construction process, providing a hassle-free experience for our clients.",
    image: "/images/service1.jpg",
  },
  {
    id: "plumbing-firefighting",
    title: "Plumbing & Firefighting Works",
    description:
      "Our specialized team handles all plumbing and firefighting system installations with expertise. We ensure reliable water supply, efficient drainage, and comprehensive fire safety systems that comply with all relevant regulations and standards.",
    image: "/images/service2.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

export default function ServicesPage() {
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
        <Image src="/images/service1.jpg" alt="Our Services" fill className="object-cover" />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="h-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          ></motion.div>
        </div>
      </motion.section>

      {/* Services Content */}
      <motion.section className="py-20" variants={containerVariants} initial="hidden" animate="visible">
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex justify-center items-center mb-4">
              <h2 className="text-3xl font-bold text-[#132d4c]">SERVICES OF THE COMPANY</h2>
            </div>
            <div className="w-20 h-1 bg-[#00aee7] mx-auto my-4"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              We offer a comprehensive range of construction and development services to meet all your needs. Our expert
              team ensures high-quality service delivery for both residential and commercial projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-[#132d4c]/70 z-10"></div>
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#132d4c] mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  <div className="mt-auto pt-4">
                    <motion.div
                      className="flex justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link href="/portfolio">
                        <Button className="bg-[#00aee7] hover:bg-[#132d4c] text-white">View Service</Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-[#132d4c]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Our Services?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a free quote. Our team is ready to assist you.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button
              size="lg"
              className="bg-white text-[#132d4c] hover:bg-[#00aee7] hover:text-white px-10 py-6 h-auto text-lg"
              onClick={() => document.getElementById("quotation-form-trigger")?.click()}
            >
              Get Quotation
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

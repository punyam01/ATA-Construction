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
      title: "JMC INDIA LTD & TATA HOUSING - GURGAON GATEWAY",
      description: "External Paint Project at Gurgaon Gateway, Gurugram",
      images: ["/images/1.3.jpg", "/images/1.2.bmp", "/images/1.1.bmp"],
      category: "Completed",
      client: "JMC INDIA LTD & TATA HOUSING",
      amount: "₹3,02,20,760/-",
      year: "2017",
      contactPerson: "Mr. Vivek Anand Jha (+91-9910066857)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Gurugram",
    },
    {
      id: 2,
      title: "EAGLE INTERNATIONAL LIMITED",
      description: "Constructions of Structural and Civil Works at A-11, Nizamuddun West, New Delhi",
      images: ["/images/2.1.jpg", "/images/2.2.png", "/images/2.3.jpg"],
      category: "Completed",
      client: "EAGLE INTERNATIONAL LIMITED",
      amount: "₹2,89,97,905/-",
      year: "2018",
      contactPerson: "Mr. Abhishek Gupta (MD EAGLE INTERNATIONAL INDIA LTD)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "New Delhi",
    },
    {
      id: 3,
      title: "PARAS TIERA, SEC-137, NOIDA",
      description: "Construction of Balance Structure, civil & Internal Finishing of 28 units of LR-1&2",
      images: ["/images/3.1.png", "/images/3.2.png", "/images/3.3.png"],
      category: "Completed",
      client: "PARAS",
      amount: "₹2,59,49,055/-",
      year: "2012-2015",
      contactPerson: "Mr. SP Thakur (+91-9999797547)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Noida",
    },
    {
      id: 4,
      title: "UMANG REALTECH PVT LTD - WINTER HILLS",
      description: "Internal Finishing Project at Winter Hills, Dwarka Mode, New Delhi",
      images: ["/images/4.1.png", "/images/4.2.png", "/images/4.3.png"],
      category: "Completed",
      client: "UMANG REALTECH PVT LTD",
      amount: "₹1,39,31,060/-",
      year: "2017-2018",
      contactPerson: "Mr. Malik (+91-9711053789)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "New Delhi",
    },
    {
      id: 5,
      title: "MAHINDRA LIFESPACE & DEVELOPERS LTD",
      description:
        "Internal Finishing, Boundary wall, Road Works, MS works, External Paint at Choloris-Faridabad and Aura-Gurugram",
      images: ["/images/5.1.png", "/images/5.2.png", "/images/5.3.png"],
      category: "Completed",
      client: "MAHINDRA LIFESPACE & DEVELOPERS LTD",
      amount: "₹1,07,65,362/-",
      year: "2017",
      contactPerson: "Mr. Raisuddin (+91-9971136382)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Faridabad & Gurugram",
    },
    {
      id: 6,
      title: "INDIVIDUAL PROJECT - JAMIA NAGAR",
      description: "Execution of Civil, Structure & Internal Finishing works of C-77, Jamia Nagar",
      images: ["/images/service1.jpg", "/images/service2.jpg"],
      category: "Completed",
      client: "INDIVIDUAL",
      amount: "₹2,34,00,000/-",
      year: "2014",
      contactPerson: "Mr. Nadeem (+91-9891918202)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Jamia Nagar",
    },
    {
      id: 7,
      title: "HERITAGE SCHOOL",
      description: "Internal Finishing work at Heritage school sector-62 Gurgaon",
      images: ["/images/7.1.png", "/images/7.2.png", "/images/7.3.png"],
      category: "Completed",
      client: "HERITAGE SCHOOL",
      amount: "₹1,33,50,000/-",
      year: "2023",
      contactPerson: "Mr. Aftab Alam",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Gurgaon",
    },
    {
      id: 8,
      title: "ESOTICO",
      description: "Structure and Civil work of Commercial Complex at Mughal Sarai",
      images: ["/images/8.1.png", "/images/8.2.png", "/images/8.3.png"],
      category: "Completed",
      client: "ESOTICO",
      amount: "₹2,13,00,000/-",
      year: "2022",
      contactPerson: "Mr. Prashant Gola",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Mughal Sarai",
    },
    {
      id: 9,
      title: "BRIJWASI GROUP & CONSCIENT",
      description:
        "Structure and Civil work of Staff Quarter at Mathura Nagar & Construction of Compound wall at Heritage One sec102 Gurgaon",
      images: ["/images/service2.jpg", "/images/service3.jpg"],
      category: "Ongoing",
      client: "BRIJWASI GROUP & CONSCIENT",
      amount: "₹2,18,00,000/- & ₹45,00,000/-",
      year: "2024",
      contactPerson: "Mr. Shyaam Sharma & Mr. Aftab Alam",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Mathura & Gurgaon",
    },
    {
      id: 10,
      title: "INDIVIDUAL PROJECTS - NOIDA",
      description: "Internal Finishing of N-65 Sec-131 Noida & Civil and structure work of P-118 Sec-131 Noida",
      images: ["/images/service4.jpg", "/images/service5.jpg"],
      category: "Ongoing",
      client: "INDIVIDUAL",
      amount: "₹42,00,000/- & ₹32,00,000/-",
      year: "2024",
      contactPerson: "Individual Clients",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Noida",
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
      (prev) => (prev - 1 + projects[currentProject].images.length) % projects[currentProject].images.length
    )
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#132d4c] mb-8">Our Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-xl h-[300px] md:h-full bg-black"
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
                  src={image}
                  alt={`${projects[currentProject].title} - Image ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}

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

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {projects[currentProject].images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImage ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-4 inline-block px-3 py-1 bg-[#00aee7] text-white text-sm rounded-full">
              {projects[currentProject].category}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#132d4c] mb-4">
              {projects[currentProject].title}
            </h3>
            <p className="text-gray-700 mb-6">{projects[currentProject].description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-[#132d4c]">Client:</p>
                <p className="text-gray-700">{projects[currentProject].client}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#132d4c]">Project Value:</p>
                <p className="text-gray-700">{projects[currentProject].amount}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#132d4c]">Year:</p>
                <p className="text-gray-700">{projects[currentProject].year}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#132d4c]">Location:</p>
                <p className="text-gray-700">{projects[currentProject].area}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-semibold text-[#132d4c]">Client Contact:</p>
                <p className="text-gray-700">{projects[currentProject].contactPerson}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-semibold text-[#132d4c]">Contractor Contact:</p>
                <p className="text-gray-700">{projects[currentProject].contractorPerson}</p>
              </div>
            </div>

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

        <div className="flex justify-center mt-8 space-x-2 flex-wrap">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentProject(index)
                setCurrentImage(0)
              }}
              className={`w-3 h-3 rounded-full m-1 ${
                index === currentProject ? "bg-[#00aee7]" : "bg-gray-300"
              } focus:outline-none`}
              aria-label={`Go to project ${index + 1}`}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

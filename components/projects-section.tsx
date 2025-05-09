"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  const projects = [
    {
      id: 1,
      title: "PARAS BUILDTECH - TIERA, SEC-137",
      description: "Construction of Balance Structure, civil & Internal Finishing of 28 units of LR-1&2",
      images: ["/images/Paras_01.png", "/images/Paras_02.png", "/images/Paras_03.png"],
      category: "Civil and Interior",
      client: "PARAS BUILDTECH",
      amount: "₹2,59,49,595/-",
      year: "2012-2015",
      contactPerson: "Mr. SP Thakur (+91-9999797547)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Noida",
    },
    {
      id: 2,
      title: "MAHINDRA LIFESPACE & DEVELOPERS LTD",
      description:
        "Internal Finishing, Boundary wall, Road Works, MS works, External Development at Choloris-Faridabad and Aura-Gurugram",
      images: ["/images/Mahindra_01.png", "/images/Mahindra_02.png", "/images/5.3.png"],
      category: "External Development",
      client: "MAHINDRA LIFESPACE & DEVELOPERS LTD",
      amount: "₹1,07,65,363/-",
      year: "2017",
      contactPerson: "Mr. Raisuddin (+91-9971136382)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Gurgaon",
    },
    {
      id: 3,
      title: "TATA HOUSING - GURGAON GATEWAY",
      description: "External Paint SKK Project at Gurgaon Gateway",
      images: ["/images/1.3.jpg", "/images/Tata_01.png", "/images/Tata_02.png"],
      category: "External Paint SKK",
      client: "TATA HOUSING",
      amount: "₹1,21,33,181/-",
      year: "2017",
      contactPerson: "Mr. Vivek Anand Jha (+91-9910066857)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Gurgaon",
    },
    {
      id: 4,
      title: "TAJ RESORT RISHIKESH",
      description: "External Development Project at Taj Resort",
      images: ["/images/Taj Resort_02.png", "/images/Taj Resort_01.png", "/images/Taj Resort_05.png"],
      category: "External Development",
      client: "TAJ RESORT",
      amount: "₹1,19,54,129/-",
      year: "2018-2019",
      contactPerson: "Project Manager",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Rishikesh",
    },
    {
      id: 5,
      title: "HERITAGE INTERNATIONAL SCHOOL",
      description: "Interior Finishing work at Heritage International school",
      images: ["/images/School_01.png", "/images/School_02.png", "/images/School_03.png"],
      category: "Interior",
      client: "HERITAGE INTERNATIONAL SCHOOL",
      amount: "₹1,47,98,030/-",
      year: "2023",
      contactPerson: "Mr. Aftab Alam",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Gurgaon",
    },
    {
      id: 6,
      title: "UMANG REALTECH PVT LTD - WINTER HILLS",
      description: "Interior Finishing Project at Winter Hills, Dwarka Mode",
      images: ["/images/4.1.png", "/images/Umang_02.png", "/images/Umang_04.png"],
      category: "Interior",
      client: "UMANG REALTECH PVT LTD",
      amount: "₹1,39,31,060/-",
      year: "2017-2018",
      contactPerson: "Mr. Malik (+91-9711053789)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Delhi",
    },
    {
      id: 7,
      title: "EAGLE INTERNATIONAL LIMITED",
      description: "Constructions of Structure, Civil & Interior Works at A-11, Nizamuddun West",
      images: ["/images/2.1.jpg", "/images/2.2.png", "/images/2.3.jpg"],
      category: "Structure, Civil, Interior",
      client: "EAGLE INTERNATIONAL LIMITED",
      amount: "₹2,89,97,905/-",
      year: "2018",
      contactPerson: "Mr. Abhishek Gupta (MD EAGLE INTERNATIONAL INDIA LTD)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Delhi",
    },
    {
      id: 8,
      title: "STARWIRE INDIA LTD",
      description: "Structure, Civil and Interior Works",
      images: ["/images/service5.jpg", "/images/6.1.png", "/images/6.2.png"],
      category: "Structure, Civil, Interior",
      client: "STARWIRE INDIA LTD",
      amount: "₹93,56,850/-",
      year: "2019",
      contactPerson: "Project Manager",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Delhi",
    },
    {
      id: 9,
      title: "TAJ VIVANTA SURAJKUND",
      description: "Interior, Fire Fighting and Electrical Works",
      images: ["/images/TAJ VIVANTA_01.png", "/images/TAJ VIVANTA_02.png", "/images/TAJ VIVANTA_05.png"],
      category: "Interior, Fire Fighting, Electrical",
      client: "TAJ VIVANTA",
      amount: "₹65,28,450/-",
      year: "2020",
      contactPerson: "Project Manager",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Faridabad",
    },
    {
      id: 10,
      title: "CONSCIENT",
      description: "Structure, Civil and Interior Works at Heritage One sec102",
      images: ["/images/service3.jpg", "/images/service4.jpg", "/images/service5.jpg"],
      category: "Structure, Civil, Interior",
      client: "CONSCIENT",
      amount: "₹2,83,80,157/-",
      year: "2021-2022",
      contactPerson: "Mr. Aftab Alam",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Gurgaon",
    },
    {
      id: 11,
      title: "BRIJWASI GROUP",
      description: "Structure, Civil and Interior work of Staff Quarter",
      images: ["/images/service2.jpg", "/images/service3.jpg", "/images/service4.jpg"],
      category: "Structure, Civil, Interior",
      client: "BRIJWASI GROUP",
      amount: "₹2,43,70,276/-",
      year: "2024",
      contactPerson: "Mr. Shyaam Sharma",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Mathura",
    },
    {
      id: 12,
      title: "INDIRA GANDHI EYE HOSPITAL",
      description: "Interior, Electrical and Plumbing Works",
      images: ["/images/service3.jpg", "/images/service4.jpg", "/images/service5.jpg"],
      category: "Interior, Electrical, Plumbing",
      client: "INDIRA GANDHI EYE HOSPITAL",
      amount: "₹70,00,000/-",
      year: "2022",
      contactPerson: "Hospital Administrator",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Lucknow",
    },
    {
      id: 13,
      title: "LEARNING MATTERS SCHOOL",
      description: "Interior, Electrical, Plumbing and External Development Works",
      images: ["/images/LEARNING SCHOOL MATTER_04.png", "/images/LEARNING SCHOOL MATTER_02.png", "/images/LEARNING SCHOOL MATTER_03.png"],
      category: "Interior, Electrical, Plumbing, External Development",
      client: "LEARNING MATTERS SCHOOL",
      amount: "₹46,58,690/-",
      year: "2021",
      contactPerson: "School Administrator",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Delhi",
    },
    {
      id: 14,
      title: "IVOR INDIA",
      description: "Structure, Civil and Interior Works",
      images: ["/images/service4.jpg", "/images/service5.jpg", "/images/6.3.png"],
      category: "Structure, Civil, Interior",
      client: "IVOR INDIA",
      amount: "₹93,00,000/-",
      year: "2022",
      contactPerson: "Project Manager",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Noida",
    },
    {
      id: 15,
      title: "ESOTICO ASSOCIATES",
      description: "Structure and Civil work of Commercial Complex at Mughal Sarai",
      images: ["/images/8.1.png", "/images/8.2.png", "/images/8.3.png"],
      category: "Structure, Civil, Interior",
      client: "ESOTICO ASSOCIATES",
      amount: "₹2,13,00,000/-",
      year: "2022",
      contactPerson: "Mr. Prashant Gola",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Banaras",
    },
    {
      id: 16,
      title: "INDIVIDUAL PROJECTS",
      description: "Multiple Individual Villa Projects in Delhi and Noida",
      images: ["/images/service4.jpg", "/images/service5.jpg", "/images/6.3.png"],
      category: "Turnkey",
      client: "INDIVIDUAL",
      amount: "₹34,00,000/- | ₹2,34,00,000/- | ₹2,60,39,200/-",
      year: "2014-2024",
      contactPerson: "Individual Clients",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Delhi & Noida",
    },
  ]

  const project = projects[currentProject] || null

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setCurrentImage(0)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setCurrentImage(0)
  }

  const nextImage = () => {
    if (project && project.images.length > 0) {
      setCurrentImage((prev) => (prev + 1) % project.images.length)
    }
  }

  const prevImage = () => {
    if (project && project.images.length > 0) {
      setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 2000)
    return () => clearInterval(interval)
  }, [currentProject])

  if (!project) return null

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-0 items-stretch">
          {/* Left Image Carousel */}
          <motion.div
            className="relative w-full md:w-1/2 rounded-l-lg overflow-hidden shadow-xl min-h-[500px] bg-white"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}

            {/* Image Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-1 rounded-full z-10 opacity-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-1 rounded-full z-10 opacity-50"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Image Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Details */}
          <motion.div
            className="w-full md:w-1/2 bg-gray-50 p-6 md:p-8 rounded-r-lg shadow-lg min-h-[500px] flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="mb-4 inline-block px-3 py-1 bg-[#00aee7] text-white text-sm rounded-full">
                {project.category}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#132d4c] mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-6">{project.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#132d4c]">Client:</p>
                  <p className="text-gray-700">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#132d4c]">Project Value:</p>
                  <p className="text-gray-700">{project.amount}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#132d4c]">Year:</p>
                  <p className="text-gray-700">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#132d4c]">Location:</p>
                  <p className="text-gray-700">{project.area}</p>
                </div>
                {project.id === 16 && (
                  <div className="col-span-2">
                    <p className="text-sm font-semibold text-[#132d4c]">Project Details:</p>
                    <ul className="text-gray-700 list-disc pl-5 mt-2">
                      <li>Individual Villa Interior in Noida - ₹34,00,000/- (Turnkey)</li>
                      <li>Individual Villa Structure & Interior in Delhi - ₹2,34,00,000/- (Turnkey)</li>
                      <li>Individual Villa Structure & Interior in Delhi - ₹2,60,39,200/- (Turnkey)</li>
                    </ul>
                  </div>
                )}
                {/* <div className="col-span-2">
                  <p className="text-sm font-semibold text-[#132d4c]">Client Contact:</p>
                  <p className="text-gray-700">{project.contactPerson}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-semibold text-[#132d4c]">Contractor Contact:</p>
                  <p className="text-gray-700">{project.contractorPerson}</p>
                </div> */}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 mt-4">
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

        {/* Project Dots */}
        <div className="flex justify-center mt-8 space-x-2 flex-wrap">
          {projects.map((proj, index) => (
            <button
              key={proj.id}
              onClick={() => {
                setCurrentProject(index)
                setCurrentImage(0)
              }}
              className={`w-3 h-3 rounded-full m-1 ${
                index === currentProject ? "bg-[#00aee7]" : "bg-gray-300"
              } focus:outline-none`}
              aria-label={`Go to project ${index + 1}`}
              title={proj.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

"use client"

import { motion } from "framer-motion"

const ChairmanMessage = () => {
  return (
    <section className="py-16 bg-[#132d4c] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 font-['Poppins'] text-[#00aee7]">CHAIRMAN MESSAGE</h2>
          <div className="w-24 h-1 bg-white mb-8"></div>

          <div className="space-y-6 font-['Roboto'] leading-relaxed">
            <p>
              The fundamental principle guiding ATA CONSTRUCTIONS PVT LTD is Professionalism, which serves as the
              foundation of our commitment to customers, partners, and employees. We take pride in consistently
              upholding our promises, ensuring reliability, integrity, and excellence in every aspect of our work.
            </p>

            <p>
              In today's rapidly evolving world, business development models are being reshaped, and economic and
              innovation cycles are becoming increasingly shorter. Companies that fail to adapt to these changes face
              significant risks that could jeopardize their long-term success. Recognizing this, we are committed to
              staying ahead of industry trends by continuously evolving and refining our strategies.
            </p>

            <p>
              As we sharpen our approach, our objective is to become one of the world's most valuable, innovative, and
              admired companies. We aspire to be an unstoppable force in the industry, creating immense value for our
              shareholders, stakeholders, and the broader economy. Through continuous growth, adaptation, and a
              relentless pursuit of excellence, we are committed to shaping the future of the construction sector.
            </p>
          </div>

          <div className="mt-8 text-right">
            <p className="text-xl font-semibold font-['Poppins']">Hammad Jasimi</p>
            <p className="text-[#00aee7]">Chairman, ATA CONSTRUCTIONS PVT LTD</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChairmanMessage

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { translations } from '@/app/translations'
import { useLanguage } from '@/app/contexts/LanguageContext'

export default function About() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <Image
              src="https://resize.sudospaces.com/xuatnhapkhauleanh-edu-vn/uploads/2018/01/nganh-logistics-hoc-gi.jpg.webp"
              alt="About our logistics company"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.aboutTitle}
              </h2>
              <p className="text-gray-600 mb-6">
                {t.aboutDescription}
              </p>
            </motion.div>

            <motion.div 
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div 
                variants={statItemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-2xl font-bold text-blue-600 mb-2"
                >
                  15+
                </motion.h3>
                <p className="text-gray-600">{t.yearsExperience}</p>
              </motion.div>
              <motion.div 
                variants={statItemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-2xl font-bold text-blue-600 mb-2"
                >
                  1000+
                </motion.h3>
                <p className="text-gray-600">{t.happyClients}</p>
              </motion.div>
              <motion.div 
                variants={statItemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-2xl font-bold text-blue-600 mb-2"
                >
                  50+
                </motion.h3>
                <p className="text-gray-600">{t.countriesServed}</p>
              </motion.div>
              <motion.div 
                variants={statItemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-2xl font-bold text-blue-600 mb-2"
                >
                  24/7
                </motion.h3>
                <p className="text-gray-600">{t.customerSupport}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
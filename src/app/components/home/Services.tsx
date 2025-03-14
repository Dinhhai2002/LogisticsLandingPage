'use client'

import { FaShip, FaWarehouse, FaTruck, FaPlane } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { translations } from '@/app/translations'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { useMediaQuery } from '@/app/hooks/useMediaQuery'
import { useState } from 'react'

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const services = [
    {
      icon: <FaShip className="w-12 h-12" />,
      title: t.seaFreight,
      description: t.seaFreightDesc
    },
    {
      icon: <FaWarehouse className="w-12 h-12" />,
      title: t.warehousing,
      description: t.warehousingDesc
    },
    {
      icon: <FaTruck className="w-12 h-12" />,
      title: t.landTransport,
      description: t.landTransportDesc
    },
    {
      icon: <FaPlane className="w-12 h-12" />,
      title: t.airFreight,
      description: t.airFreightDesc
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const mobileCardVariants = {
    collapsed: {
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  const mobileDescriptionVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    expanded: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-lg shadow-lg transition-shadow
                ${isMobile ? 'p-6' : 'p-8 hover:shadow-xl'}`}
              whileHover={!isMobile ? { 
                scale: 1.03,
                transition: { duration: 0.2 }
              } : undefined}
              onClick={() => isMobile && setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="flex flex-col items-center mb-6">
                <motion.div 
                  className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                  whileTap={isMobile ? {
                    scale: 0.9,
                    rotate: 180,
                    transition: { duration: 0.2 }
                  } : undefined}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>

              <AnimatePresence>
                {(!isMobile || activeIndex === index) && (
                  <motion.div
                    variants={isMobile ? mobileDescriptionVariants : undefined}
                    initial={isMobile ? "collapsed" : undefined}
                    animate={isMobile ? "expanded" : undefined}
                    exit={isMobile ? "collapsed" : undefined}
                    className="text-gray-600"
                  >
                    <p>{service.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {isMobile && (
                <motion.div
                  initial={false}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="mt-4 flex justify-center text-blue-600"
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 
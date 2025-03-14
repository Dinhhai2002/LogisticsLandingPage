'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { translations } from '@/app/translations'
import { useLanguage } from '@/app/contexts/LanguageContext'
import AnimatedText from '../common/AnimatedText'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          // src="/images/logistics-hero.jpg"
          src="https://resize.sudospaces.com/xuatnhapkhauleanh-edu-vn/uploads/2018/01/nganh-logistics-hoc-gi.jpg.webp"
          alt="Logistics operations"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <AnimatedText 
          text={t.heroTitle}
          className="text-4xl md:text-6xl font-bold mb-6"
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          {t.heroSubtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            {t.viewServices}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors"
          >
            {t.contactUs}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 
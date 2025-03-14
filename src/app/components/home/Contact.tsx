'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { translations } from '@/app/translations'
import { useLanguage } from '@/app/contexts/LanguageContext'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

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

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-block p-4 bg-blue-100 rounded-full mb-4"
            >
              <FaPhone className="text-blue-600 text-2xl" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{t.callUs}</h3>
            <p className="text-gray-600">{t.phone}</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-block p-4 bg-blue-100 rounded-full mb-4"
            >
              <FaEnvelope className="text-blue-600 text-2xl" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{t.emailUs}</h3>
            <p className="text-gray-600">{t.emailAddress}</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-block p-4 bg-blue-100 rounded-full mb-4"
            >
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{t.visitUs}</h3>
            <p className="text-gray-600">{t.address}</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto"
        >
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder={t.yourName}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder={t.yourEmail}
                />
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                {t.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder={t.yourMessage}
              ></textarea>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {t.sendMessage}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
} 
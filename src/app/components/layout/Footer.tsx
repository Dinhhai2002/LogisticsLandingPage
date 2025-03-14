'use client'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { translations } from '@/app/translations'
import { useLanguage } from '@/app/contexts/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' }
  ]

  const footerLinks = [
    {
      title: t.company,
      links: [
        { name: t.about, href: '#about' },
        { name: t.services, href: '#services' },
        { name: t.contact, href: '#contact' }
      ]
    },
    {
      title: t.services,
      links: [
        { name: t.seaFreight, href: '#' },
        { name: t.airFreight, href: '#' },
        { name: t.landTransport, href: '#' },
        { name: t.warehousing, href: '#' }
      ]
    },
    {
      title: t.support,
      links: [
        { name: t.faq, href: '#' },
        { name: t.privacyPolicy, href: '#' },
        { name: t.termsOfService, href: '#' }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">LogiTech</h3>
            <p className="mb-4">{t.footerDescription}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="hover:text-blue-400 transition-colors"
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          document.querySelector(link.href)?.scrollIntoView({
                            behavior: 'smooth'
                          })
                        }
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-sm"
        >
          <p>© {currentYear} LogiTech. {t.allRightsReserved}</p>
        </motion.div>
      </div>
    </footer>
  )
} 
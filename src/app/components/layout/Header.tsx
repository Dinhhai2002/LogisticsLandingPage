'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { translations } from '@/app/translations'
import { useLanguage } from '@/app/contexts/LanguageContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const toggleLanguage = (lang: 'en' | 'vi') => {
    setLanguage(lang)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Chiều cao của header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-blue-600"
          >
            LogiTech
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t.home}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t.about}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t.services}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t.contact}
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                <span>{t.language}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    language === 'en' ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  <Image
                    src="/images/flags/gb.svg"
                    alt="English"
                    width={20}
                    height={15}
                    className="mr-2"
                  />
                  {t.english}
                </button>
                <button
                  onClick={() => toggleLanguage('vi')}
                  className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    language === 'vi' ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  <Image
                    src="/images/flags/vn.svg"
                    alt="Vietnamese"
                    width={20}
                    height={15}
                    className="mr-2"
                  />
                  {t.vietnamese}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                {t.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                {t.about}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                {t.services}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                {t.contact}
              </button>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-500 mb-2">{t.language}</p>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      toggleLanguage('en')
                      setIsMenuOpen(false)
                    }}
                    className={`flex items-center px-2 py-1 rounded ${
                      language === 'en'
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Image
                      src="/images/flags/gb.svg"
                      alt="English"
                      width={20}
                      height={15}
                      className="mr-2"
                    />
                    {t.english}
                  </button>
                  <button
                    onClick={() => {
                      toggleLanguage('vi')
                      setIsMenuOpen(false)
                    }}
                    className={`flex items-center px-2 py-1 rounded ${
                      language === 'vi'
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Image
                      src="/images/flags/vn.svg"
                      alt="Vietnamese"
                      width={20}
                      height={15}
                      className="mr-2"
                    />
                    {t.vietnamese}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 
import Hero from './components/home/Hero'
import Services from './components/home/Services'
import About from './components/home/About'
import Contact from './components/home/Contact'

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  )
}

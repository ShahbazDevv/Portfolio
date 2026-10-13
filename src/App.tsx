import { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@/lib/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { LoadingScreen } from '@/components/ui/loading-screen'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { LearningJourney } from '@/components/sections/learning-journey'
import { Projects } from '@/components/sections/projects'
import { ResumeSection } from '@/components/sections/resume-section'
import { Contact } from '@/components/sections/contact'

const ProjectDetail = lazy(() =>
  import('@/pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail }))
)

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <LearningJourney />
      <Projects />
      <ResumeSection />
      <Contact />
    </>
  )
}

function AppContent() {
  const location = useLocation()
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)

  useEffect(() => {
    if (location.pathname === '/') {
      const savedTarget = sessionStorage.getItem('scroll_to_section')
      if (savedTarget) {
        sessionStorage.removeItem('scroll_to_section')
      }
      const hashTarget = location.hash ? location.hash.replace('#', '') : null
      const stateTarget = location.state?.scrollTo as string | undefined
      const target = stateTarget || savedTarget || hashTarget

      if (target) {
        setScrollTarget(target)
        window.history.replaceState({}, document.title, location.pathname)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.key, location.hash])

  useEffect(() => {
    if (!scrollTarget) return

    let cancelled = false
    const scrollToElement = () => {
      const el = document.getElementById(scrollTarget)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return true
      }
      return false
    }

    const timers = [
      setTimeout(() => { if (!cancelled) scrollToElement() }, 60),
      setTimeout(() => { if (!cancelled) scrollToElement() }, 200),
      setTimeout(() => {
        if (!cancelled) {
          scrollToElement()
          setScrollTarget(null)
        }
      }, 450),
    ]

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [scrollTarget])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

function App() {
  return <AppContent />
}

export default App

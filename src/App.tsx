import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import AboutPreview from './components/AboutPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HydraulicProject from './pages/HydraulicProject'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 0)
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      })
    }
  }, [pathname, hash])

  return null
}

function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutPreview />
      <Contact />
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/hydraulic-ml"
          element={<HydraulicProject />}
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App
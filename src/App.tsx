import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import AboutPreview from './components/AboutPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HydraulicProject from './pages/HydraulicProject'

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
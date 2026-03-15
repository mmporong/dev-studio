import { Routes, Route } from 'react-router-dom'
import { OfficeProvider } from './contexts/OfficeContext'
import { NavBar } from './components/layout/NavBar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { ChroniclePage } from './pages/ChroniclePage'
import { OfficePage } from './pages/OfficePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ArchitecturePage } from './pages/ArchitecturePage'

function App() {
  return (
    <OfficeProvider>
      <div className="app-shell">
        <ScrollToTop />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chronicle" element={<ChroniclePage />} />
            <Route path="/office" element={<OfficePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </OfficeProvider>
  )
}

export default App

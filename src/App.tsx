import { Routes, Route, Navigate } from 'react-router-dom'
import { OfficeProvider } from './contexts/OfficeContext'
import { NavBar } from './components/layout/NavBar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { WorkPage } from './pages/WorkPage'
import { LogPage } from './pages/LogPage'
import { PlaygroundPage } from './pages/PlaygroundPage'

function App() {
  return (
    <OfficeProvider>
      <div className="app-shell">
        <ScrollToTop />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/log" element={<LogPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            {/* 구 경로 리디렉트 */}
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="/architecture" element={<Navigate to="/work" replace />} />
            <Route path="/chronicle" element={<Navigate to="/log" replace />} />
            <Route path="/office" element={<Navigate to="/playground" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </OfficeProvider>
  )
}

export default App

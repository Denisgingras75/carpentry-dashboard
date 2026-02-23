import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import PracticeLog from './pages/PracticeLog'
import LogDetail from './pages/LogDetail'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Checklist from './pages/Checklist'
import Skills from './pages/Skills'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/log" element={<PracticeLog />} />
        <Route path="/log/:id" element={<LogDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
    </Routes>
  )
}

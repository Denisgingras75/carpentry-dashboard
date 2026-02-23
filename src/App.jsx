import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Library from './pages/Library'
import JointDetail from './pages/JointDetail'
import WoodDetail from './pages/WoodDetail'
import QuickLog from './pages/QuickLog'
import PracticeLog from './pages/PracticeLog'
import LogDetail from './pages/LogDetail'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Checklist from './pages/Checklist'
import Skills from './pages/Skills'
import Resources from './pages/Resources'
import TechniqueDetail from './pages/TechniqueDetail'
import ProjectPlans from './pages/ProjectPlans'
import ProjectPlanDetail from './pages/ProjectPlanDetail'
import LayoutGuide from './pages/LayoutGuide'
import LayoutTopicDetail from './pages/LayoutTopicDetail'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Library />} />
        <Route path="/joint/:slug" element={<JointDetail />} />
        <Route path="/wood/:slug" element={<WoodDetail />} />
        <Route path="/log-entry" element={<QuickLog />} />
        <Route path="/log" element={<PracticeLog />} />
        <Route path="/log/:id" element={<LogDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/technique/:slug" element={<TechniqueDetail />} />
        <Route path="/plans" element={<ProjectPlans />} />
        <Route path="/plan/:slug" element={<ProjectPlanDetail />} />
        <Route path="/layout" element={<LayoutGuide />} />
        <Route path="/layout/:slug" element={<LayoutTopicDetail />} />
        <Route path="/resources" element={<Resources />} />
      </Route>
    </Routes>
  )
}

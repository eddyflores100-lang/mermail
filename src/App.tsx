import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import SkillOverview from './components/SkillOverview';
import WorkflowDemo from './components/WorkflowDemo';
import SkillMd from './components/SkillMd';
import Architecture from './components/Architecture';
import VideoDemo from './components/VideoDemo';
import Submission from './components/Submission';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-[#0a0b14] text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <SkillOverview />
      <WorkflowDemo />
      <Architecture />
      <SkillMd />
      <VideoDemo />
      <Submission />
      <Footer />
    </div>
  );
}

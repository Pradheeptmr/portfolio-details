import React from 'react'
import Header from './components/Header/Header'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import SkillContainer from './components/SkillContainer/SkillContainer'
import TopContainer from './components/TopContainer/TopContainer'
import "./App.css";
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <ExperienceContainer/>
      <Contact/>
      
    </div>
  )
}

export default App

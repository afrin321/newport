import { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import './App.css'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Hero/>
      <AboutMe/>      
      <Skills/>
      <Projects/>
      {/* <Work/> */}
      <Contact/>
      {/* <div className='h-screen'></div> */}
    </div>
  )
}

export default App

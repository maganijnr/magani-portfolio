import React from 'react'
import './index.css'
import About from '../../sections/About'
import Skills from '../../sections/Skills'
import Hero from '../../sections/Hero'
import Projects from '../../sections/Projects'
import Contact from '../../sections/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home

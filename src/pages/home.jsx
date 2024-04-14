import React from 'react'
import Hero from '../components/hero'
import Info from '../components/info'
import Competence from '../components/competence'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'

function Home() {
  return (
    <main>
    <Hero />
    <Info />
    <Competence />
    <Portfolio />
    <Contact />

    </main> 
  )
}

export default Home
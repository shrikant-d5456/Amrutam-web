// import React from 'react'
import Approach from './components/Approach'
import Consultant from './components/Consultant'
import DiscoverAayurveda from './components/DiscoverAayurveda'
import Experts from './components/Experts'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PlayStoreApp from './components/PlayStoreApp'
import Stories from './components/Stories'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <DiscoverAayurveda/>
    <Consultant/>
    <Approach/>
    <Stories/>
    <Experts/>
    <PlayStoreApp/>
    <Contact/>
    </>
  )
}

export default App

import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutMe from '../components/AboutMe/AboutMe'
import MySkills from '../components/MySkills/MySkills'
import Project from '../components/Project/Project'
import ContactMe from '../components/ContactMe/ContactMe'

const HomePage = () => {
  return (
   <>
   <Hero/>
   <AboutMe/>
   <MySkills/>
    <Project/>
    <ContactMe/>
   </>
  )
}

export default HomePage
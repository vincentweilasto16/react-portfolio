import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion'
import { cv, portfolio } from '../assets'

import { MdDownload } from "react-icons/md";

const ServiceCard = ({index, title, icon}) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        I like to find a new experience and also bring my skill for making the work of many people more easier. Combine all of my skill that i've collect to contribute in IT world. I will learn more by myself and from other people to improve my skills. Working in a team and have a solid teamwork to make something new and would be usefull. Finding the best and effecient solution that one step ahead to fix the problem. Failed from something will make me learn and keep trying for the solution.
      </motion.p>

      <motion.div  variants={fadeIn("", "", 0.1, 1)} className='md:mt-5 mt-10 flex md:flex-row flex-wrap md:gap-10 gap-5'>
        <a href={cv} download className='font-bold gap-3 flex md:flex-row align-center'>
          <MdDownload className='w-5 h-5' />
          <p>Download CV</p>
        </a>
        <a href={portfolio} download className='font-bold gap-3 flex md:flex-row align-center'>
          <MdDownload className='w-5 h-5' />
          <p>Download Portfolio</p>
        </a>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
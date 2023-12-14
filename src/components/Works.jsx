import React, { useState } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { projects } from '../constants'
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion'

import { IoMdPeople } from "react-icons/io";
import { BsFillCalendarDateFill } from "react-icons/bs";

const ProjectCard = ({index, project}) => {

  const [show, setShow] = useState(project.source_code_link != null ? true : false)

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ 
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img src={project.image} alt={project.name} className='w-full h-full object-cover rounded-2xl' />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className={(show == false ? 'hidden': '') + ' black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'}
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-2 flex flex-wrap gap-5 justify-center items-center text-white font-extralight text-[12px]'>
          <p># {project.type}</p>
          <div className='flex gap-1 items-center'>
              <IoMdPeople className='w-5 h-5' /> 
              <p>{project.people}</p>
          </div>
          <div className='flex gap-1 items-center'>
              <BsFillCalendarDateFill/> 
              <p>{project.date}</p>
          </div>
        </div>

        <div className='mt-7'>
          <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
          <p className='mt-3 text-secondary text-[14px]'>{project.description}</p>
          <div className='mt-3 text-secondary text-[14px]'>
            <p>Responsibilities : </p>
            <ul className='list-disc ml-5'>
              {project.responsibilities.map((responsibility, index) => (
                <li key={index} responsibility={responsibility} className='mt-2'>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories. It reflects my ability to solve omplex problems, work with different technologies, and manage projects effectively
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
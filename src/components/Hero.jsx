import { motion } from 'framer-motion'
import { styles } from '../styles'
import { profile } from '../assets'
import { fadeIn } from '../utils/motion'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <motion.div variants={fadeIn("", "", 0.1, 1)} className={`${styles.paddingX} absolute inset-0 md:top-[120px] top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex md:flex-row flex-col-reverse gap-5 items-center'>
          <div className='md:text-left text-center'>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915eff]'>Vincent Weilasto</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              I am a Software Engineer, <br className='sm:block hidden' />  develop both server and client side of the applications.
            </p>
          </div>
          <div>
            <img src={profile} alt="Vincent Weilasto" className='rounded-full w-full h-auto' />
          </div>
          {/* <div className='box'>
            <div className="content">
              <img src={profile} alt="Vincent Weilasto"/>
              <h2>
                Software Engineer
              </h2>
              <a href="#about">About me</a>
            </div>
          </div> */}
        </div>
      </motion.div>

      <div className='absolute xs:bottom-10 md:bottom-32 bottom-3 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] md:h-[64px] h-[52px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
              animate = {{
                y: [0, 24, 0]
              }}
              transition = {{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      
    </section>
  )
}

export default Hero
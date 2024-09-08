import React from 'react'
// images
import Images from '../assets/avatar.svg'
//icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'
//type animation
import { TypeAnimation } from 'react-type-animation'
//motion
import { motion } from 'framer-motion'
//vartains
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container max-auto">
        <div>
          {/* text */}
          <div>
            <h1>
              Zihadul <span>Islam</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              incidunt eligendi reprehenderit expedita iusto
            </p>
            <div>
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient bln-link">
                My portfolio
              </a>
            </div>
            {/* seciat */}
            <div>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </div>
          </div>
          {/* image */}
          <div>
            <img src={Images} alt="" />
          </div>
        </div>
      </div>
      Banner
    </section>
  )
}

export default Banner

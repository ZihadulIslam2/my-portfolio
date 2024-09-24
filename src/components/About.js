// import React from 'react'
// // countup
// import CountUp from 'react-countup'
// //intersection observer hook
// import { useInView } from 'react-intersection-observer'
// // motion
// import { motion } from 'framer-motion'
// // variant
// import { fadeIn } from '../variants'

// const About = () => {
//   const [ref, inview] = useInView({
//     threshold: 0.5,
//   })

//   return (
//     <section className="section" id="about" ref={ref}>
//       <div className="container mx-auto">
//         <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
//           {/* image */}
//           <motion.div
//             variants={fadeIn('right', 0.3)}
//             initial="hidden"
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
//           ></motion.div>
//           {/* text */}
//           <motion.div
//             variants={fadeIn('left', 0.5)}
//             initial="hidden"
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1"
//           >
//             <h2 className="h2 text-accent">About me.</h2>
//             <h3 className="h3 mb-4">
//               I'm A Freelancer Front-end Developer with over 5 year of
//               exparienct.
//             </h3>
//             <p className="mb-6">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
//               perferendis adipisci! Libero quae tempore unde! Dolore, aut
//               deleniti? Neque qui hic cumque nobis architecto consequuntur
//               doloremque sapiente non sit veritatis.
//             </p>
//             {/* states */}
//             <div className="flex gap-x-6 lg:gap-x-6 mb-12">
//               <div>
//                 <div className="text-[40px] font-tertiary text-gradient mb-2">
//                   {inview ? <CountUp start={0} end={13} duration={3} /> : null}
//                 </div>
//                 <div className="font-primary text-sm tracking-[2px]">
//                   Year of <br />
//                   experience
//                 </div>
//               </div>
//               <div>
//                 <div className="text-[40px] font-tertiary text-gradient mb-2">
//                   {inview ? <CountUp start={0} end={15} duration={3} /> : null}
//                   k+
//                 </div>
//                 <div className="font-primary text-sm tracking-[2px]">
//                   Projects <br />
//                   Completed
//                 </div>
//               </div>
//               <div>
//                 <div className="text-[40px] font-tertiary text-gradient mb-2">
//                   {inview ? <CountUp start={0} end={11} duration={3} /> : null}
//                   k+
//                 </div>
//                 <div className="font-primary text-sm tracking-[2px]">
//                   Satisfied <br />
//                   Clients
//                 </div>
//               </div>
//               <div className="flex gap-x-8 items-center">
//                 <button className="btn btn-lg">Contact me </button>
//                 <a href="#" className="text-gradient btn-link">
//                   My Portfolio
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About

import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <section
      className="mt-10 min-h-screen flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          >
            <img
              src="/path-to-your-image.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm A Freelancer Front-end Developer with over 5 years of
              experience.
            </h3>
            <p className="mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
              perferendis adipisci! Libero quae tempore unde! Dolore, aut
              deleniti? Neque qui hic cumque nobis architecto consequuntur
              doloremque sapiente non sit veritatis.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={11} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied
                  <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About






// import React from 'react'
// import CountUp from 'react-countup'
// import { useInView } from 'react-intersection-observer'
// import { motion } from 'framer-motion'
// import { fadeIn } from '../variants'

// const About = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.5,
//   })

//   return (
//     <section className="min-h-screen py-10 px-4" id="about" ref={ref}>
//       <div className="container mx-auto">
//         <motion.div
//           variants={fadeIn('up', 0.3)}
//           initial="hidden"
//           whileInView={'show'}
//           viewport={{ once: false, amount: 0.3 }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-3xl font-bold text-accent mb-4">ABOUT ME.</h2>
//           <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
//             <img
//               src="/path-to-your-image.jpg"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>

//         <motion.div
//           variants={fadeIn('up', 0.5)}
//           initial="hidden"
//           whileInView={'show'}
//           viewport={{ once: false, amount: 0.3 }}
//           className="text-center"
//         >
//           <h3 className="text-xl font-semibold mb-4">
//             I'm A Freelancer Front-end Developer with over 5 years of
//             experience.
//           </h3>
//           <p className="mb-6 text-sm">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
//             perferendis adipisci! Libero quae tempore unde! Dolore, aut
//             deleniti? Neque qui hic cumque nobis architecto consequuntur
//             doloremque sapiente non sit veritatis.
//           </p>

//           <div className="flex justify-around mb-8">
//             <div>
//               <div className="text-3xl font-bold text-gradient mb-1">
//                 {inView ? <CountUp start={0} end={13} duration={3} /> : null}
//               </div>
//               <div className="text-xs uppercase">
//                 Years of
//                 <br />
//                 Experience
//               </div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-gradient mb-1">
//                 {inView ? <CountUp start={0} end={15} duration={3} /> : null}k+
//               </div>
//               <div className="text-xs uppercase">
//                 Projects
//                 <br />
//                 Completed
//               </div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-gradient mb-1">
//                 {inView ? <CountUp start={0} end={11} duration={3} /> : null}k+
//               </div>
//               <div className="text-xs uppercase">
//                 Satisfied
//                 <br />
//                 Clients
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-4">
//             <button className="btn btn-lg w-full">Contact me</button>
//             <a href="#" className="text-gradient btn-link">
//               My Portfolio
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default About

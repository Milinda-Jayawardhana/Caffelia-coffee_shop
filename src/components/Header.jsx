import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav';
import { motion } from 'framer-motion';



export default function Header() {
  return (
    <>
      <motion.div
        className='container relative z-40 px-8 py-6 xl:py-8'
        initial={{ y: '-100%', opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}     
        transition={{ duration: 1, delay: 1 }} 
      >
        <div className='container flex items-center justify-start mx-auto gap-[100px]'>
          <Link to='/'>
            <h1 className='text-3xl font-bold text-[#E6E6E6]'>
              CAFFELIA<span className='text-[50px] font-extrabold text-black'>.</span>
            </h1>
          </Link>

          <div className='z-10 items-center hidden gap-8 md:flex'>
            <Nav />
          </div>
        </div>
      </motion.div>
    </>
  )
}





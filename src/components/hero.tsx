"use client"

import Image from 'next/image'

import React, { useEffect } from 'react'

import { motion, useAnimate } from "framer-motion" 

const Hero:React.FC = () => {
  
  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [rightDesignScope, rightDesignAnimate] = useAnimate()

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ])

  
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ])

  },[])

  return (
    <section className='container relative'>
      <motion.div
        ref={leftDesignScope}
        initial={{ opacity: 0, y: 100, x: -100 }}
        drag
        className='absolute left-64 top-[105px] hidden lg:block'
      >
        <Image
          src="/assets/images/star.png"
          alt='BACKGROUND IMAGE'
          width={100}
          height={100}
          draggable="false"
        />
      </motion.div>
      <motion.div
        ref={rightDesignScope}
        initial={{ opacity: 0, x: 100, y: 100 }}
        drag
        className='absolute right-80 top-[300px] hidden lg:block'
      >
        <Image
          src="/assets/images/star.png"
          alt='BACKGROUND IMAGE'
          width={100}
          height={100}
          draggable="false"
        />
      </motion.div>
    </section>
  )
}

export default Hero
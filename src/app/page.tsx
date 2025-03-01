"use client"

import React from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import { Button } from '@/components/ui/button'

import Hero from '@/components/hero'

import { motion } from 'framer-motion'

import { fadeIn } from '@/lib/motion'
import Navbar from '@/components/navbar'

const brandsOptions = [
  { title: "LOGOIPSUM", href: "#fetures" },
  { title: "LOGOIPSUM", href: "#howItWorks" },
  { title: "LOGOIPSUM", href: "#testimonials" },
  { title: "LOGOIPSUM", href: "#pricing" },
  { title: "LOGOIPSUM", href: "#faq" },
  { title: "LOGOIPSUM", href: "#testimonials" },
  { title: "LOGOIPSUM", href: "#pricing" },
  { title: "LOGOIPSUM", href: "#faq" },
  { title: "LOGOIPSUM", href: "#testimonials" },
  { title: "LOGOIPSUM", href: "#pricing" },
  { title: "LOGOIPSUM", href: "#faq" },
]

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex flex-col overflow-hidden h-full w-full bg-gradient-to-b from-[#0F0120] to-[#06000D] overflow-x-hidden">
      <Navbar />

      <Hero />

      <section className='flex flex-col space-y-8 mt-24 justify-center items-center px-5'>
        <Button className='rounded-full border-2 border-[#402260] bg-gradient-to-r from-[#35145F] to-[#17052F]'>
          <p className='font-semibold text-[#A286C3] text-sm'>
            ✨ Your AI account assistent
          </p>
        </Button>
        <h2 
          className='max-w-[1000px] text-center text-white font-semibold text-[64px]'
          style={{
            lineHeight: "60px"
          }}
        >
          Simplify Your <span className='bg-gradient-to-b from-[#E401FF] to-[#A05DFE] bg-clip-text text-transparent'>accounts</span> energy with AI-Powered Precision
        </h2>
        <p className='max-w-[537px] text-sm text-center font-medium text-[#9784B4]'>
          Effortlessly manage appointsments, meetings, and tasks with our intelifent scheducheling assist
        </p>
        <Button 
          className='rounded-full bg-gradient-to-b from-[#E400FF] to-[#A05EFE]'
          onClick={() => router.push("/simular")}
        >
          <p className='font-semibold text-white text-sm shadow-xl'>
            GET STARTED FOR FREE
          </p>
        </Button>
      </section>

      <section className='flex w-full items-center justify-center mt-10'>
        <Image
          src="/assets/images/background-hero.png"
          alt='BACKGROUND IMAGE'
          width={500}
          height={500}
        />
      </section>

      <section className='flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <motion.div
          animate={{
            x: '-50%',
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className='flex flex-none gap-24 pr-24'
        >
          {brandsOptions.map((brand, index) => {
            return (
              <div key={index}>
                <p className='w-36 text-lg text-white font-bold'>
                  {brand.title}
                </p>
              </div>
            )
          })}
        </motion.div>
      </section>

      <section id='features' className='flex flex-col space-y-8 mt-24 justify-center items-center px-5'>
        <Button className='rounded-full border-2 border-[#402260] bg-gradient-to-r from-[#35145F] to-[#17052F]'>
          <p className='font-semibold text-[#A286C3] text-sm'>
            ✨ Features
          </p>
        </Button>
        <h2 
          className='max-w-[1000px] text-center text-white font-semibold text-[64px]'
          style={{
            lineHeight: "60px"
          }}
        >
          Simplify Your <span className='bg-gradient-to-b from-[#E401FF] to-[#A05DFE] bg-clip-text text-transparent'>accounts</span> energy with AI-Powered Precision
        </h2>
        <p className='max-w-[537px] text-sm text-center font-medium text-[#9784B4]'>
          Effortlessly manage appointsments, meetings, and tasks with our intelifent scheducheling assist
        </p>
      </section>
      
      <section
        id='howItWork'
        className="flex flex-col lg:flex-row justify-around mt-20 items-center px-5"
      >
        <div className='flex flex-col space-y-8 justify-center items-start'>
          <Button className='rounded-full border-2 border-[#402260] bg-gradient-to-r from-[#35145F] to-[#17052F]'>
            <p className='font-semibold text-[#A286C3] text-sm'>
              ✨ How It Work
            </p>
          </Button>
          <h2 
            className='max-w-[534px] text-left text-white font-semibold text-[64px]'
            style={{
              lineHeight: "60px"
            }}
          >
            Simplify Your <span className='bg-gradient-to-b from-[#E401FF] to-[#A05DFE] bg-clip-text text-transparent'>accounts</span> energy with AI-Powered Precision
          </h2>
          <p className='max-w-[537px] text-sm text-left font-medium text-[#9784B4]'>
            Effortlessly manage appointsments, meetings, and tasks with our intelifent scheducheling assist
          </p>
        </div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Image
            src="/assets/images/hero-figure.png"
            alt='hero section image'
            width={658}
            height={766}
            className='object-cover'
          />
        </motion.div>
      </section>

      <section id='testimonials' className="flex flex-col gap-10 lg:flex-row-reverse my-24 justify-around items-center px-5">
        <div className='flex flex-col space-y-8 justify-center items-start'>
          <Button className='rounded-full border-2 border-[#402260] bg-gradient-to-r from-[#35145F] to-[#17052F]'>
            <p className='font-semibold text-[#A286C3] text-sm'>
              ✨ Testimonials
            </p>
          </Button>
          <h2 
            className='max-w-[534px] text-left text-white font-semibold text-[64px]'
            style={{
              lineHeight: "60px"
            }}
          >
            Simplify Your <span className='bg-gradient-to-b from-[#E401FF] to-[#A05DFE] bg-clip-text text-transparent'>accounts</span> energy with AI-Powered Precision
          </h2>
          <p className='max-w-[537px] text-sm text-left font-medium text-[#9784B4]'>
            Effortlessly manage appointsments, meetings, and tasks with our intelifent scheducheling assist
          </p>
        </div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Image
            src="/assets/images/hero-figure-2.png"
            alt='BACKGROUND IMAGE'
            width={600}
            height={700}
            className='object-cover'
          />
        </motion.div>
      </section>
    </main>
  )
}

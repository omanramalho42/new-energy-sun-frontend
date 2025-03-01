"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const Navbar:React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="w-full bg-white/2 backdrop-blur-md fixed top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link 
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <Image src="assets/icons/logo-purple.svg" width={64} height={64} alt="New Sun Energy Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            NEW SUN ENERGY
          </span>
        </Link>
        <Button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-purple-600 transition-all focus:outline-none focus:ring-2 focus:bg-purple-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" 
          aria-expanded="false"
          onClick={() => {
            setShow(value => !value)
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg 
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" 
            viewBox="0 0 17 14"
          >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
          </svg>
        </Button>
          <div
            className={cn("w-full md:block md:w-auto", !show && "hidden")}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 px-3 text-white bg-purple-700 rounded-sm md:bg-transparent md:text-purple-700 md:p-0 dark:text-white md:dark:text-purple-500" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/simular" className="block py-2 px-3  text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Simular
                </Link>
              </li>
              <li>
                <Link href="/listagem" className="block py-2 px-3  text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Listagem
                </Link>
              </li>
              <li>
                <Link 
                  href="#pricing"
                  className="block py-2 px-3 cursor-not-allowed text-gray-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="block py-2 px-3 cursor-not-allowed text-gray-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
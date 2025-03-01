import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className='h-screen bg-black w-full flex justify-center items-center my-auto'>
      <Image
        src="/assets/gifs/animation-loading.gif"
        width={300}
        height={300}
        className='object-contain'
        alt="Loading Logo"
      />
    </div>
  )
}

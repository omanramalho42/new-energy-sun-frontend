import { SignUp as SignUpClerk } from '@clerk/nextjs'
import Image from 'next/image'

export default function SignUp() {
  return (
    <main className='flex flex-col justify-center items-center w-full h-screen bg-[url(/assets/images/bg.jpg)] bg-no-repeat bg-cover bg-center'>
      <div className="relative">
        <Image
          src="/assets/icons/logo.png"
          alt='Logo'
          width={84}
          height={84}
          className='relative top-10 z-10 hover:scale-110 transition-all'
        />
      </div>
      <SignUpClerk />
    </main>
  )
}
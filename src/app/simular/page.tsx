import Link from 'next/link'

import { auth, currentUser } from '@clerk/nextjs/server'

import AccountEnergyForm from "@/components/forms/account-energy-form"
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Archive, ListOrdered } from "lucide-react"

export default async function Home() {
  const { userId } = await auth()
  // Protect the route by checking if the user is signed in
  if (!userId) {
    return <div>Sign in to view this page</div>
  }
  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()

  return (
    <main className="flex min-h-screen h-full justify-center items-center w-full bg-[url(/assets/images/bg-1.jpg)] bg-no-repeat bg-cover bg-center">
      <Card className="w-[587px] bg-slate-950 my-5 border-0">
        <CardHeader className="flex flex-col justify-start items-center gap-2">
          {/* <div className="w-full h-24 rounded-xl bg-[url(/assets/images/bg-1.jpg)] bg-no-repeat bg-cover bg-center" /> */}
            
          <div className="flex flex-row-reverse w-full justify-between">
            <div className="flex flex-row gap-2">
              <Button
                className='flex flex-row gap-2 items-center justify-between'
                variant="default"
                disabled
              >
                <Archive />
                Archive
              </Button>
              <Button
                className='flex flex-row gap-2 items-center justify-between'
                variant="default"
                disabled={false}
              >
                <ListOrdered />
                <Link href="/listagem" style={{ all: 'unset' }}>
                  View units
                </Link>
              </Button>
            </div>

            <div className="relative top-[-50px] flex flex-col gap-1">
              <Avatar className="w-16 h-16 mb-2">
                <AvatarImage
                  src={user?.imageUrl ?? "/assets/images/avatar.jpeg"}
                />
                <AvatarFallback>OR</AvatarFallback>
              </Avatar>
              <CardTitle className="text-white">
                {user?.firstName}
              </CardTitle>
              <CardDescription className="text-gray-500">
                {user?.primaryEmailAddress?.emailAddress}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative top-[-25px]">
          <AccountEnergyForm />
        </CardContent>

      </Card>
    </main>
  )
}

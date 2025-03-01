'use client'

import { useRouter } from 'next/navigation'

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

import { DataTableDemo } from '@/components/data-table'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import { PlusCircle, Slash } from 'lucide-react'

export default function Orders() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen h-full justify-center items-center w-full bg-[url(/assets/images/bg-1.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="absolute left-10 top-10">
        <Breadcrumb className="">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-gray-300 hover:text-white"
                href="/simular"
              >
                simular
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="text-white" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-gray-300 hover:text-white"
                href="/listagem"
              >
                listagem
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Card className="w-[587px] bg-slate-950 my-5 border-0">
        <CardHeader className="flex flex-col justify-start items-center gap-2">
          {/* <div className="w-full h-24 rounded-xl bg-[url(/assets/images/bg-1.jpg)] bg-no-repeat bg-cover bg-center" /> */}
            
          <div className="flex flex-row-reverse w-full justify-between">
            <div className="flex flex-row gap-2">
              <Button
                variant="default"
                onClick={() => router.push("/simular")}
              >
                <PlusCircle />
                  New lead
              </Button>
            </div>

            <div className="relative top-[-50px] flex flex-col gap-1">
              <Avatar className="w-16 h-16 mb-2">
                <AvatarImage src="/assets/images/avatar.jpeg" />
                <AvatarFallback>OR</AvatarFallback>
              </Avatar>
              <CardTitle className="text-white">
                Oman Ramalho
              </CardTitle>
              <CardDescription className="text-gray-500">
                omanapple42@hotmail.com
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative top-[-25px]">
          <DataTableDemo />
        </CardContent>

      </Card>
    </main>
  )
}

import { CardDemo } from "@/components/lead-card-info"
import { LineChart } from "@/components/line-chart"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

import axios from "axios"
import { Slash } from "lucide-react"
  
interface LeadProps {
  params: {
    leadId: string;
  };
}

interface PageProps {
  params: Promise<{
    leadId: string;
  }>;
}


export default async function Page({ params }: PageProps) {
  // Trate params como um Promise
  const resolvedParams = await params;

  const response =
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/app/lead/${resolvedParams.leadId}`)
  
  if (!response.data) {
    return null
  }
  
  return (
    <>
      <div className="absolute left-10 top-10">
        <Breadcrumb className="">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-gray-300 hover:text-white"
                href="/listagem"
              >
                units
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="text-white" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-gray-300 hover:text-white"
                href="/"
              >
                consumer
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="flex p-4 lg:flex-row flex-col gap-4 space-x-5 min-h-screen h-full justify-center items-center w-full bg-[url(/assets/images/bg-1.jpg)] bg-no-repeat bg-cover bg-center">
        <CardDemo lead={response.data} />
        
        <LineChart lead={response.data} />
      </main>
    </>
  )
}
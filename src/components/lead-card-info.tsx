"use client"

import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { sendMail } from "@/app/_actions/send-email"
import { toast } from "sonner"

interface CardProps extends React.ComponentProps<typeof Card> {
  lead: any;
}

export function CardDemo({ lead, className, ...props}: CardProps) {
  const [allowNotification, setAllowNotification] = useState(false);
  
  return (
    <Card className={cn("min-w-[400px] min-h-[400px] bg-gray-950 text-white", className)} {...props}>
      <CardHeader>
        <CardTitle>{lead.id}</CardTitle>
        <CardDescription>{lead.fullName}</CardDescription>
        <CardDescription>{lead.email}</CardDescription>
        <CardDescription>{lead.phone}</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notification
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to email.
            </p>
          </div>
          <Switch
            id="notify-mode"
            checked={allowNotification}
            onCheckedChange={setAllowNotification}
          />
        </div>
        <div>
          {lead.units.map((item: any, index: number) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Code: {item.codeOfConsumerUnit}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.framing}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.modelPhasic}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          disabled={!allowNotification}
          className="w-full"
          onClick={() => {
            try {
              sendMail({
                email: lead.email,
                subject: "NEW SUN ENERGY",
                text: "Account energy info"
              })
              toast.success("success to send email")
              toast.warning("Verify SecondFactor Auth")
            } catch (error) {
              console.log(error)
              toast.error("error to send email")
              toast.warning("Verify SecondFactor Auth")
            }
          }}
        >
          <Check />
          Submit to email
        </Button>
      </CardFooter>
    </Card>
  )
}

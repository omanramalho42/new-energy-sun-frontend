import type { Metadata } from "next"
import { Plus_Jakarta_Sans as FontSans } from "next/font/google"
import {
  ClerkProvider,
  SignOutButton,
} from '@clerk/nextjs'

import './globals.css'

import { Button } from "@/components/ui/button"

import { LogOut } from "lucide-react"
import { Toaster } from "@/components/ui/sonner"

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "New Sun Energy",
  description:
    "New Sun Energy",
  icons: {
    icon: "/assets/icons/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fontSans.variable} antialiased`}>
          {children}
          <Toaster />
          <div className="fixed left-2 bottom-10">
            <SignOutButton>
              <Button>
                <LogOut className="text-white" />
              </Button>
            </SignOutButton>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}

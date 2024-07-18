'use client'
import { ThemeProvider } from '@/components/theme-provider'
import Image from 'next/image'
import '@/app/styles/globals.css'

type RootLayoutProps = {
  children: React.ReactNode
  session: never
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-screen">
            <div className="hidden bg-muted lg:block">
              <Image
                src="/placeholder.svg"
                alt="Image"
                width="1920"
                height="1080"
                className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
            <div className="flex items-center justify-center py-12">
              <div className="mx-auto grid w-[350px] gap-6">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

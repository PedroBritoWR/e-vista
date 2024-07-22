import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import '@/app/styles/globals.css'
import Header from '@/components/header/Header'
import { Sidebar } from '@/components/sidebar'
import ThemeProvider from '@/components/theme-provider'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

type RootLayoutProps = {
  children: React.ReactNode
}
export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/')
  }

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
          <Header />
          <div className="flex w-full items-center justify-center">
            <div className="mx-auto grid w-full gap-6">
              <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <Sidebar />
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

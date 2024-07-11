import '@/app/styles/globals.css'
import Header from '@/components/header/Header'
import { Sidebar } from '@/components/sidebar'
import ThemeProvider from '@/components/theme-provider'

type RootLayoutProps = {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body>
        <Header />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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

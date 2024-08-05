// src/pages/dashboard.tsx

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  ShoppingCart,
  Users2,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Card } from '@/components/ui/card'
import { DataTable } from '@/components/paymentsDataTable/dataTable'
import { Payment, columns } from '@/components/paymentsDataTable/columns'
import { User } from '../../page'

const getData = async (): Promise<User[]> => {
  const response = await fetch('https://dummyjson.com/users')
  const data = await response.json()
  return data.users // ajuste de acordo com a estrutura de resposta da API
}

export default function Dashboard() {
  const [data, setData] = useState<Payment[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const users: User[] = await getData()

      const payments: Payment[] = users.map((user) => ({
        id: user.id.toString(),
        amount: 100,
        status: 'pending',
        email: user.email,
      }))
      setData(payments)
    }
    fetchData()
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="space-y-4 px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <h1 className="ml-6 text-2xl font-semibold tracking-tight">
              Alunos
            </h1>
            <Button size="sm" className="mr-6">
              <PlusCircle className="mr-2 h-4 w-4" />
              Adicionar Aluno
            </Button>
          </div>
          <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
            <div className="w-full">
              <Card className="w-full">
                <div className="container mx-auto w-screen py-10">
                  <DataTable columns={columns} data={data} />
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

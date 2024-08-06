'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DataTable } from '@/components/paymentsDataTable/dataTable'
import { Payment, columns } from '@/components/paymentsDataTable/columns'
import { User } from '../page'

const getData = async (): Promise<User[]> => {
  const response = await fetch('https://dummyjson.com/users')
  const data = await response.json()
  return data.users
}

export default function Dashboard() {
  const [data, setData] = useState<Payment[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const users: User[] = await getData()

      const payments: Payment[] = users.map((user) => ({
        id: user.id.toString(),
        name: user.firstName,
        age: user.age,
        gender: user.gender,
        birthDate: user.birthDate,
        eyeColor: user.eyeColor,
      }))
      setData(payments)
    }
    fetchData()
  }, [])

  return (
    <main className="flex min-h-screen w-full flex-col items-center space-y-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <Card className="w-full overflow-x-auto">
          <div className="w-full px-6 py-4">
            <div className="flex items-center justify-between pb-4">
              <h1 className="text-2xl font-semibold tracking-tight">Alunos</h1>
              <Button size="sm" className="ml-6">
                <PlusCircle className="mr-2 h-4 w-4" />
                <Link href="/inicial/aluno/cadastrar">Cadastrar Aluno</Link>
              </Button>
            </div>
            <div className="min-w-full overflow-x-auto">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}

// src/pages/dashboard.tsx

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DataTable } from '@/components/paymentsDataTable/dataTable'
import { Payment, columns } from '@/components/paymentsDataTable/columns'
import { User } from '../../page'

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
    <main className="flex w-screen flex-col items-center space-y-4 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full justify-end pt-6">
        <Button size="sm" className="mr-6">
          <PlusCircle className="mr-2 h-4 w-4" />
          <Link href="/pagina-inicial/aluno/alunos/cadastrar-aluno">
            Cadastrar Aluno
          </Link>
        </Button>
      </div>
      <div className="w-full max-w-4xl py-4">
        <Card className="w-full">
          <div className="container mx-auto py-4">
            <h1 className="text-2xl font-semibold tracking-tight">Alunos</h1>
            <DataTable columns={columns} data={data} />
          </div>
        </Card>
      </div>
    </main>
  )
}

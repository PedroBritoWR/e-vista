import { useEffect, useState } from 'react'
import { fetchOrders } from '@/app/api/auth/[...nextauth]/searchFilter'
import { useToast } from '@/components/ui/use-toast'
import { User } from '@/types/user'

export const useUserManagement = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<User[]>([])
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(
    null,
  )

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data: User[] = await fetchOrders()

        if (data.length === 0) {
          throw new Error('Invalid data format')
        }

        setUsers(data)
        setSelectedUserIndex(0)
      } catch (err) {
        if (err instanceof Error) {
          toast({
            title: 'Erro ao carregar usuários',
            description: err.message,
            variant: 'destructive',
            duration: 5000,
          })
        }
      } finally {
        setLoading(false)
      }
    }
    loadUsers()
  }, [toast])

  const handleNextUser = () => {
    if (selectedUserIndex !== null && selectedUserIndex < users.length - 1) {
      setSelectedUserIndex(selectedUserIndex + 1)
    }
  }

  const handlePreviousUser = () => {
    if (selectedUserIndex !== null && selectedUserIndex > 0) {
      setSelectedUserIndex(selectedUserIndex - 1)
    }
  }

  const handleRowClick = (index: number) => {
    setSelectedUserIndex(index)
  }

  const selectedUser =
    selectedUserIndex !== null ? users[selectedUserIndex] : null

  return {
    loading,
    users,
    selectedUser,
    selectedUserIndex,
    handleNextUser,
    handlePreviousUser,
    handleRowClick,
  }
}

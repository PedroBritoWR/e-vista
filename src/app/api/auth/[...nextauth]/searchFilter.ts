export async function fetchOrders() {
  const response = await fetch('https://dummyjson.com/users?limit=10')
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()
  return data.users
}

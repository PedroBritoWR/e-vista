export const calculateAge = (birthDate: string): number => {
  const today = new Date()
  const [day, month, year] = birthDate.split('/').map(Number)
  const birthDateObj = new Date(year, month - 1, day)
  let age = today.getFullYear() - birthDateObj.getFullYear()
  const monthDiff = today.getMonth() - birthDateObj.getMonth()

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--
  }

  return age
}

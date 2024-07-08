export function calculatePasswordStrength(password: string) {
  // Verifica se a senha não está vazia
  if (!password) {
    return {
      strength: '',
      message: 'Por favor, insira uma senha.',
    }
  }

  let strength = 'fraca'
  let message = 'Sua senha é fraca. '
  const lengthCriteria = password.length >= 6
  const uppercaseCriteria = /[A-Z]/.test(password)
  const lowercaseCriteria = /[a-z]/.test(password)
  const numberCriteria = /[0-9]/.test(password)
  const specialCharCriteria = /[^A-Za-z0-9]/.test(password)

  const passedCriteria = [
    lengthCriteria,
    uppercaseCriteria,
    lowercaseCriteria,
    numberCriteria,
    specialCharCriteria,
  ].filter(Boolean).length

  if (passedCriteria >= 4) {
    strength = 'forte'
    message = 'Sua senha é forte.'
  } else if (passedCriteria >= 2) {
    strength = 'média'
    message = 'Sua senha é média. '
    if (!lengthCriteria) message += 'Ela deve ter pelo menos 6 caracteres. '
    if (!uppercaseCriteria)
      message += 'Ela deve conter pelo menos uma letra maiúscula. '
    if (!lowercaseCriteria)
      message += 'Ela deve conter pelo menos uma letra minúscula. '
    if (!numberCriteria) message += 'Ela deve conter pelo menos um número. '
    if (!specialCharCriteria)
      message += 'Ela deve conter pelo menos um caractere especial. '
  } else {
    message +=
      'Ela deve ter pelo menos 6 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.'
  }

  return { strength, message }
}

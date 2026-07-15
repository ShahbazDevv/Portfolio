export interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function validateName(name: string): string | undefined {
  if (!name.trim()) return 'Name is required'
  if (name.trim().length < 2) return 'Name must be at least 2 characters'
  return undefined
}

export function validateEmail(email: string): string | undefined {
  if (!email.trim()) return 'Email is required'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim())) return 'Please enter a valid email address'
  return undefined
}

export function validateMessage(message: string): string | undefined {
  if (!message.trim()) return 'Message is required'
  if (message.trim().length < 10) return 'Message must be at least 10 characters'
  return undefined
}

export function validateForm(data: { name: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {}
  const nameError = validateName(data.name)
  const emailError = validateEmail(data.email)
  const messageError = validateMessage(data.message)
  if (nameError) errors.name = nameError
  if (emailError) errors.email = emailError
  if (messageError) errors.message = messageError
  return errors
}

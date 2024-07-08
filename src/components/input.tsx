import { Label } from './ui/label'
import { Input as InputShadcn } from './ui/input'
import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  requiredInput?: boolean
  error?: string
}

export function Input({ label, error, requiredInput, ...props }: InputProps) {
  return (
    <div className="grid gap-1">
      <div className="grid gap-2">
        <Label htmlFor={props.id} className="flex items-center gap-1">
          {label}

          {requiredInput && <span className="text-red-500">*</span>}
        </Label>

        <InputShadcn {...props} />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

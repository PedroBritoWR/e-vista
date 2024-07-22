import React, { InputHTMLAttributes } from 'react'
import { Label } from './ui/label'
import { Input as InputShadcn } from './ui/input'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  requiredInput?: boolean
  error?: string
  append?: React.ReactNode
}

export function Input({
  label,
  error,
  requiredInput,
  append,
  ...props
}: InputProps) {
  return (
    <div className="grid gap-1">
      <div className="grid gap-2">
        <Label htmlFor={props.id} className="flex items-center gap-1">
          {label}
          {requiredInput && <span className="text-red-500">*</span>}
        </Label>
        <div className="relative">
          <InputShadcn {...props} />
          {append && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {append}
            </div>
          )}
        </div>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

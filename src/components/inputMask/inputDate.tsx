import React from 'react'
import InputMask from 'react-input-mask'
import { Controller, Control } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { FormData } from '../../types/input-mask'

interface MaskedInputProps {
  control: Control<FormData>
  name: keyof FormData
  mask: string
  placeholder?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  control,
  name,
  mask,
  placeholder,
  defaultValue = '',
  className,
  onChange,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { onChange: fieldOnChange, onBlur, value, ref } }) => (
        <InputMask
          mask={mask}
          value={value || ''}
          onChange={(e) => {
            fieldOnChange(e.target.value)
            if (onChange) onChange(e.target.value)
          }}
          onBlur={onBlur}
          ref={ref}
          placeholder={placeholder}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
        />
      )}
    />
  )
}

export default MaskedInput

import { Label } from "./ui/label";
import { Input as InputShadcn } from "./ui/input";
import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={props.id}>{label}</Label>
      <InputShadcn  {...props} />
    </div>
  ) 
}
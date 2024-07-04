import { Input } from "@/components/input"
import Link from "next/link"


export default function RecoverPassword() {
return (
    <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Recupere sua senha</h1>
        <p className="text-balance text-muted-foreground">
          Digite seu e-mail abaixo para recuperar sua senha
        </p>
        <Input
        label="Email"
        type="email"
        id="email"
        placeholder="max@gmail.com" 
        required
        />
     <div className="mt-4 text-center text-sm">
        Voltar para{" "}
        <Link href="/cadastrar-se" className="underline">
          autenticação
        </Link>
      </div>
  </div>
)}
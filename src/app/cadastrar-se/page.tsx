import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import LoginForm from "@/components/PasswordValidator";
import { Input } from "@/components/input";

export default function Login() {
  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Cadastrar-se</h1>
        <p className="text-balance text-muted-foreground">
          Preencha os dados abaixo para criar sua conta.
        </p>
      </div>
      <div className="grid gap-4">
        <Input
          label="Nome completo"
          id="Name"
          type="text"
          placeholder="Max Fernandes Exemplo"
          required
        />
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="max@gmail.com"
          required
        />
        <Input
          label="Crie sua senha"
          id="senha"
          type="password"
          placeholder="*******"
          required
        />
        <Input
          label="Confirme sua senha"
          id="confirmar-senha"
          type="password"
          placeholder="*********"
          required
        />
       
        <Button type="submit" className="w-full">
          Criar conta
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Voltar para página{" "}
        <Link href="/" className="underline">
          Inicial
        </Link>
      </div>
    </>
  );
}

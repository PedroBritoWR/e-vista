import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/input";

export default function Login() {
  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Autenticação</h1>
        <p className="text-balance text-muted-foreground">
          Digite seu e-mail abaixo para fazer login em sua conta
        </p>
      </div>
      <div className="grid gap-4">
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="max@gmail.com"
          required
        />
        <div className="grid gap-2">
          <Input
            label="Crie sua senha"
            id="senha"
            type="password"
            placeholder="*******"
            required
          />
          <Link
            href="/recuperar-senha"
            className="ml-auto inline-block text-sm underline text-end w-full"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Ainda não tem uma conta?{" "}
        <Link href="/cadastrar-se" className="underline">
          Cadastre-se
        </Link>
      </div>
    </>
  );
}

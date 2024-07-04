"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

const validatePassword = (password: string): string => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return `A senha deve ter pelo menos ${minLength} caracteres.`;
  }
  if (!hasUpperCase) {
    return 'A senha deve ter pelo menos uma letra maiúscula.';
  }
  if (!hasLowerCase) {
    return 'A senha deve ter pelo menos uma letra minúscula.';
  }
  if (!hasNumbers) {
    return 'A senha deve ter pelo menos um número.';
  }
  if (!hasSpecialChar) {
    return 'A senha deve ter pelo menos um caractere especial.';
  }

  return '';
};

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const validationError = validatePassword(newPassword);
    setPasswordError(validationError);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationError = validatePassword(password);
    if (validationError) {
      setPasswordError(validationError);
    } else {
      // Processar o cadastro do usuário
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto max-w-xl border border-none p-4">
        <div className="text-xl text-center mb-4">Cadastrar-se</div>
        <div className="mb-2 text-center text-gray-600">
          Informe seus dados para realizar o cadastro.
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col w-full">
            <div className="grid gap-2">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Nome completo
              </label>
              <input id="first-name" placeholder="Max" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" disabled={passwordError !== ''}>
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

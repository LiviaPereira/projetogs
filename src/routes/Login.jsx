import React, { useState } from 'react';

export default function Login() {
  const [logado, setLogado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogado(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-50 font-montserrat">
      <form onSubmit={handleSubmit} className="bg-red-50 p-8 rounded shadow-md w-full max-w-sm animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center">Entrar no Alerta+</h2>
        {logado && <p className="mb-4 text-green-600 font-semibold">Login realizado com sucesso!</p>}
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" required />
        <input type="password" placeholder="Senha" className="w-full p-2 mb-4 border rounded" required />
        <button type="submit" className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition">Entrar</button>
      </form>
    </div>
  );
}

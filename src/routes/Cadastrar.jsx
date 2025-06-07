import React from 'react';
export default function Cadastrar() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 font-montserrat">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Criar Conta</h2>
        <input type="text" placeholder="Nome completo" className="w-full p-2 mb-4 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="Senha" className="w-full p-2 mb-4 border rounded" />
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Cadastrar</button>
      </form>
    </div>
  );
}

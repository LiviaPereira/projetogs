import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'teste@teste.com' && senha === '123456') {
      alert('Login bem-sucedido!');
    } else {
      setErro('E-mail ou senha incorretos.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleLogin}>
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
        {erro && <p className="text-red-500 text-sm mb-3">{erro}</p>}
        <input type="email" placeholder="E-mail" className="border p-2 w-full mb-3" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" className="border p-2 w-full mb-3" value={senha} onChange={e => setSenha(e.target.value)} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700">Entrar</button>
      </form>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center font-montserrat">
      <h1 className="text-xl font-bold">Alerta+</h1>
      <div className="space-x-4">
        <a href="/" className="hover:underline transition duration-300">Home</a>
        <a href="/sobre" className="hover:underline transition duration-300">Sobre</a>
        <a href="/solucao" className="hover:underline transition duration-300">Solução</a>
        <a href="/login" className="hover:underline transition duration-300">Login</a>
      </div>
    </nav>
  );
}

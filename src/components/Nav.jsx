import React from 'react';
import { Link } from 'react-router-dom';

import alertaBranco from '../img/alertabranco.png';

export default function Nav() {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center font-montserrat">
      <img src={alertaBranco} alt="Logo do projeto" className="h-10 w-auto ml-10" />
      <div className="space-x-4">
        <a href="/" className="hover:underline transition duration-300">Home</a>
        <a href="/sobre" className="hover:underline transition duration-300">Sobre</a>
        <a href="/solucao" className="hover:underline transition duration-300">Solução</a>
        <a href="/login" className="hover:underline transition duration-300">Login</a>
      </div>
    </nav>
  );
}
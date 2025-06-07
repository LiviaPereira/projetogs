import React from 'react';
import { Link } from 'react-router-dom';

import alertaBranco from '../img/alertabranco.png';

export default function Nav() {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center font-montserrat">
      {/* Apply w-X and h-X classes to the img tag */}
<<<<<<< HEAD
      <img src={alertaBranco} alt="Logo do projeto" className="h-10 w-auto" /> {/* Example: h-10 will set height to 40px */}
=======
      <img src={alertaBranco} alt="Logo do projeto" className="h-20 w-auto ml-10" /> {/* Example: h-10 will set height to 40px */}
>>>>>>> fe0600ea5692c8187eb8236815a3e0d1fea41c8b
      <div className="space-x-4">
        <a href="/" className="hover:underline transition duration-300">Home</a>
        <a href="/sobre" className="hover:underline transition duration-300">Sobre</a>
        <a href="/solucao" className="hover:underline transition duration-300">Solução</a>
        <a href="/login" className="hover:underline transition duration-300">Login</a>
      </div>
    </nav>
  );
}
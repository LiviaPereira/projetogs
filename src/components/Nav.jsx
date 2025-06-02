import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Global Solution</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/solucao">Solução</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
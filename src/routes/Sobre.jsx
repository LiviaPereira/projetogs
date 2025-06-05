import React from 'react';
export default function Sobre() {
  return (
    <section className="p-6 space-y-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-red-600">Por que criamos o Alerta+</h2>
      <p className="text-gray-700">
        O Brasil sofre anualmente com enchentes que causam danos materiais, perdas humanas e deslocamento de famílias.
        A falta de sistemas de prevenção e comunicação agrava ainda mais a situação.
      </p>

      <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-600">
        “As enchentes no Brasil mataram mais de 1.500 pessoas entre 2010 e 2022.” — Agência Brasil
      </blockquote>

      <p className="text-gray-700">
        Nossa equipe uniu conhecimentos em engenharia de software, design e internet das coisas para criar uma solução eficaz,
        escalável e acessível a toda a população.
      </p>

      <ul className="list-disc list-inside text-gray-700">
        <li>Prevenir tragédias com tecnologia</li>
        <li>Facilitar rotas de evacuação</li>
        <li>Salvar vidas</li>
      </ul>
    </section>
  );
}

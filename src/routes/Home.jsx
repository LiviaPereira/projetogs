import React, { useEffect } from 'react';
import './Home.css';

import enchente from '/img/enchente.png';

export default function Home() {
  const cards = [
    { title: "Enchentes em tempo real", desc: "Sensores monitoram o nível da água em tempo real." },
    { title: "Rota Segura", desc: "Geramos rotas de fuga evitando áreas alagadas." },
    { title: "Alertas Inteligentes", desc: "Você recebe notificações de risco diretamente no celular." }
  ];

  return (
    <main className="p-6 space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-2">Bem-vindo ao Alerta+</h1>
        <p className="text-gray-700 max-w-xl mx-auto">Solução tecnológica para prevenção de enchentes no Brasil, unindo sensores, dados e comunicação em tempo real.</p>
      </section>

      <img src={enchente} alt="Alerta+" className="mx-auto rounded-lg shadow-md max-w-2xl" />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg">
            <h2 className="text-xl font-semibold text-red-600">{c.title}</h2>
            <p className="text-gray-600">{c.desc}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-red-600 mb-2">Como Funciona?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Instalamos sensores de nível em pontos críticos da cidade.</li>
          <li>Os dados são enviados em tempo real para nossa central de monitoramento.</li>
          <li>Se detectado risco, o sistema envia alertas e traça rotas seguras via app e site.</li>
        </ul>
      </section>
    </main>
  );
}

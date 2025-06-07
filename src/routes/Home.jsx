import React, { useEffect } from 'react';

import enchente from '../img/enchente.png'; // Correct path to your image

export default function Home() {
  const featureCards = [
    { title: "Enchentes em tempo real", desc: "Sensores monitoram o nível da água em tempo real." },
    { title: "Rota Segura", desc: "Geramos rotas de fuga evitando áreas alagadas." },
    { title: "Alertas Inteligentes", desc: "Você recebe notificações de risco diretamente no celular." }
  ];

  const howItWorksSteps = [
    {
      title: "1. Monitoramento Inteligente",
      desc: "Instalamos uma rede de sensores de nível de água de última geração em pontos estratégicos e históricos de alagamento na cidade, coletando dados hidrométricos em tempo real com precisão e confiabilidade."
    },
    {
      title: "2. Análise e Processamento de Dados",
      desc: "Os dados dos sensores são transmitidos instantaneamente para nossa plataforma central. Algoritmos avançados de inteligência artificial analisam os níveis de água, prevendo com alta acurácia riscos de transbordamento e enchentes iminentes."
    },
    {
      title: "3. Alerta e Rotas de Segurança",
      desc: "Ao detectar um risco, nosso sistema dispara alertas automáticos e personalizados para os usuários cadastrados via SMS, WhatsApp e nosso aplicativo. Simultaneamente, são geradas e sugeridas rotas de fuga seguras, desviando de áreas já alagadas ou sob risco, tudo em tempo real."
    }
  ];

  return (
    <main className="p-6 space-y-12 animate-slide-up"> {/* Added animate-slide-up here */}
      {/* Welcome Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-2">Bem-vindo ao Alerta+</h1>
        <p className="text-gray-700 max-w-xl mx-auto">Solução tecnológica para prevenção de enchentes no Brasil, unindo sensores, dados e comunicação em tempo real.</p>
      </section>

      {/* Main Image - Added hover effect */}
      <img
        src={enchente}
        alt="Alerta+"
        className="mx-auto rounded-lg shadow-md max-w-2xl w-full h-auto block
                   transition-transform duration-300 hover:scale-105 hover:shadow-xl" // Added hover effects
      />

      {/* Feature Cards Section - Hover effects already added in previous iteration */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureCards.map((c, i) => (
          <div key={i} className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-red-600 mb-3">
              {c.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </section>

      {/* Como Funciona? Section - Hover effects already added in previous iteration */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Como Funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="bg-white p-8 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
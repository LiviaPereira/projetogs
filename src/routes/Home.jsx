import React, { useEffect } from 'react';
import './Home.css';

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 pt-24 md:pt-32">
      <section className="max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4 animate-fade-in-down">
          Enchentes no Brasil
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in">
          Soluções tecnológicas para salvar vidas e transformar cidades
        </p>
        <a href="/solucao" className="inline-block bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 animate-fade-in-up">
          Saiba mais
        </a>
      </section>
      <section className="mt-12 animate-fade-in-up">
        <img src="/img/enchente.png" alt="Ilustração de enchente" className="max-w-full h-auto rounded-lg shadow-xl" />
      </section>
    </main>
  );
}
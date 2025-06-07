import React from 'react';

export default function Solucao() {
  return (
    <section className="p-8 space-y-12 max-w-5xl mx-auto font-montserrat bg-gray-50 rounded-xl shadow-2xl my-12 animate-slide-up">
      <h2 className="text-4xl font-extrabold text-red-700 text-center leading-tight">
        Entenda o Funcionamento da Nossa Solução Alerta+
      </h2>

      <p className="text-gray-800 text-xl leading-relaxed text-center max-w-3xl mx-auto">
        O sistema Alerta+ integra tecnologia de ponta para garantir a segurança da sua comunidade. De sensores inteligentes a algoritmos de análise, tudo é projetado para uma resposta rápida e eficaz em situações de risco.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 flex flex-col items-center text-center
                    transition-all duration-300 transform hover:scale-103 hover:shadow-xl">
          <h3 className="text-3xl font-bold text-red-600 mb-6 flex items-center justify-center">
            <span className="mr-3 text-red-500">⚙️</span> Tecnologias Essenciais
          </h3>
          <ul className="list-none space-y-3 text-gray-700 text-lg">
            <li className="flex items-center">
              <span className="text-red-500 text-2xl mr-2">•</span> React + Vite + Tailwind (Frontend)
            </li>
            <li className="flex items-center">
              <span className="text-red-500 text-2xl mr-2">•</span> Node-RED + MQTT (Processamento de Dados IoT)
            </li>
            <li className="flex items-center">
              <span className="text-red-500 text-2xl mr-2">•</span> Google Maps API (Mapeamento e Rotas Seguras)
            </li>
            <li className="flex items-center">
              <span className="text-red-500 text-2xl mr-2">•</span> Sensores com Arduino/ESP32 (Coleta de Dados de Campo)
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 flex flex-col items-center text-center
                    transition-all duration-300 transform hover:scale-103 hover:shadow-xl">
          <h3 className="text-3xl font-bold text-green-600 mb-6 flex items-center justify-center">
            <span className="mr-3 text-green-500">➡️</span> Fluxo Operacional
          </h3>
          <ol className="list-none space-y-3 text-gray-700 text-lg">
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-2">1.</span> Sensores detectam aumento crítico de nível da água.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-2">2.</span> Dados são enviados para a nuvem em tempo real via MQTT.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-2">3.</span> Servidor analisa dados e emite alertas automatizados.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-2">4.</span> Usuário recebe notificação e rota de fuga segura.
            </li>
          </ol>
        </div>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed text-center pt-8 border-t border-gray-200">
        Com o Alerta+, você tem uma ferramenta poderosa para proteger o que mais importa: sua vida e sua família. Nossa tecnologia é a sua segurança.
      </p>
    </section>
  );
}
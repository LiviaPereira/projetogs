import React from 'react';
export default function Solucao() {
  return (
    <section className="p-6 space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-red-600">Como a solução funciona</h2>

      <p className="text-gray-700">
        O sistema Alerta+ é composto por sensores de nível de água conectados a uma plataforma IoT. Esses dados são processados em tempo real
        e utilizados para emitir alertas à população e traçar rotas de fuga seguras via Google Maps API.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded shadow">
          <h3 className="font-bold text-lg text-red-600">Tecnologias usadas</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>React + Vite + Tailwind</li>
            <li>Node-RED + MQTT</li>
            <li>Google Maps API</li>
            <li>Sensores com Arduino/ESP32</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded shadow">
          <h3 className="font-bold text-lg text-green-600">Fluxo do sistema</h3>
          <ol className="list-decimal list-inside text-gray-700">
            <li>Sensores detectam aumento de nível da água</li>
            <li>Dados enviados para nuvem via MQTT</li>
            <li>Servidor analisa e emite alertas</li>
            <li>Usuário recebe notificação e rota segura</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

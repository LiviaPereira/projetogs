import React from 'react';
export default function Error() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-red-600">Erro 404</h1>
      <p className="text-gray-700 mt-4">Página não encontrada.</p>
      <a href="/" className="text-blue-600 underline">Voltar para a página inicial</a>
    </div>
  );
}

import React from 'react';

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8 font-montserrat text-center">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-md w-full animate-fade-in">
        <h1 className="text-6xl font-extrabold text-red-700 mb-4 animate-bounce-in">
          Erro 404
        </h1>
        <p className="text-gray-800 text-xl mb-6">
          Ops! Parece que a página que você está procurando não foi encontrada.
        </p>
        <p className="text-gray-600 mb-8">
          Isso pode ter acontecido porque o endereço foi digitado incorretamente ou a página foi removida.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
          </svg>
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
}
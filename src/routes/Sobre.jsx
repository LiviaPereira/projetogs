import React from 'react';

export default function Sobre() {
  return (
    <section className="p-8 space-y-10 max-w-4xl mx-auto font-montserrat bg-white shadow-xl rounded-lg my-12 animate-slide-up">
      {/* Section Title - Centered and more prominent */}
      <h2 className="text-4xl font-extrabold text-red-700 text-center mb-6">
        Por que criamos o Alerta+?
      </h2>

      {/* Introduction Paragraph - Enhanced readability */}
      <p className="text-gray-800 text-lg leading-relaxed mb-4">
        O Brasil, lamentavelmente, enfrenta anualmente a devastação causada por enchentes, que resultam em perdas materiais significativas, danos irreparáveis a infraestruturas e, o mais trágico, a perda de vidas e o deslocamento de inúmeras famílias. A ausência de sistemas eficazes de prevenção e uma comunicação de alerta falha ou tardia agravam drasticamente a vulnerabilidade de comunidades inteiras.
      </p>

      {/* Blockquote - More impactful and styled */}
      <blockquote className="relative p-6 border-l-4 border-red-600 bg-red-50/50 text-red-800 italic rounded-r-lg shadow-inner">
        <p className="mb-2 text-xl font-semibold">
          “As enchentes no Brasil mataram mais de 1.500 pessoas entre 2010 e 2022.”
        </p>
        <footer className="text-right text-sm font-medium">— Agência Brasil</footer>
      </blockquote>

      {/* Development Story Paragraph - More detailed and inspiring */}
      <p className="text-gray-800 text-lg leading-relaxed mb-4">
        Diante dessa realidade desafiadora, nossa equipe multidisciplinar, composta por especialistas em engenharia de software, design de experiência do usuário (UX/UI) e internet das coisas (IoT), uniu forças com um propósito comum: desenvolver uma solução verdadeiramente eficaz. Nosso objetivo foi criar uma plataforma tecnológica que fosse não apenas escalável e robusta, mas, acima de tudo, acessível e intuitiva para toda a população brasileira.
      </p>

      {/* Key Objectives List - Already has hover effects on li elements */}
      <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4 text-center">Nossos Objetivos Principais:</h3>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* These li items already have hover:shadow-md and transition-shadow */}
        <li className="bg-red-50 border border-red-200 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
          <span className="text-red-600 text-4xl mb-2 block">💡</span>
          <p className="text-gray-800 text-lg font-semibold ">Prevenir tragédias com tecnologia avançada.</p>
        </li>
        <li className="bg-red-50 border border-red-200 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
          <span className="text-red-600 text-4xl mb-2 block">🗺️</span>
          <p className="text-gray-800 text-lg font-semibold">Facilitar rotas de evacuação seguras e eficientes.</p>
        </li>
        <li className="bg-red-50 border border-red-200 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
          <span className="text-red-600 text-4xl mb-2 block">❤️</span>
          <p className="text-gray-800 text-lg font-semibold">Salvar vidas e proteger o bem-estar das comunidades.</p>
        </li>
      </ul>
    </section>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md perspective">
        <div className="relative w-full h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "register"}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -180 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full rounded-2xl shadow-xl bg-white backface-hidden px-8 py-6 flex flex-col justify-center"
            >
              {isLogin ? <LoginForm toggleForm={toggleForm} /> : <RegisterForm toggleForm={toggleForm} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function LoginForm({ toggleForm }) {
  return (
    <>
      <h2 className="text-3xl text-red-600 font-bold text-center mb-6">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="password"
        placeholder="Senha"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-900">Entrar</button>
      <p className="mt-4 text-center text-sm">
        Não tem uma conta?{' '}
        <button onClick={toggleForm} className="text-red-600 hover:underline">Cadastre-se</button>
      </p>
    </>
  );
}

function RegisterForm({ toggleForm }) {
  return (
    <>
      <h2 className="text-2xl text-red-600 font-bold text-center mb-6">Cadastre-se</h2>
      <input
        type="text"
        placeholder="Nome"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="email"
        placeholder="Email"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="password"
        placeholder="Senha"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-900">Cadastrar</button>
      <p className="mt-4 text-center text-sm">
        Já tem uma conta?{' '}
        <button onClick={toggleForm} className="text-red-600 hover:underline">Entrar</button>
      </p>
    </>
  );
}


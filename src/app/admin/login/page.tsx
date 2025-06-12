"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/Contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { setData } = useContext(AuthContext);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (authData.username === "" || authData.password === "") {
      setLoginError("Usuário e senha são obrigatórios");
      return;
    }

    setData(authData);
    router.push("/admin");
  };

  return (
    <>
      {/* Modal de Login */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Login</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Para criar um post, você precisa fazer login primeiro.
          </p>

          {loginError && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Usuário
              </label>
              <input
                type="text"
                id="username"
                value={authData.username}
                onChange={(e) =>
                  setAuthData({ ...authData, username: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite seu usuário"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={authData.password}
                onChange={(e) =>
                  setAuthData({ ...authData, password: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite sua senha"
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

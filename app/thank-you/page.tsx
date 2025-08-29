"use client";
import { useEffect, useState } from "react";
import Confetti from "@/app/components/Confetti";

export default function ThankYouPage() {
  const [user, setUser] = useState<{ name: string; email: string; password: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
        <Confetti />
      {user ? (
        <div className="bg-white rounded-4xl shadow-soft-gray p-8 max-w-md w-full text-black flex flex-col gap-10">
          <h1 className="text-2xl font-bold text-center text-black">¡Registro Exitoso!</h1>

          <div className="space-y-3">
            <p className="text-lg"><span className="font-semibold">Nombre:</span> {user.name}</p>
            <p className="text-lg"><span className="font-semibold">Email:</span> {user.email}</p>
            <p className="text-lg"><span className="font-semibold">Contraseña:</span> {user.password}</p>
          </div>

          <button
            onClick={() => window.location.href = "/signup"}
            className="bg-primary text-white py-2 px-6 rounded-full shadow-custom-inset hover:opacity-90 transition-opacity duration-300 self-center"
          >
            Volver al registro
          </button>
        </div>
      ) : (
        <p className="text-center text-red-500 text-lg">No existe un usuario registrado</p>
      )}
    </div>
  );
}

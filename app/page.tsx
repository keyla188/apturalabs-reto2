"use client";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-items-center min-h-screen p-8 w-full">
      <div className="w-full flex flex-col gap-6 items-center text-center">

        <div className="bg-black text-white py-2 px-3 rounded-full w-fit">
          <p>RETO 2</p>
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold">
          Bienvenido al reto 2
        </h2>
        <p className="text-gray-600 text-lg">
          Darle click al boton para iniciar el reto de Login.
        </p>
        <button
          onClick={() => window.location.href = "/signup"}
          className="w-fit relative overflow-hidden bg-white py-2 px-6 rounded-full text-center
         transition-opacity duration-300 hover:opacity-60 text-lg"
        >
          Ir a login
        </button>
      </div>
    </div>
  );
}

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validación básica
        if (!name || !email || !password) {
            setError("Todos los campos son requeridos");
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Ingresa un correo válido");
            return;
        }

        // Validar contraseña (mínimo 6 caracteres)
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        setError(""); 

        const user = { name, email, password };

        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

            if (!res.ok) {
                setError("Hubo un error al registrarte");
                return;
            }

            localStorage.setItem("user", JSON.stringify(user));
            router.push("/thank-you");
        } catch (err) {
            setError("Hubo un error al conectarse con la API");
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-background ">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-96 bg-white p-6 rounded-4xl shadow-soft-gray flex flex-col items-center justify-center gap-5  text-black"
            >
                <h1 className="text-2xl font-bold text-center">Registro</h1>

                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-solid border-gray-border py-2 px-4 rounded-xl outline-none"
                />

                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-solid border-gray-border py-2 px-4 rounded-xl outline-none"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-solid border-gray-border py-2 px-4 rounded-xl outline-none"
                />

                {error && (
                    <p className="text-red-500 text-sm w-full text-left mt-1">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-fit relative overflow-hidden bg-primary text-white py-2 px-6 rounded-full shadow-custom-inset group text-center"
                >
                    <span className="relative z-10">Registrarme</span>
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-0 h-[200%] w-2/3
            bg-gradient-to-r from-transparent via-white/70 to-transparent
            -translate-x-[150%] rotate-12 transform
            opacity-0 blur-md
            transition-all duration-[1300ms] ease-in-out
            group-hover:translate-x-[300%] group-hover:opacity-90"
                    ></span>
                </button>
            </form>
        </div>
    );
}

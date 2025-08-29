import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await req.json();
  console.log("Usuario recibido:", user);
  return NextResponse.json({ message: "Usuario recibido correctamente" });
}

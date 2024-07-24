import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader) {
    return NextResponse.json(
      { error: "Authorization header missing" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Token missing" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ user: decoded });
  } catch (error) {
    console.error("JWT verification failed:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

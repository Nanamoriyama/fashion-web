import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// 環境変数からJWTの秘密鍵を取得
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function authMiddleware(req: NextRequest) {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

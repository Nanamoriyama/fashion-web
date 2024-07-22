import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getUsers } from "../userStorage";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

interface User {
  username: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const users = getUsers();
    const user = users.find((u: User) => u.email === email);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json({
      message: "Logged in successfully",
      token,
      user: { email: user.email, username: user.username },
    });
  } catch (error) {
    console.error(`Error during login: ${(error as Error).message}`);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

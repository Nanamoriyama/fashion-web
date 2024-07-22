import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { saveUser, getUsers } from "../userStorage";

interface User {
  username: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = (await req.json()) as User;

    const users = getUsers();
    if (users.find((u: User) => u.email === email)) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    saveUser({
      username,
      email,
      password: hashedPassword,
    });

    console.log("Registered users:", getUsers());

    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    console.error(`Error during registration: ${(error as Error).message}`);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

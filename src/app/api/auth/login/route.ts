import { NextRequest, NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../firebaseConfig"; // パスを適切に修正

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    console.log("Received data:", { email, password });

    if (!email || !password) {
      console.log("Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return NextResponse.json({ user });
  } catch (error) {
    console.log("Error during login:", (error as Error).message);
    if ((error as Error).message.includes("auth/wrong-password")) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 400 }
      );
    }
    if ((error as Error).message.includes("auth/user-not-found")) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}

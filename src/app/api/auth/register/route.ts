import { NextRequest, NextResponse } from "next/server";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../firebaseConfig"; // パスを適切に修正
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(req: NextRequest) {
  try {
    const { email, password, username } = await req.json();
    console.log("Received data:", { email, password, username });

    if (!email || !password || !username) {
      console.log("Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      console.log("Invalid email address");
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      console.log("Password too short");
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Firestoreにユーザー情報を保存
    await setDoc(doc(db, "users", user.uid), {
      username,
      email,
      createdAt: new Date(),
    });

    return NextResponse.json({ user });
  } catch (error) {
    console.log("Error during registration:", (error as Error).message);
    if ((error as Error).message.includes("auth/email-already-in-use")) {
      return NextResponse.json(
        { error: "Email is already in use" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}

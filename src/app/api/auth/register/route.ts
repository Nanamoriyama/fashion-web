import { NextRequest, NextResponse } from "next/server";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../firebaseConfig"; // 適切なパスに修正
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();
    console.log("Received data:", { email, password, name });

    if (!email || !password || !name) {
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

    console.log("User created:", user);

    // Firestore へのデータ保存
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, {
      name,
      email,
    });

    console.log("User data saved to Firestore");

    return NextResponse.json({
      user: { uid: user.uid, email: user.email, name },
    });
  } catch (error) {
    console.log("Error during registration:", (error as Error).message);

    // Firebase エラーコードに基づくエラーハンドリング
    if ((error as Error).message.includes("auth/email-already-in-use")) {
      return NextResponse.json(
        { error: "Email is already in use" },
        { status: 400 }
      );
    }

    // 他のエラーの場合
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 } // サーバーエラーの場合は 500 を返す
    );
  }
}

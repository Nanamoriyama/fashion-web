import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "../../../middleware/auth";

export async function GET(req: NextRequest) {
  const response = await authMiddleware(req);

  if (response.status === 401) {
    return response;
  }

  return NextResponse.json({ message: "This is a protected route" });
}

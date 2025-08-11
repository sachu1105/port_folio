import { NextResponse } from "next/server";
import { users } from "../route"; // reuse from main route

export async function GET(request: Request,{ params }: { params: { id: string } }) 
{
  const userId = parseInt(params.id, 10);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

import { NextResponse } from "next/server";

export const users = [
  { id: 1, name: "John Doe", email: "1NQ2Y@example.com", username: "johndoe" },
  { id: 2, name: "Jane Smith", email: "jane.smith@domain", username: "janesmith" }
];

export async function GET(request: Request) {
  return NextResponse.json(users);
}

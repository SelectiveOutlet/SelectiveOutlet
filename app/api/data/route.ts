import { NextResponse } from "next/server";
import { getShoes } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const shoes = await getShoes();
    return NextResponse.json({ shoes });
  } catch (error) {
    console.error("[GET /api/data]", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

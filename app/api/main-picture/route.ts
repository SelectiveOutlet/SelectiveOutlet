import { NextResponse } from "next/server";
import { getMainPicture } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const mainPicture = await getMainPicture();
    return NextResponse.json({ mainPicture });
  } catch (error) {
    console.error("[GET /api/main-picture]", error);
    return NextResponse.json(
      { error: "Failed to fetch main picture" },
      { status: 500 }
    );
  }
}

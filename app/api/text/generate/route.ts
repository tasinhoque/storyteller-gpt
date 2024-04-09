import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const {
    nextUrl: { searchParams },
  } = req;

  console.log("Breakpoint Hit");

  return NextResponse.json({
    message: "File uploaded successfully",
    keyword: searchParams.get("keyword"),
  });
};

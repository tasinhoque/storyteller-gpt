import { NextResponse } from "next/server";

export const POST = async () => {
  console.log("Breakpoint Hit");

  return NextResponse.json({
    message: "File uploaded successfully",
  });
};

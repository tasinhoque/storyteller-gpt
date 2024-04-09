import { NextRequest, NextResponse } from "next/server";
import { generateImage } from "@/utils/openAIHandler";
import { NextError } from "../../types";

export const POST = async (req: NextRequest) => {
  try {
    const { description } = await req.json();
    const url = await generateImage(description);

    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json(
      { error: (error as NextError).error.message },
      { status: 400 }
    );
  }
};

import { NextRequest, NextResponse } from "next/server";
import { generateImage } from "@/utils/openAiHandler";
import { OpenAiApiError } from "../../types";

export const POST = async (req: NextRequest) => {
  try {
    const { description } = await req.json();
    const url = await generateImage(description);

    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json(
      { error: (error as OpenAiApiError).error.message },
      { status: 400 }
    );
  }
};

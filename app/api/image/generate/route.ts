import { NextRequest, NextResponse } from "next/server";
import { generateImage } from "@/utils/openAiHandler";
import { OpenAIApiError } from "../../types";

export const POST = async (req: NextRequest) => {
  try {
    const { description } = await req.json();
    const url = await generateImage(description);

    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json(
      { message: (error as OpenAIApiError).error.message },
      { status: 400 }
    );
  }
};

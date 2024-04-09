import { NextRequest, NextResponse } from "next/server";
import { describeImage } from "@/utils/openAiHandler";
import { OpenAiApiError } from "../../types";
import { isRequestRejected, error } from "@/utils/safetyChecking";

export const POST = async (req: NextRequest) => {
  try {
    const { url } = await req.json();
    const message = await describeImage(url);

    if (isRequestRejected(message)) {
      return NextResponse.json({ error }, { status: 400 });
    } else {
      return NextResponse.json({ message });
    }
  } catch (error) {
    return NextResponse.json(
      { message: (error as OpenAiApiError).error.message },
      { status: 400 }
    );
  }
};

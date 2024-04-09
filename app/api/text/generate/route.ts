import { NextRequest, NextResponse } from "next/server";
import { chat } from "@/utils/openAIHandler";
import { NextError } from "../../types";
import { isRequestRejected, error } from "@/utils/safetyChecking";

export const POST = async (req: NextRequest) => {
  try {
    const { prompt } = await req.json();
    const message = await chat(prompt);

    if (isRequestRejected(message)) {
      return NextResponse.json({ error }, { status: 400 });
    } else {
      return NextResponse.json({ message });
    }
  } catch (error) {
    return NextResponse.json(
      { error: (error as NextError).error.message },
      { status: 400 }
    );
  }
};

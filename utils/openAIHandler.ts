import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateImage = async (prompt: string) => {
  const response = await openai.images.generate({
    model: "dall-e-2",
    prompt,
    n: 1,
    size: "256x256",
  });

  return response.data[0].url ?? "";
};

export const generateText = async (
  model: string,
  content: string | OpenAI.Chat.Completions.ChatCompletionContentPart[]
) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content }],
    model,
  });

  return completion.choices[0].message.content ?? "";
};

export const describeImage = async (url: string) =>
  generateText("gpt-4-vision-preview", [
    { type: "text", text: "What's in this image?" },
    { type: "image_url", image_url: { url } },
  ]);

export const chat = async (prompt: string) =>
  generateText("gpt-3.5-turbo", prompt);

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateImage = async (prompt: string) => {
  const response = await openai.images.generate({
    model: "dall-e-2",
    prompt,
    n: 1,
    size: "512x512",
  });

  return response.data[0].url ?? "";
};

export const generateText = async (prompt: string) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content ?? "";
};

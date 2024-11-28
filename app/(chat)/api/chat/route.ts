export const dynamic = "force-static";

import { bedrock } from "@ai-sdk/amazon-bedrock";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function GET() {
  //   const res = await fetch('https://data.mongodb-api.com/...', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY,
  //     },
  //   })
  //   const data = await res.json()

  return Response.json({ ai_text: "text" });
}

// prompt: "Write a vegetarian lasagna recipe for 4 people.",

export async function POST(req: Request) {
  const { messages } = await req.json();

  // const result = streamText({
  //   model: bedrock("anthropic.claude-3-5-sonnet-20240620-v1:0"),
  //   messages,
  // });

  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    messages,
    // async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
    //   // implement your own storage logic:
    //   await saveChat({ text, toolCalls, toolResults });
    // },
  });

  return result.toDataStreamResponse();
}

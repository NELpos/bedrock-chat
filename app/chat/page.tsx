"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch ">
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap ">
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full max-w-md mb-8 border border-gray-300 rounded shadow-xl"
      >
        <div className="flex items-center">
          <Input
            className="flex-grow p-2 text-neutral-900"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
          <Button
            className="p-2 text-white bg-neutral-800 rounded"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

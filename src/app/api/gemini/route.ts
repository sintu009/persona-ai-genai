"use server";

import { GoogleGenAI } from "@google/genai";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  revalidatePath("/");
  try {
    const { historyChat, recentMessage, teacherDetails } = await req.json();

    const formattedHistory = historyChat.map((msg: any) => ([
      { role: "user", parts: [{ text: msg.User }] },
      { role: "model", parts: [{ text: msg.model }] }
    ])).flat();

    const personaText = typeof teacherDetails === "string"
      ? teacherDetails
      : JSON.stringify(teacherDetails);

    const chatSession = await ai.chats.create({
      model: "gemini-2.5-flash",
      history: formattedHistory,
      config: {
        systemInstruction: { role: "system", parts: [{ text: personaText }] }
      }
    });

    const res1 = await chatSession.sendMessage({ message: recentMessage });

    // console.log("Chat response 1:", res1.text);
    return NextResponse.json(
      { msg: "All Set", status: true, data: res1.text },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Failed to get Response", status: false },
      { status: 400 }
    );
  }
}

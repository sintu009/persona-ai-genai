# Persona AI Chat App

![Persona AI Screenshot](http://res.cloudinary.com/dakddv1pm/image/upload/v1755223910/posts/xzn8onfchijvzuwhqukx.png)

## 📌 Overview
The **Persona AI Chat App** is a Next.js-based application that allows users to interact with an AI that takes on the personality, speaking style, and knowledge of a given persona.

You can define any persona (e.g., a teacher, celebrity, fictional character) by providing detailed background information, personality traits, and communication style. The app then uses this persona data to guide AI responses, ensuring the chatbot stays in character throughout the conversation.

---

## 🚀 Features
- **Custom Persona Support** – Define traits, background, and speaking style for any AI character.
- **Conversation Memory** – Keeps track of previous messages for more natural responses.
- **Powered by Gemini API** – Utilizes Google's `gemini-2.5-flash` model for fast, intelligent responses.
- **Next.js 14 + React** – Modern frontend framework for fast rendering and easy deployment.
- **Tailwind CSS** – Clean, responsive, and customizable UI.
- **Persistent History Format** – Chat history is stored in Gemini-compatible structure:
  ```json
  [
    { "role": "user", "parts": [{ "text": "Hello" }] },
    { "role": "model", "parts": [{ "text": "Hi there!" }] }
  ]

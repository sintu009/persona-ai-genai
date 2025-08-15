# Persona AI Chat App

![Persona AI Demo Video](https://res.cloudinary.com/dnimidvwh/video/upload/v1755243237/Recording_2025-08-15_130249_qnawm8.mp4)

![Persona AI Screenshot](https://res.cloudinary.com/dnimidvwh/image/upload/v1755242165/Screenshot_2025-08-15_124351_f3s9tk.png)

## 📌 Overview

The Persona AI Chat App is a modern, Next.js-based application that enables users to engage in conversations with an AI embodying the personality, speaking style, and knowledge of a customizable persona. Whether it's a teacher, celebrity, or fictional character, you can define the persona's traits, background, and communication style to create an immersive and tailored chat experience.

The app leverages the power of Google's gemini-2.5-flash model via the Gemini API, combined with a sleek, responsive UI built with Next.js 14, React, and Tailwind CSS.

---

## 🚀 Features

- **Custom Persona Support** – Craft unique AI characters by defining their personality traits, background, and communication style.
- **Conversation Memory** – Maintains context by storing chat history for coherent and natural interactions.
- **Powered by Gemini API** – Utilizes Google's gemini-2.5-flash model for fast, high-quality AI responses.
- **Next.js 14 + React** – Built with a modern frontend framework for optimal performance and easy deployment.
- **Tailwind CSS** – Offers a clean, responsive, and customizable user interface.
- **Persistent History Format** – Stores chat history in a Gemini-compatible JSON structure:
  ```json
  [
    { "role": "user", "parts": [{ "text": "Hello" }] },
    { "role": "model", "parts": [{ "text": "Hi there!" }] }
  ]
  ```

## Prerequisites

Node.js (v18 or higher)
npm or Yarn
Gemini API key (obtain from Google Cloud Console)

## Tech Stack

**Framework:** Next.js 14, React
**Styling:** Tailwind CSS
**AI Model:** Google Gemini API (gemini-2.5-flash)
**Language:** TypeScript/JavaScript
**Deployment:** Vercel (recommended) or any Node.js-compatible hosting service

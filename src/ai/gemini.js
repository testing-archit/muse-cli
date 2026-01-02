// Gemini API wrapper (ONLY API logic)

import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Initialize with explicit API key
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function generateText(prompt) {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
}

export async function chatWithHistory(systemPrompt, history) {
    // Build the conversation history
    const messages = history.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: messages,
        systemInstruction: systemPrompt,
    });

    return response.text;
}

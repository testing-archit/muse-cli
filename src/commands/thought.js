// Reflective thought command

import { generateText } from '../ai/gemini.js';
import { buildPrompt } from '../utils/prompt.js';

export async function thought() {
    const prompt = buildPrompt('thought');
    const response = await generateText(prompt);
    console.log(response);
}

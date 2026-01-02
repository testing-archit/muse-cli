// Quick push command

import { generateText } from '../ai/gemini.js';
import { buildPrompt } from '../utils/prompt.js';

export async function gimme() {
    const prompt = buildPrompt('gimme');
    const response = await generateText(prompt);
    console.log(response);
}

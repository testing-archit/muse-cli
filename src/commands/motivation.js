// Time-aware motivation command

import { generateText } from '../ai/gemini.js';
import { buildPrompt } from '../utils/prompt.js';
import { getTimePeriod } from '../utils/time.js';

export async function motivation() {
    const period = getTimePeriod();
    const prompt = buildPrompt('motivation', { period });
    const response = await generateText(prompt);
    console.log(response);
}

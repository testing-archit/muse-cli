// Interactive terminal chat command

import readline from 'readline';
import { chatWithHistory } from '../ai/gemini.js';
import { buildPrompt } from '../utils/prompt.js';

let history = [];
const systemPrompt = buildPrompt('chat');

export async function chat() {
    console.log('Chat mode. Type your message (Ctrl+C to exit)\n');
    chatLoop();
}

function chatLoop() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('You: ', async (input) => {
        rl.close();

        if (!input.trim()) {
            chatLoop();
            return;
        }

        history.push({ role: 'user', content: input });

        try {
            const reply = await chatWithHistory(systemPrompt, history);
            history.push({ role: 'assistant', content: reply });

            console.log(`AI: ${reply}\n`);
        } catch (error) {
            console.error('Error:', error.message);
        }

        chatLoop();
    });
}

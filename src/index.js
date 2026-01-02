#!/usr/bin/env bun

import { gimme } from './commands/gimme.js';
import { thought } from './commands/thought.js';
import { motivation } from './commands/motivation.js';
import { chat } from './commands/chat.js';

const mode = process.argv[2];

if (!mode) {
    console.log('Usage: mind <gimme|thought|motivation|chat>');
    process.exit(1);
}

switch (mode) {
    case 'gimme':
        await gimme();
        break;
    case 'thought':
        await thought();
        break;
    case 'motivation':
        await motivation();
        break;
    case 'chat':
        await chat();
        break;
    default:
        console.log(`Unknown command: ${mode}`);
        console.log('Usage: mind <gimme|thought|motivation|chat>');
        process.exit(1);
}

// Prompt templates (NO API calls)

export function buildPrompt(mode, context = {}) {
    if (mode === 'gimme') {
        return 'Give a sharp, practical motivational push. Max 2 lines.';
    }

    if (mode === 'thought') {
        return 'Give one reflective thought. No advice. One sentence.';
    }

    if (mode === 'motivation') {
        const { period } = context;
        return `User time: ${period}. Give motivational text suitable for this time. Max 3 lines.`;
    }

    if (mode === 'chat') {
        return 'You are a blunt, honest terminal companion.';
    }

    throw new Error('Unknown command');
}

# mind-cli

A personal AI-powered CLI tool powered by Google Gemini.

## Installation

```bash
bun install
```

## Configuration

Create a `.env` file in the root directory and add your Gemini API key:

```
GEMINI_API_KEY=your_api_key_here
```

## Usage

```bash
mind gimme       # Quick push
mind thought     # Reflective thought
mind motivation  # Time-aware motivation
mind chat        # Interactive terminal chat
```

## Structure

- `src/index.js` - Entry point
- `src/commands/` - Command implementations
- `src/ai/` - Gemini API wrapper
- `src/utils/` - Utility functions
- `src/config/` - Configuration constants
# muse-cli

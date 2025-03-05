import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant and personal quant. Nice to meet you!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I can’t seem to find the right direction on this one, just like a ship that’s hit an iceberg haha. Please try again in a bit.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Whoa, I may be the Wolf of Wall Street but this is too much information all at once. Let's slow it down a bit, give me less words.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response

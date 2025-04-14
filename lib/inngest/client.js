import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "EvolvAI", // Unique app ID
  name: "EvolvAI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});

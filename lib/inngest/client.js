import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Ayan", 
  name: "AyZenAi",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});

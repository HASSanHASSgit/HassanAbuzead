import { query } from "@anthropic-ai/claude-agent-sdk";

const prompt = process.argv.slice(2).join(" ") || "مرحبًا! عرّف بنفسك في جملتين.";

for await (const message of query({
  prompt,
  options: {
    systemPrompt: "أنت مساعد ذكي ودود. أجب دائمًا باللغة العربية.",
    maxTurns: 1,
  },
})) {
  if (message.type === "assistant") {
    for (const block of message.message.content) {
      if (block.type === "text") console.log(block.text);
    }
  } else if (message.type === "result" && message.subtype !== "success") {
    console.error("حدث خطأ:", message.subtype);
    process.exitCode = 1;
  }
}

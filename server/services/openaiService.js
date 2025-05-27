const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateQuestions = async (topic, level) => {
  const prompt = `
Generate 3 ${level}-level interview questions for the topic: "${topic}". 
For each question, provide:
1. The question
2. The correct answer
3. Step-by-step explanation

Respond in JSON format:
[
  {
    "question": "...",
    "answer": "...",
    "explanation": "..."
  }
]
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  const raw = completion.choices[0].message.content;
  return JSON.parse(raw);
};

module.exports = { generateQuestions };

const express = require("express");
const router = express.Router();
const { generateQuestions } = require("../services/openaiService");

router.post("/", async (req, res) => {
  const { topic, level } = req.body;

  try {
    const questions = await generateQuestions(topic, level);
    res.json({ success: true, questions });
  } catch (error) {
    console.error("OpenAI Error:", error.message || error);

    res.status(500).json({
      success: false,
      message:
        error?.error?.message ||
        "Failed to generate questions. Please check your OpenAI API key or try again later.",
    });
  }
});

module.exports = router;

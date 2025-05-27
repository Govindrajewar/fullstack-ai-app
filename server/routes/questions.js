const express = require("express");
const router = express.Router();
const { generateQuestions } = require("../services/openaiService");

router.post("/", async (req, res) => {
  try {
    const { topic, level } = req.body;
    const result = await generateQuestions(topic, level);
    res.json(result);
  } catch (err) {
    console.error("Error generating questions:", err);
    res.status(500).send("Error generating questions");
  }
});

module.exports = router;

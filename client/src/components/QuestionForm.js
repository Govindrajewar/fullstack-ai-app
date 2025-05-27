import React, { useState } from "react";
import { getQuestions } from "../api";

function QuestionForm() {
  const [topic, setTopic] = useState("JavaScript");
  const [level, setLevel] = useState("easy");
  const [questions, setQuestions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getQuestions(topic, level);
      setQuestions(data);
    } catch (err) {
      alert(`❌ Error from server: ${err.message}`);
    }
  };

  return (
    <div>
      <h2>AI-Based Question Evaluator</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic"
        />
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button type="submit">Generate</button>
      </form>

      <div>
        {questions.map((q, i) => (
          <div key={i}>
            <h4>Q{i + 1}: {q.question}</h4>
            <p><strong>Answer:</strong> {q.answer}</p>
            <p><strong>Explanation:</strong> {q.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionForm;

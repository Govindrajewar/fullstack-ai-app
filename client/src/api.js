import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getQuestions = async (topic, level) => {
  const res = await axios.post(`${API_URL}/questions`, { topic, level });
  return res.data;
};

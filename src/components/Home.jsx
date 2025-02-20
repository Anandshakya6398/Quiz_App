import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFeedback } from "../utils/IndexedDB";

const Home = () => {
  const navigate = useNavigate();
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  const startQuiz = () => {
    navigate("/quizpage", { replace: true });
  };

  const viewFeedback = async () => {
    const feedbackData = await getFeedback();
    setFeedbacks(feedbackData);
    setShowFeedback(!showFeedback);
  };

  return (
    <div className="bg-gradient-to-r from-sky-200 to-violet-200 min-h-screen"> 
      <h1 className="text-center text-2xl pt-10 text-red-700 font-semibold">
        Quiz Platform
      </h1>
      <div className="flex justify-center flex-col items-center py-10">
        <div className="items-center shadow-lg p-10 bg-gray-100 rounded-lg">
          <h2 className="font-semibold text-xl pb-4">Instructions:</h2>
          <p>
            1. For multiple-choice questions, select the one best answer (A, B,
            C, or D)
          </p>
          <p>
            2. For integer-type questions, write your numerical answer clearly.
          </p>
          <p>3. No calculators unless specified.</p>
          <p>4. You have 5 minutes to complete this quiz.</p>
        </div>
        <div className="flex gap-6">
          <button
            className="mt-10 border rounded-md p-2 duration-500 hover:bg-violet-500 hover:text-white font-mono cursor-pointer"
            onClick={startQuiz}
          >
            Start Quiz
          </button>
          <button
            className="mt-10 border rounded-md duration-500 p-2 hover:bg-violet-500 hover:text-white font-mono cursor-pointer"
            onClick={viewFeedback}
          >
            Show Feedback
          </button>
        </div>

        {showFeedback && (
          <div className="mt-6">
            <h3 className="font-semibold text-xl mb-2">Feedback</h3>
            <ul className="list-disc pl-5">
              {feedbacks.map((feedback, index) => (
                <li key={index}>{feedback.feedback}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

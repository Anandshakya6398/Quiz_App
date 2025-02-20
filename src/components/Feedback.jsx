import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveFeedback } from "../utils/IndexedDB";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback.trim() === "") {
      setError("Feedback cannot be empty.");
      return;
    }
    try {
      await saveFeedback({ feedback });
      setSuccess("Feedback submitted successfully!");
      setError("");
      setFeedback("");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setError("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-sky-200 to-gray-100">
      <h2 className=" text-2xl mb-4 font-bold">Feedback</h2>
      <div className="bg-gray-100 px-14 py-10 rounded-lg shadow-2xl w-96">
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="border outline-none w-full px-2 mb-4 rounded-md p-1"
            rows="10"
            placeholder="Enter your feedback here..."
          />
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button
            type="submit"
            className="border mt-4 hover:bg-violet-500 duration-500 cursor-pointer hover:text-white rounded-md px-4 p-2"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
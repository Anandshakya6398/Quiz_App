import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveQuizAttemptHistory } from "../utils/IndexedDB";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [integerAnswer, setIntegerAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizHistory, setQuizHistory] = useState([]);
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      type: "multiple-choice",
      question: "Which planet is closest to the Sun?",
      options: ["A. Venus", "B. Mercury", "C. Earth", "D. Mars"],
      answer: "B",
    },
    {
      id: 2,
      type: "multiple-choice",
      question:
        "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
      options: ["A. Stack", "B. Queue", "C. Tree", "D. Graph"],
      answer: "B",
    },
    {
      id: 3,
      type: "multiple-choice",
      question:
        "Which of the following is primarily used for structuring web pages?",
      options: ["A. Python", "B. Java", "C. HTML", "D. C++"],
      answer: "C",
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "Which chemical symbol stands for Gold?",
      options: ["A. Au", "B. Gd", "C. Ag", "D. Pt"],
      answer: "A",
    },
    {
      id: 5,
      type: "multiple-choice",
      question:
        "Which of these processes is not typically involved in refining petroleum?",
      options: [
        "A. Fractional distillation",
        "B. Cracking",
        "C. Polymerization",
        "D. Filtration",
      ],
      answer: "D",
    },
    {
      id: 6,
      type: "integer",
      question: "What is the value of 12 + 28?",
      answer: 40,
    },
    {
      id: 7,
      type: "integer",
      question: "How many states are there in the United States?",
      answer: 50,
    },
    {
      id: 8,
      type: "integer",
      question: "In which year was the Declaration of Independence signed?",
      answer: 1776,
    },
    {
      id: 9,
      type: "integer",
      question: "What is the value of pi rounded to the nearest integer?",
      answer: 3,
    },
    {
      id: 10,
      type: "integer",
      question:
        "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
      answer: 120,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          handleNext(true);
          return 30;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = async (isTimeout = false) => {
    const currentQ = questions[currentQuestion];
    const answer =
      currentQ.type === "multiple-choice" ? selectedAnswer : integerAnswer;

    if (
      !isTimeout &&
      ((currentQ.type === "multiple-choice" && !selectedAnswer) ||
        (currentQ.type === "integer" && integerAnswer === ""))
    ) {
      alert("Please select answer before proceeding.");
      return; // Prevent function from continuing
    }

    const attemptData = {
      questionId: currentQ.id,
      answer,
      correct: answer === currentQ.answer,
    };
    const updatedQuizHistory = [...quizHistory, attemptData];
    setQuizHistory(updatedQuizHistory);
    await saveQuizAttemptHistory(attemptData);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset selected answer
      setIntegerAnswer(""); // Reset integer answer
      setTimeLeft(30); // Reset timer
    } else {
      navigate("/result", {
        state: { quizHistory: updatedQuizHistory, questions },
      });
    }
  };

  const handleIntegerChange = (e) => {
    setIntegerAnswer(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-bl from-sky-200 ">
      <h2 className="font-semibold text-xl mb-1">Quiz Questions</h2>
      <div className="bg-gray-100 px-14 py-10 rounded-lg shadow-lg">
        <h1 className="font-semibold mb-2">Question {currentQuestion + 1}</h1>
        <h2 className="mb-4">{questions[currentQuestion].question}</h2>
        {questions[currentQuestion].type === "multiple-choice" ? (
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`border w-60 px-2 mb-2 rounded-md p-1 cursor-pointer hover:bg-blue-200 ${
                  selectedAnswer === option ? "bg-blue-300" : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        ) : (
          <input
            type="number"
            value={integerAnswer}
            onChange={handleIntegerChange}
            className="border outline-none w-60 px-2 mb-4 mr-6 rounded-md p-1"
          />
        )}
        <button
          onClick={() => handleNext()}
          className="border mt-4 hover:bg-violet-500 cursor-pointer hover:text-white rounded-md px-4 p-2"
        >
          {currentQuestion < questions.length - 1 ? "NEXT" : "Finish"}
        </button>
      </div>
      <progress
        className="w-60 mt-6 border rounded"
        value={currentQuestion + 1}
        max={questions.length}
      />
      <div className="mt-4">Time left: {timeLeft} seconds</div>
    </div>
  );
};

export default QuizPage;

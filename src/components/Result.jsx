import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizHistory, questions } = location.state;

  const getQuestionById = (id) => {
    return questions.find((question) => question.id === id);
  };

  const totalCorrect = quizHistory.reduce((count, attempt) => {
    const question = getQuestionById(attempt.questionId);
    let isCorrect = false;

    if (question.type === "multiple-choice") {
      const correctOption = question.options.find(option => option.startsWith(question.answer));
      isCorrect = attempt.answer === correctOption;
    } else if (question.type === "integer") {
      isCorrect = parseInt(attempt.answer, 10) === question.answer;
    }

    return isCorrect ? count + 1 : count;
  }, 0);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-violet-100 ">
      <h2 className="font-bold text-3xl pt-6 mb-4">Quiz Results</h2>
      <div className="bg-gray-100 px-14 py-10 rounded-lg shadow-2xl mb-10">
        <h2 className='uppercase mb-4 font-extrabold text-lg'>scoreboard </h2>
        <p className="mb-4 text-xl font-semibold">
          Total Score: {totalCorrect} / {questions.length}
        </p>
        <h3 className='text-xl font-semibold mb-3 underline '>Attempted History</h3>
        {quizHistory.map((attempt, index) => {
          const question = getQuestionById(attempt.questionId);
          let isCorrect = false;

          if (question.type === "multiple-choice") {
            const correctOption = question.options.find(option => option.startsWith(question.answer));
            isCorrect = attempt.answer === correctOption;
          } else if (question.type === "integer") {
            isCorrect = parseInt(attempt.answer, 10) === question.answer;
          }

          return (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{question.question}</h3>
              <p>Your answer: {attempt.answer}</p>
              <p>Correct answer: {question.answer}</p>
              <p className={isCorrect ? 'text-green-500 font-semibold' : 'text-red-500'}>
                {isCorrect ? 'Correct' : 'Incorrect'}
              </p>
            </div>
          );
        })}
        <button
          onClick={() => navigate('/feedback')}
          className="border mt-4 hover:bg-violet-500 hover:duration-500 cursor-pointer hover:text-white rounded-md px-4 p-2"
        >
          Feedback
        </button>
      </div>
    </div>
  );
};

export default Result;

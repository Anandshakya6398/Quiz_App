////       correct code -------------------------->>>>>>>>>>>>

// import React, { useEffect, useState } from "react";
// import {getQuizAttemptHistory } from "../utils/IndexedDB";
// import { useNavigate } from "react-router-dom";

// const Result = () => {
//   const [results, setResults] = useState([]);
//   const navigate = useNavigate();

//   const questions = [
//     {
//       id: 1,
//       type: "multiple-choice",
//       question: "Which planet is closest to the Sun?",
//       options: ["A. Venus", "B. Mercury", "C. Earth", "D. Mars"],
//       answer: "B",
//     },
//     {
//       id: 2,
//       type: "multiple-choice",
//       question:
//         "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
//       options: ["A. Stack", "B. Queue", "C. Tree", "D. Graph"],
//       answer: "B",
//     },
//     {
//       id: 3,
//       type: "multiple-choice",
//       question:
//         "Which of the following is primarily used for structuring web pages?",
//       options: ["A. Python", "B. Java", "C. HTML", "D. C++"],
//       answer: "C",
//     },
//     {
//       id: 4,
//       type: "multiple-choice",
//       question: "Which chemical symbol stands for Gold?",
//       options: ["A. Au", "B. Gd", "C. Ag", "D. Pt"],
//       answer: "A",
//     },
//     {
//       id: 5,
//       type: "multiple-choice",
//       question:
//         "Which of these processes is not typically involved in refining petroleum?",
//       options: [
//         "A. Fractional distillation",
//         "B. Cracking",
//         "C. Polymerization",
//         "D. Filtration",
//       ],
//       answer: "D",
//     },
//     {
//       id: 6,
//       type: "integer",
//       question: "What is the value of 12 + 28?",
//       answer: 40,
//     },
//     {
//       id: 7,
//       type: "integer",
//       question: "How many states are there in the United States?",
//       answer: 50,
//     },
//     {
//       id: 8,
//       type: "integer",
//       question: "In which year was the Declaration of Independence signed?",
//       answer: 1776,
//     },
//     {
//       id: 9,
//       type: "integer",
//       question: "What is the value of pi rounded to the nearest integer?",
//       answer: 3,
//     },
//     {
//       id: 10,
//       type: "integer",
//       question:
//         "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
//       answer: 120,
//     },
//   ];

//   useEffect(() => {
//     const fetchResults = async () => {
//       const userAnswers = await getQuizAttemptHistory();

//       const results = questions.map((question) => {
//         const userAnswer = userAnswers.find(
//           (answer) => answer.questionId === question.id
//         );
//         let isCorrect = false;
//         if (question.type === "multiple-choice") {
//           const correctOption = question.options.find((option) =>
//             option.startsWith(question.answer)
//           );
//           isCorrect = userAnswer && userAnswer.answer === correctOption;
//         } else {
//           isCorrect =
//             userAnswer &&
//             userAnswer.answer.toString() === question.answer.toString();
//         }
//         return {
//           ...question,
//           userAnswer: userAnswer ? userAnswer.answer : null,
//           isCorrect,
//         };
//       });

//       setResults(results);
//     };

//     fetchResults();
//   }, []);

//   const correctQuestions = results.filter((result) => result.isCorrect);
//   const incorrectQuestions = results.filter((result) => !result.isCorrect);
//   const totalScore = correctQuestions.length;

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <h2 className="font-semibold text-xl mb-4">Quiz Results</h2>
//       <div className="bg-gray-100 px-14 py-10 rounded-lg shadow-lg">
//         <h3 className="font-semibold mb-2">Scoreboard</h3>
//         <p className="mb-4">
//           Total Score: {totalScore} / {questions.length}
//         </p>
//         <h3 className="font-semibold mb-2">Correct Questions</h3>
//         <ul className="mb-4">
//           {correctQuestions.map((question) => (
//             <li key={question.id} className="mb-2">
//               <p>{question.question}</p>
//               <p className="text-green-600">
//                 Your Answer: {question.userAnswer}
//               </p>
//             </li>
//           ))}
//         </ul>
//         <h3 className="font-semibold mb-2">Incorrect Questions</h3>
//         <ul>
//           {incorrectQuestions.map((question) => (
//             <li key={question.id} className="mb-2">
//               <p>{question.question}</p>
//               <p className="text-red-600">Your Answer: {question.userAnswer}</p>
//               <p className="text-blue-600">Correct Answer: {question.answer}</p>
//             </li>
//           ))}
//         </ul>
//         <button
//           onClick={() => navigate("/feedback")}
//           className="border mt-4 hover:bg-violet-500 cursor-pointer hover:text-white rounded-md px-4 p-2"
//         >
//           Give Feedback
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Result;





/////////////////////////////////-------

// import React, { useEffect, useState } from "react";
// import { getQuizAttemptHistory } from "../utils/IndexedDB";
// import { useNavigate } from "react-router-dom";

// const Result = () => {
//   const [results, setResults] = useState([]);
//   const navigate = useNavigate();

//   const questions = [
//     {
//       id: 1,
//       type: "multiple-choice",
//       question: "Which planet is closest to the Sun?",
//       options: ["A. Venus", "B. Mercury", "C. Earth", "D. Mars"],
//       answer: "B",
//     },
//     {
//       id: 2,
//       type: "multiple-choice",
//       question:
//         "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
//       options: ["A. Stack", "B. Queue", "C. Tree", "D. Graph"],
//       answer: "B",
//     },
//     {
//       id: 3,
//       type: "multiple-choice",
//       question:
//         "Which of the following is primarily used for structuring web pages?",
//       options: ["A. Python", "B. Java", "C. HTML", "D. C++"],
//       answer: "C",
//     },
//     {
//       id: 4,
//       type: "multiple-choice",
//       question: "Which chemical symbol stands for Gold?",
//       options: ["A. Au", "B. Gd", "C. Ag", "D. Pt"],
//       answer: "A",
//     },
//     {
//       id: 5,
//       type: "multiple-choice",
//       question:
//         "Which of these processes is not typically involved in refining petroleum?",
//       options: [
//         "A. Fractional distillation",
//         "B. Cracking",
//         "C. Polymerization",
//         "D. Filtration",
//       ],
//       answer: "D",
//     },
//     {
//       id: 6,
//       type: "integer",
//       question: "What is the value of 12 + 28?",
//       answer: 40,
//     },
//     {
//       id: 7,
//       type: "integer",
//       question: "How many states are there in the United States?",
//       answer: 50,
//     },
//     {
//       id: 8,
//       type: "integer",
//       question: "In which year was the Declaration of Independence signed?",
//       answer: 1776,
//     },
//     {
//       id: 9,
//       type: "integer",
//       question: "What is the value of pi rounded to the nearest integer?",
//       answer: 3,
//     },
//     {
//       id: 10,
//       type: "integer",
//       question:
//         "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
//       answer: 120,
//     },
//   ];

//   useEffect(() => {
//     const fetchResults = async () => {
//       const userAnswers = await getQuizAttemptHistory();

//       const results = questions.map((question) => {
//         const userAnswer = userAnswers.find(
//           (answer) => answer.questionId === question.id
//         );
//         let isCorrect = false;
//         if (question.type === "multiple-choice") {
//           const correctOption = question.options.find((option) =>
//             option.startsWith(question.answer)
//           );
//           isCorrect = userAnswer && userAnswer.answer === correctOption;
//         } else {
//           isCorrect =
//             userAnswer &&
//             userAnswer.answer.toString() === question.answer.toString();
//         }
//         return {
//           ...question,
//           userAnswer: userAnswer ? userAnswer.answer : null,
//           isCorrect,
//         };
//       });

//       setResults(results);
//     };

//     fetchResults();
//   }, []);

//   const correctQuestions = results.filter((result) => result.isCorrect);
//   const incorrectQuestions = results.filter((result) => !result.isCorrect);
//   const totalScore = correctQuestions.length;

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <h2 className="font-semibold text-xl mb-4">Quiz Results</h2>
//       <div className="bg-gray-100 px-14 py-10 rounded-lg shadow-lg">
//         <h3 className="font-semibold mb-2">Scoreboard</h3>
//         <p className="mb-4">
//           Total Score: {totalScore} / {questions.length}
//         </p>
//         <h3 className="font-semibold mb-2">Correct Questions</h3>
//         <ul className="mb-4">
//           {correctQuestions.map((question) => (
//             <li key={question.id} className="mb-2">
//               <p>{question.question}</p>
//               <p className="text-green-600">
//                 Your Answer: {question.userAnswer}
//               </p>
//             </li>
//           ))}
//         </ul>
//         <h3 className="font-semibold mb-2">Incorrect Questions</h3>
//         <ul>
//           {incorrectQuestions.map((question) => (
//             <li key={question.id} className="mb-2">
//               <p>{question.question}</p>
//               <p className="text-red-600">Your Answer: {question.userAnswer}</p>
//               <p className="text-blue-600">Correct Answer: {question.answer}</p>
//             </li>
//           ))}
//         </ul>
//         <button
//           onClick={() => navigate("/feedback")}
//           className="border mt-4 hover:bg-violet-500 cursor-pointer hover:text-white rounded-md px-4 p-2"
//         >
//           Give Feedback
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Result;




////////////////////-------------
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ResultPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { quizHistory, questions } = location.state;

//   const getQuestionById = (id) => {
//     return questions.find((question) => question.id === id);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center ">
//       <h2 className="font-semibold text-xl mb-1">Quiz Results</h2>
//       <div className="bg-gray-100 px-14 py-10 rounded-lg shadow-lg">
//         {quizHistory.map((attempt, index) => {
//           const question = getQuestionById(attempt.questionId);
//           const isCorrect = attempt.answer === question.answer;
//           return (
//             <div key={index} className="mb-4">
//               <h3 className="font-semibold">{question.question}</h3>
//               <p>Your answer: {attempt.answer}</p>
//               <p>Correct answer: {question.answer}</p>
//               <p className={isCorrect ? 'text-green-500' : 'text-red-500'}>
//                 {isCorrect ? 'Correct' : 'Incorrect'}
//               </p>
//             </div>
//           );
//         })}
//         <button
//           onClick={() => navigate('/')}
//           className="border mt-4 hover:bg-violet-500 cursor-pointer hover:text-white rounded-md px-4 p-2"
//         >
//           Back to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResultPage;


//////////////////////--------------
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Result = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { quizHistory, questions } = location.state;

//   const getQuestionById = (id) => {
//     return questions.find((question) => question.id === id);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center ">
//       <h2 className="font-semibold text-xl mb-1">Quiz Results</h2>
//       <div className="bg-gray-100 px-14 py-10 rounded-lg shadow-lg">
//         {quizHistory.map((attempt, index) => {
//   const question = getQuestionById(attempt.questionId);
//   let isCorrect = false;

//   if (question.type === "multiple-choice") {
//     const correctOption = question.options.find(option => option.startsWith(question.answer));
//     isCorrect = attempt.answer === correctOption;
//   } else if (question.type === "integer") {
//     isCorrect = parseInt(attempt.answer, 10) === question.answer;
//   }

//   return (
//     <div key={index} className="mb-4">
//       <h3 className="font-semibold">{question.question}</h3>
//       <p>Your answer: {attempt.answer}</p>
//       <p>Correct answer: {question.answer}</p>
//       <p className={isCorrect ? 'text-green-500 font-semibold' : 'text-red-500'}>
//         {isCorrect ? 'Correct' : 'Incorrect'}
//       </p>
//     </div>
//   );
// })}
//         <button
//           onClick={() => navigate('/feedback')}
//           className="border mt-4 hover:bg-violet-500 cursor-pointer hover:text-white rounded-md px-4 p-2"
//         >
//           Feedback
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Result;


////////////--------total question-----
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

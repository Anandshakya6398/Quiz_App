import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./components/QuizPage";
import Result from "./components/Result";
import Feedback from "./components/Feedback";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};

export default App;

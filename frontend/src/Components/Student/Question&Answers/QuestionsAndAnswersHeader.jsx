import { Pagination } from '@mui/material';
import React from 'react'
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import AddQuestion from "./AddQuestion";
import QuestionCategoryHeader from "./QuestionCategoryHeader";
function QuestionsAndAnswersHeader() {
  return (
    <div>
      <div className="eleven">
        <h1>Questions & Answers</h1>
      </div>   
      <QuestionCategoryHeader />
      <AddQuestion />
      <QuestionsAndAnswers />

    </div>
  );
}

export default QuestionsAndAnswersHeader
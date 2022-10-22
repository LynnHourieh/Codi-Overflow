import { Pagination } from '@mui/material';
import React from 'react'
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import AddQuestion from "./AddQuestion";
import QuestionCategoryHeader from "./QuestionCategoryHeader";
import StickyNav from '../../Layout/StickyNav';
function QuestionsAndAnswersHeader(props) {
  return (
    <div>
      <StickyNav />
      <div className="eleven">
        <h1>
          <font color="#f54b9d">Q</font>
          <font color="#fbb107">u</font>
          <font color="#2e489e">e</font>
          <font color="#f54b9d">s</font>
          <font color="#fbb107">t</font>
          <font color="#2e489e">i</font>
          <font color="#f54b9d">o</font>
          <font color="#fbb107">n</font>
          <font color="#2e489e">s</font>
          <font color="#f54b9d"> & </font>
          <font color="#fbb107">A</font>
          <font color="#2e489e">n</font>
          <font color="#f54b9d">s</font>
          <font color="#fbb107">w</font>
          <font color="#2e489e">e</font>
          <font color="#f54b9d">r</font>
          <font color="#fbb107">s</font>
        </h1>
      </div>
      <QuestionCategoryHeader
        category={props.category}
        setCategory={props.setCategory}
        question={props.question}
        setQuestion={props.setQuestion}
        item={props.item}
        setItem={props.setItem}
      />
  
  
    </div>
  );
}

export default QuestionsAndAnswersHeader
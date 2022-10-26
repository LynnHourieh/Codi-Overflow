import React from "react";
import AddStudentQuestion from "./AddStudentQuestion";
import QuestionCategoryHeaderStudent from "./QuestionCategoryHeaderStudent";

function QuestionsAndAnswersHeaderStudent(props) {
  return (
    <div>
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
      <AddStudentQuestion
        question={props.question}
        setQuestion={props.setQuestion}
        category={props.category}
        user={props.user}
        setCategory={props.setCategory}
        setUser={props.setUser}
      />
      <QuestionCategoryHeaderStudent
        category={props.category}
        setCategory={props.setCategory}
        question={props.question}
        setQuestion={props.setQuestion}
        item={props.item}
        setItem={props.setItem}
        answer={props.answer}
        setAnswer={props.setAnswer}
      />
    </div>
  );
}

export default QuestionsAndAnswersHeaderStudent;

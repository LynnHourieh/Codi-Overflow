import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import QuestionsAndAnswersStudent from "./QuestionsAndAnswersStudent";


function QuestionCategoryHeaderStudent(props) {
  const [value, setValue] = useState(props.question);
  // console.log(props.question)
  const filterCategory = (curcat) => {
    const unit = props.question.filter((newVal) => {
      return newVal.category_id === curcat;
    });

    setValue(unit);
  };
  const allfilter = () => {
    setValue(props.question);
  };

  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link
            href=""
            style={{ color: "#f54b9d" }}
            onClick={() => allfilter()}
          >
            ALL
          </Nav.Link>
        </Nav.Item>
        {props.category.map((unit) => {
          return (
            <Nav.Item key={unit.id}>
              <Nav.Link
                href=""
                style={{ color: "#f54b9d" }}
                onClick={() => filterCategory(unit.id)}
              >
                {unit.cat_name}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
 
      <QuestionsAndAnswersStudent
        question={props.question}
        setQuestion={props.setQuestion}
        category={props.category}
        setCategory={props.setCategory}
        user={props.user}
        setUser={props.setUser}
        value={value}
        setValue={setValue}
        answer={props.answer}
        setAnswer={props.setAnswer}
      />
    </>
  );
}
export default QuestionCategoryHeaderStudent;

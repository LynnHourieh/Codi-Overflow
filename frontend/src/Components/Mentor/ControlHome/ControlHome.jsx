import React from 'react'
import CarouselFade from "../../Home/CarouselFade";
import ControlCards from "./ControlCards";
import LatestQuestionControl from './LatestQuestionControl';
import LatestNewsControl from './LatestNewsControl';

function ControlHome(props) {

  return (
    <div>
      <CarouselFade />
      <ControlCards />
      <LatestQuestionControl
        answer={props.answer}
        latestquestion={props.latestquestion}
        question={props.question}
        category={props.category}
      />
      <LatestNewsControl/>
    </div>
  );
}

export default ControlHome;

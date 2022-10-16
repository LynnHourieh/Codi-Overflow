import React from 'react'

import News from '../Student/News/News';
import QuestionsAndAnswersHeader from '../Student/Question&Answers/QuestionsAndAnswersHeader';
import CarouselFade from "./CarouselFade";
import CardsExample from "./CardsExample"

function Home() {
  return (
    <div>
      <CarouselFade />
      <CardsExample/>
      <QuestionsAndAnswersHeader />
      <News />
    </div>
  );
}

export default Home

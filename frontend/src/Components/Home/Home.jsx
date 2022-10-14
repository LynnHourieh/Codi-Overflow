import React from 'react'

import News from '../News/News';
import QuestionsAndAnswersHeader from '../Question&Answers/QuestionsAndAnswersHeader';
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

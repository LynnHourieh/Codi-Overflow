import React from 'react'

import News from '../Student/News/News';

import CarouselFade from "./CarouselFade";
import CardsExample from "./CardsExample"

import LatestQuestion from './LatestQuestion';
import LatestNews from './LatestNews';

function Home(props) {

  return (
    <div>
      <CarouselFade />
      <CardsExample />
      <LatestQuestion
        answer={props.answer}
        latestquestion={props.latestquestion}
        question={props.question}
        category={props.category}
      />
      <LatestNews/>
    </div>
  );
}

export default Home

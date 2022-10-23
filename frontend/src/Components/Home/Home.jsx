import React from 'react'

import News from '../Student/News/News';

import CarouselFade from "./CarouselFade";
import CardsExample from "./CardsExample"
import StickyNav from '../Layout/StickyNav';

function Home() {
  return (
    <div>
    
      <CarouselFade />
      <CardsExample/>
  
      <News />
    </div>
  );
}

export default Home

import React from 'react';
import NewsCards from './NewsCards';
import PageItem from "react-bootstrap/PageItem";

function News() {
  return (
    <div>
      <div className="eleven">
        <h1>Codi News</h1>
      </div>
      <NewsCards />
    
    </div>
  );
}

export default News
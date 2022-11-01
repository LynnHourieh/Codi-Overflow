import React from 'react';
import NewsCards from './NewsCards';
import PageItem from "react-bootstrap/PageItem";
import StickyNav from '../../Layout/StickyNav';


function News() {
  return (
    <div>
     
      <div className="eleven">
        <h1>
          <font color="#f54b9d">C</font>
          <font color="#fbb107">O</font>
          <font color="#2e489e">D</font>
          <font color="#f54b9d">I'</font>
          <font color="#fbb107">S </font>
          <font color="#2e489e"> A</font>
          <font color="#f54b9d">N</font>
          <font color="#fbb107">N</font>
          <font color="#2e489e">O</font>
          <font color="#f54b9d">U</font>
          <font color="#fbb107">N</font>
          <font color="#2e489e">C</font>
          <font color="#f54b9d">M</font>
          <font color="#fbb107">E</font>
          <font color="#2e489e">N</font>
          <font color="#f54b9d">T</font>
          
        </h1>
      </div>
      <NewsCards />
    
    </div>
  );
}

export default News
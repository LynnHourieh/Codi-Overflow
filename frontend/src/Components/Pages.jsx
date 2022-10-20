import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./Student/News/News";
import StickyNav from "./Layout/StickyNav";
import QuestionsAndAnswersHeader from "./Student/Question&Answers/QuestionsAndAnswersHeader";
import Profile from "./Student/Profile/Profile";
import Home from "./Home/Home";
import Footer from "./Layout/Footer";
import ControlNews from "./Mentor/ControlNews/ControlNews";
import ControlProfile from "./Mentor/Profile/ControlProfile";
import StudentList from "./Mentor/List/StudentList";
import ListHeader from "./Mentor/List/ListHeader";
function Pages() {
  return (
    <Router>
      <StickyNav/>
      <Routes>
        <Route path="/home" element={<Home />}>
         
        
        </Route>
        <Route path="/questions" element={ <QuestionsAndAnswersHeader />}>
      
         
        </Route>
        <Route path="/news" element={ <News />}>
          
         
        </Route>
        <Route path="/profile" element={ <Profile />}>
          
         
        </Route>
        <Route path="/controlnews" element ={ 
          <ControlNews />}>
         
        </Route>
        <Route path="/controlprofile" element={<ControlProfile />}>
          
          
        </Route>
        <Route path="/list" element={ 
          <ListHeader />}>
         
        </Route>
      </Routes>
    </Router>
  );
}

export default Pages;

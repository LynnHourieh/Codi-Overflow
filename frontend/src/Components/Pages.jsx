import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./Student/News/News";
import StickyNav from "./Layout/StickyNav";
import QuestionsAndAnswersHeader from "./Student/Question&Answers/QuestionCategoryHeader";
import Profile from "./Student/Profile/Profile";
import Home from "./Home/Home";
import Footer from "./Layout/Footer";
import ControlNews from "./Mentor/ControlNews/ControlNews";
function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <StickyNav />
          <Home />
          <Footer />
        </Route>
        <Route path="/questions">
          <StickyNav />
          <QuestionsAndAnswersHeader />
        </Route>
        <Route path="/news">
          <StickyNav />
          <News />
        </Route>
        <Route path="/profile">
          <StickyNav />
          <Profile />
        </Route>
        <Route path="/controlnews">
          <StickyNav />
          <ControlNews />
        </Route>
      </Switch>
    </Router>
  );
}

export default Pages;

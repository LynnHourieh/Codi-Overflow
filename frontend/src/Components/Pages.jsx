import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./News/News";
import StickyNav from "./Layout/StickyNav";
import QuestionsAndAnswersHeader from "./Question&Answers/QuestionsAndAnswersHeader";
import Profile from "./Profile/Profile";
import Home from "./Home/Home";
import Footer from "./Layout/Footer";
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
      </Switch>
    </Router>
  );
}

export default Pages;

import React from "react";
import EditNewsCards from "./EditNewsCards";
import PageItem from "react-bootstrap/PageItem";
import AddNews from "./AddNews"

function News() {
  return (
    <div>
      <div className="eleven">
        <h1>Codi Announcments</h1>
      </div>
      <AddNews/>
      <EditNewsCards />
    </div>
  );
}

export default News;

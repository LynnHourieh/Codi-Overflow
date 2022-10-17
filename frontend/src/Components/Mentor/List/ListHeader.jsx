import React from 'react'
import FilterList from './FilterList';
import StudentList from './StudentList';

function ListHeader() {

  return (
    <>
      {" "}
      <div className="eleven">
        <h1>Participants</h1>
      </div>{" "}
  
      <FilterList/>
    </>
  );
}

export default ListHeader
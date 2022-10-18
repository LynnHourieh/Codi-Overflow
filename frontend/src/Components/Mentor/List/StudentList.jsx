import Table from "react-bootstrap/Table";
import FilterList from "./FilterList";
import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";

function StudentList({ item, allfilter ,setLoading ,setItem}) {
  const history = useHistory();
  const Profile = () => {
    history.push("/controlprofile", { state: { id: item.id } });
  };

  useEffect(() => {
    allfilter()
  },[]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Cycle</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {item.map((unit, index) => {
            return (
              <tr key={index} onClick={Profile}>
                <td>{unit.id}</td>
                {/* <td>{unit.picture}</td> */}
                <td >
                 
                  <img
                    src={`${process.env.REACT_APP_Codi_URL}/pictures/${unit.picture}`}
                    
                   className="list_images"
                    
                  />
                </td>
                <td>{unit.name}</td>
                <td>{unit.username}</td>
                <td>{unit.email}</td>
                <td>{unit.status.st_name}</td>
                <td>{unit.cycle.cy_name}</td>
                <td>{unit.cycle.branch.br_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default StudentList;

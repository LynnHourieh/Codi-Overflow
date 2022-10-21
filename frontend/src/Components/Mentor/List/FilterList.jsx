import Nav from "react-bootstrap/Nav";
import StudentList from "./StudentList";
import React, { useState, useEffect } from "react";
import Search from "../../Search/Search";
function FilterList() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [item, setItem] = useState(null);
  const FetchProfile = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/sysfilter`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((reponse) => {
        if (reponse.ok) {
          return reponse.json();
        }
      })
      .then((data) => {
        setLoading(false);
        //   console.log(data[0].concat(data[1]));
        setProfile(data[0].concat(data[1]));
        setItem(data[0].concat(data[1]));
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };

  const filterItem = (curcat) => {
    const unit = profile.filter((newVal) => {
      // console.log(newVal)
      return newVal.systemroles_id === curcat;
    });
    //    console.log(unit)
    setItem(unit);
  };

  const allfilter = () => {
    setItem(profile);
  };
  useEffect(() => {
    FetchProfile();
    setItem(profile);
  }, []);

  if (loading) return "loading";

  return (
    <>
      {/* <Search/> */}
      <Nav className="justify-content-center">
        <Nav.Link
          onClick={allfilter}
          className="filter_button"
          style={{ color: "#f54b9d" }}
        >
          All
        </Nav.Link>
        <Nav.Link
          onClick={() => filterItem(2)}
          className="filter_button"
          style={{ color: "#fbb107" }}
        >
          Mentors
        </Nav.Link>
        <Nav.Link
          onClick={() => filterItem(1)}
          className="filter_button"
          style={{ color: "#2e489e" }}
        >
          Students
        </Nav.Link>
        <Nav.Item></Nav.Item>
      </Nav>
      <StudentList
        profile={profile}
        setProfile={setProfile}
        item={item}
        setItem={setItem}
        setLoading={setLoading}
        allfilter={allfilter}
        loading={loading}
      />
    </>
  );
}

export default FilterList;

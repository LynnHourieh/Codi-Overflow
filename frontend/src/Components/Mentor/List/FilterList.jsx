
import Nav from "react-bootstrap/Nav";
import StudentList from './StudentList';
import React, { useState, useEffect } from "react";
function FilterList() {
      const [profile, setProfile] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const[item,setItem]=useState(null)
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
          setProfile(data);
          setItem(data)
        })
        .catch((error) => {
          console.error(error.message);
          setError(error);
        });
    };
   
 

    const studentfilter=()=>{
        let item=profile[0]
        setItem(item)
        // console.log(item)
    }
        const mentorfilter = () => {
          
          let item = profile[1];
          setItem(item);
        //   console.log(item)
        };
        const allfilter=()=>{
            let item=profile[0].concat(profile[1])
               setItem(item);
            
        }
           useEffect(() => {
             FetchProfile();
             setItem(profile);
           }, []); 
        

     if (loading) return "loading";
 
 
  return (
    <>
      <Nav className="justify-content-center">
        <Nav.Link onClick={studentfilter}>Students</Nav.Link>
        <Nav.Item>
          <Nav.Link onClick={mentorfilter}>Mentors</Nav.Link>
        </Nav.Item>
        <Nav.Link onClick={allfilter}>All</Nav.Link>
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

export default FilterList
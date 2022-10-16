import React,{useState,useEffect} from "react";
import Card from "react-bootstrap/Card";


function NewsCards() {
  const[news,setNews]=useState(null);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);
    const FetchNews = () => {
      fetch(`${process.env.REACT_APP_Codi_URL}/api/news`, {
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
          setNews(data);
        })
        .catch((error) => {
          console.error(error.message);
          setError(error);
        });
    };
    console.log(news)
    useEffect(()=>{
FetchNews();
    },[]);
    if (loading) return "loading";
  return (
    <div className="news_cards">
      {news.map((item)=>{
        return (
          <Card style={{ width: "18rem" }} className="mb-2" key={item.id}>
            <Card.Header>{item.ne_title}</Card.Header>
            <Card.Body>
              <Card.Title> {item.ne_date} </Card.Title>
              <Card.Text>{item.ne_description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
   
    </div>
  );
}

export default NewsCards;
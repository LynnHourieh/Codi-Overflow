import Carousel from "react-bootstrap/Carousel";

import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
import pic5 from "../Images/pic5.jpg";
import pic4 from "../Images/pic4.jpg"
function CarouselFade() {
   const NAME = localStorage.getItem("name");
  return (
    <Carousel fade>
      <Carousel.Item style={{ height: 500 }}>
        <img className="d-block w-100 pictures" src={pic4} alt="First slide" />
        <Carousel.Caption>
          <h3 className="note">
            {" "}
            Hello {NAME} <br></br> welcome to Codi Overflow
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 500 }}>
        <img className="d-block w-100 pictures" src={pic2} alt="Second slide" />

        <Carousel.Caption>
          <h3 style={{ color: "#f54b9d" }}>Programming for a better future</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 500 }}>
        <img className="d-block w-100 pictures" src={pic5} alt="Third slide" />

        <Carousel.Caption>
          <h3 style={{color:"#fbb107"}}
          >We are here to help you</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;

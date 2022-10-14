import Carousel from "react-bootstrap/Carousel";

import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
import pic1 from "../Images/pic1.webp"
function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item style={{ height: 300 }}>
        <img className="d-block w-100" src={pic1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 300 }}>
        <img className="d-block w-100" src={pic2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 300 }}>
        <img className="d-block w-100" src={pic3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;

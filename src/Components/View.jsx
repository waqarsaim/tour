import React from 'react'
import { Carousel } from 'react-bootstrap'
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from "../images/pic3.jpg"
import Journey from "./Journey"

const View = () => {
    return (
        <div>
          <div className="container-fluid position-absolute top-50">
  <Journey />
  </div>
<div >
<img
      className=""
      src={pic2}
      alt="First slide"
      width="1348px"
      height="640px"
    />
 {/*<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
*/}
</div>

        </div>
    )
}

export default View;

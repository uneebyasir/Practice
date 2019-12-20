import React  from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from  '../../assects/images/b4.jpg'
import Image2 from  '../../assects/images/b2headerslider.jpg'
import Image3 from  '../../assects/images/b3headerslider.jpg'
import Style from '../../components/Carousal/Carousal.css'



export default()=>
{
    return(


        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image2}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    );
}
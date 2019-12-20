import  React from'react'
import  Slider  from '../Slider/Slider.css'
import Carousel from 'react-bootstrap/Carousel'
import Image from  '../../assects/images/arris1.png'
import Image2 from  '../../assects/images/arris2.png'
import Image3 from  '../../assects/images/open.png'
import Image4 from '../../assects/images/seticon.png'
import {Tween,Timeline,TweenMax} from 'react-gsap'





export  default()=>{
    return(
     
        <div className="Container-fluid   xc">
     
         
        <Carousel>
            
  <Carousel.Item>
    
    <div className="first-image">
    <Tween from={ { y:'200%', rotation:360,}}duration ={6} ease ="Power2.easeOut"   repeat={-1} >
    
        <img className="tt" src={Image}/>
        <img   classNmae="op"src={Image2}/>
        </Tween>
        
    </div> 
 
  </Carousel.Item>
  
  <Carousel.Item>


    <div className="Third-image">
    
     
    <Tween from={ { y:'400%'}}duration ={6} ease ="Power2.easeOut"  >
        <img src={Image3}/>
        
       
        </Tween>  
</div>
<div  className="container  lp">

    <img className="yt" src={Image4}/>
    </div>
    
  </Carousel.Item>

</Carousel>

</div>


    );
}

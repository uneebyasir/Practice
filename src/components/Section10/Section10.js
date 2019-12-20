import React  from 'react'
import {Tween,Timeline,TweenMax} from 'react-gsap'
import Image  from '../../assects/images/gsap.png'

import Style from '../Section10/Section10.css'
import style from '../navbar/style';






              


 
const TweenComponent = () => (
  
<Tween to={ { x: '3000%', rotation:360,yoyo:true}}duration ={5} ease ="Power2.easeOut"    repeat={Infinity}>
 

    
    
    

    

    
   <div  className="container-fluid  io">
  
  <div className="box1"    >
  <img  className="img" src={Image}  
   /> 
</div>
</div>

</Tween>


  
 
 
);


  


export default TweenComponent;

					





						











 



   
 
  
   
    
    
    

    
  

  
    

 



    
  
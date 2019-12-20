import React from 'react'
import Nav from '../../components/navbar/navbar'
import Style from '../../components/navbar/style'
import Navbar  from  '../../components/navbar/navbar'
import Section1 from '../../components/Section1/Section1'
import Section3 from '../../components/Section3/Section3'
import Section4 from '../../components/Section4/Section4'
import Section5 from '../../components/Section5/Section5'
import Section6 from '../../components/Section6/Section6'
import Section7 from '../../components/Section7/Section7'
import Section8 from '../../components/Section8/Section8'
 import  Section10 from '../../components/Section10/Section10'

//  import About from '../../container/About/About'

    
//  import Shop  from '../../container/Shop/Shop'





export default ()=>{
    return(
        <div>
            <Navbar/>
    <Section1/>
    <Section3/>
    
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
     <Section10/> 
     
   
     {/* <About/> */}
     
    
     {/* <Shop/> */}


      
        </div>
    );
}

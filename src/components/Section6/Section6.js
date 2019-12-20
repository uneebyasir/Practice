import React from 'react'
import Style from '../Section6/Section6.css'

export default()=>{
    return(

<div className="container-fluid vb">
<div className="rr">
   <div className="col-md-12 d-flex">
           <div className="col-md-5 Left1">
                   <h3 className="graph1"> Serving the cable industry since 1969 </h3>
                   <p className="graph">SCTE.ISBE is proud to serve as the technical and applied science leader
                       for the cable telecommunication industry, providing meaningful resources and programs for members
                       and the industry.</p>
                       <p className="copyright">@ 2019 SCTE.ISBE ALL RIGHTS RESERVED </p>

</div>
<div className="col-md-3 mid">
   <h3>QUICK LINKS</h3>
   <p className ="turn">Standards 
   Education 
   Certification
    Terms of Use
     GDPR/privacy</p>
</div>
<div className="col-md-4 last">
   <h3>GET STARTED</h3>
   <p>Get Started On your Own membership today for FREE Access exclusive content and member benefits right away.</p>
   
       <button onClick={handleIncrement} className="button-5" type="button" >TAKE A TEST DRIVE</button>
       <button onClick={handleIncrement} className="button-6" type="button" >CONTACT US</button>
   
</div>                      
</div>
</div>
</div>  
 
  

);
}
function handleIncrement(){
    window.open('https:stackoverflow.com/questions/38518278/how-to-use-jquery-with-reactjs','blank')
}
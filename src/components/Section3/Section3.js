import React from 'react'
import Image from '../../assects/images/employee.png'
import Image1 from '../../assects/images/enterprise.png'
import  Style from '../../components/Section3/Section3.css'




export default()=>{
    return(
<div className="container-fluid  ">
<div className="row">
<div className="col-md-12 d-flex fq">
 <div className="col-md-6 pl-5 aa">
     <div className="head2 d-flex mt-5">
         <h1 className="h1">Individuals</h1>
         <img className="op" src={Image}/>
     </div>
      <p className="zx">SCTE.ISBE offers a wide array of convenient
         training programs and resources across varying
        level of technical information and user committment 
        to allow you to customize your
        learning experience and develop yourself into a
         successful cable professional</p>
 </div>
 <div className="col-md-6 pl-5 right">
         <div className="head2 d-flex mt-5">
             <h1 class="h1">Companies</h1>
             <img src={Image1}/>
         </div>
         <p className="yu"> SCTE.ISBE provides significant value not only to
                 the individual member,but also organizations.An educated
                 and highly trained workforce will mean fewer truck rolls,
                 more efficient network operations and ultimately,a
                 better experience of your customer.Corporate trainers
                 can partner with SCTE.ISBE and work directly with
                 SCTE.ISBE's proffessional Development of staff to customize
                 a program that meets their organizations requirements.
             </p>
     </div> 


</div>
</div>
</div> 
    );
}
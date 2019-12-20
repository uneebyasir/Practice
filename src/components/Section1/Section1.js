 import React from 'react'
 import style from '../Section1/Section1.css'
 import Image from '../../assects/images/bitmap-copy-3@2x.png'

export default()=>{
    return(

<div className="container-fluid tt ">

<div className="img1">
        <img class="po" src={Image}/>
</div>
<div className="parallax">
       <div className="row1 d-flex flex-column bbn"   >
        <h5 className="qw">Technical,Education,Training & SCTE-ISBE Certification</h5>
         <p className="definition ">SCTE.ISBE is dedicated to providing the cable telecommunications industry
             with the knowledge,tools and resources necessary for organizations 
            to develop their technical workforce for professionals to dvance their careers.
            Weather you are looking to take an in-depth multi-week course to knowledge on your way to cecoming SCTE.ISBE certifid
             or just need a quick refresher on the basic engineering fact SCTE.ISBE has the essential knowledge for cable proffessionals.</p> 
            </div>


</div> 
</div>   


);
}
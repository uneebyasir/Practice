import React from 'react'
import Style from  '../Section5/Section5.css'
import{ Link} from  'react-router-dom'
import Login from '../../container/Login/Login'






export default ()=>{
    return(
<div className="container-fluid bv">
                      <div className="img3">
                        <div className="column">
                            <div className="part-2 d-flex flex-column ">
                              <h3>SCTE.ISBE Certification</h3>
                              <p >The industry recognizes SCTE.ISBE and its certificationsas the industry's premier benchmark for proving 
                                technical knowledge.Once you are certified,SCTE.ISBE will recognize your certification achievements and help you to stand out.Many industry organizations
                                honored  SCTE.ISBE certified professional with recognition and/or career advancement oppertunities.</p>
                             
                                   <div className="qq d-flex">
                                   <Link to ='/Login'>
                                <button  className="button-3 " type="button" >Technical,Education,Training & SCTE-ISBE Certification</button>
                                </Link> 
                            </div>

                           
                            </div>
                            
                            
                        </div>
                        </div>
                             
                        </div> 
    );
}

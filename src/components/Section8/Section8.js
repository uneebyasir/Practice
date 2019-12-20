import React from 'react'
import Image from '../../assects/images/man.jpg'
import  Image1 from '../../assects/images/tab.jpg'
import Image2 from '../../assects/images/customer.jpg'
import Style from '../Section8/Section8.css'



export default()=>{
    return(
        <div  class="section8">
                                           <div className="container11">
                                              <img src={Image} alt="Avatar" className="image"/>
                                              <div className="overlay overlayLeft">
                                                <div className="text">Hello World</div>
                                              </div>
                                            </div>


                                            <div className="container11">
                                                <img src={Image1} alt="Avatar" className="image"/>
                                                <div class="overlay overlayLeft">
                                                  <div className="text">Hello World</div>
                                                </div>
                                              </div>


                                              <div className="container11">
                                                  <img src={Image2} alt="Avatar" className="image"/>
                                                  <div className="overlay overlayLeft">
                                                    <div className="text">Hello World</div>
                                                  </div>
                                                </div>

                                              </div>

    );
}
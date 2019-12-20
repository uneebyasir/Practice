import React from 'react'

import Style from '../navbar/navbar.css'
import  Image from '../../assects/images/logo.png'
import Image1 from '../../assects/images/page-1-copy.png'
import Image2 from '../../assects/images/page-1-copy-2.png'
import Image3 from '../../assects/images/open-book.png'
import Carousal from '../Carousal/Carousal'



export default ()=>{
    return(
     
      <div className= "main">
     

     
     
        <div className="container-1">
        

      
      <div className="box-1">
          <img className="jj" src={ Image}/>
      </div>
        <div className="box-2">
          <nav>
            <ul className="container ul-reset">
              <li className='droppable'>
                <a href='#'>What we do</a>
                <div className='mega-menu'>
                    <div className="container cf">
                    <ul className="ul-reset">
                      <li><a href='#'>Newsroom</a></li>
                      <li><a href='#'>About</a></li>
                      <li><a href='#'>Case Studies</a></li>
                      <li><a href='#'>Corporate Alliance</a></li>
                      <li><a href='#'>Governance</a></li>
                      <li><a href='#'>Publications</a></li>
                      <li><a href='#'>Foundation</a></li>
                      <li><a href='#'>Contact us</a></li>
                    </ul>
                    
                  </div>
                </div>
              </li>
              <li className='droppable'>
                <a href='#'>Standards</a>
                <div className='mega-menu'>
                  <div className="container cf">
                    <ul className="ul-reset">
                      <li><a href='#'>Members</a></li>
                      <li><a href='#'>Subscribe</a></li>
                      <li><a href='#'>Categories</a></li>
                      <li><a href='#'>Downloads</a></li>
                      <li><a href='#'>Download public standards</a></li>
                      <li><a href='#'>Resources</a></li>
                      <li><a href='#'>Journals</a></li>
                      <li><a href='#'>Development</a></li>
                      <li><a href='#'>All Content Type</a></li>
    
                    </ul>
                   
                
                  </div>
                </div>
              </li>
    
              <li className='droppable'>
                <a href='#'>Education</a>
                <div className='mega-menu'>
                  <div className="container cf">
                    <ul className="ul-reset">
                      <li><a href='#'>Boot Camps</a></li>
                      <li><a href='#'>Course catalog</a></li>
                      <li><a href='#'>Store products</a></li>
                      <li><a href='#'>Programs</a></li>
                      <li><a href='#'>Leadership Institute</a></li>
                      <li><a href='#'>Webinars</a></li>
                      <li><a href='#'>Glossary</a></li>
                      
    
                    </ul>
                   
                
                  </div>
                </div>
              </li>
    
                   <li className='droppable'>
                <a href='#'>Events</a>
                <div className='mega-menu'>
                  <div className="container cf">
                    <ul className="ul-reset">
                      <li><a href='#'>Events Calendar</a></li>
                      <li><a href='#'>Chapter Events</a></li>
                      <li><a href='#'>Events Archieve</a></li>
                      <li><a href='#'>Cable Tec-Expo</a></li>
                      <li><a href='#'>General Information</a></li>
                      <li><a href='#'>Speakers</a></li>
                      <li><a href='#'>Documents</a></li>
                      <li><a href='#'>Documents ny AOE</a></li>
                      
    
                    </ul>
                   
                
                </div>
            </div>
          </li>
          <li className='droppable'>
            <a href='#'>Certification</a>
            <div className='mega-menu'>
              <div className="container cf">
                <ul className="ul-reset">
                  <li><a href='#'>Leader of the year</a></li>
                  <li><a href='#'>Profesional Certification</a></li>
                  <li><a href='#'>Certification Paths</a></li>
                  <li><a href='#'>Take an exam</a></li>
                  <li><a href='#'>General Information</a></li>
                  <li><a href='#'>Find Proctor</a></li>
                  
                  
    
                </ul>
               
            
            </div>
        </div>
        </li>
      <li className='droppable'>
        <a href='#'>Certification</a>
        <div className='mega-menu'>
          <div className="container cf">
            <ul className="ul-reset">
              <li><a href='#'>Chapter office Resources</a></li>
              <li><a href='#'>Find a chapter</a></li>
              <li><a href='#'>Chapter Events</a></li>
              
              
    
            </ul>
        
        </div>
    </div>
    </li>
    
    <li className='droppable'>
        <a href='#'>Membership</a>
        <div className='mega-menu'>
          <div className="container cf">
            <ul className="ul-reset">
              <li><a href='#'>Benefits</a></li>
              <li><a href='#'>My Accounts</a></li>
              <li><a href='#'>Member resources</a></li>
              
              
    
            </ul>
           
        
        </div>
    </div>
    </li>   
    
            </ul>
          </nav>
      </div>
      
      <div className="box3">
        <div className="row vc">
              <button className="btn">JOIN US</button>
              <button className="btn2">LOG IN</button>
              <img className="dd" src={Image1}/>
              <img className="ll" src={Image2}/>
            </div>
      </div>
    
      
      </div>
      

      


      <div className="container-fluid  lp">
     

          <div className="row  mm">
              <div className="col-md-12   kk">
                   <div className="col-md-4   zz">
                     
                        <img className="xx" src={Image3}/>
                        
                  </div> 
                  
                <div className="col-md-8   ">

                       <h1 className="cc">Education</h1>
                        <p className="head">SCTE-ISBE regularly updates the education and training programs it 
                             offers to the industry to stay current with the latest cable technologies</p>
                        <p className="head1"> All SCTE-ISBE courses and webinars are offered at significant
                             cost savings for SCTE-ISBE members.Take advantage of full spectrumb of SCTE-ISBE technical tools.</p> 
                             <button className="button-0 " type="button">JOIN SCTE.ISBE TODAY</button>
                           
                </div>
              
               
           
            </div>
           
          
         

      
         </div>
        
        </div>

        
      


    
        

       
        
        
        

   
     
           <Carousal/> 
        
  
       </div>
       
  
       
     
        
        
        
        
      
  
    );
    
}
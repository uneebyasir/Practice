import React from 'react'
import Home from './container/home/home'
import About  from './container/About/About'
import  Shop from './container/Shop/Shop'
import  Nav from './container/Nav/Nav'
import  Login from './container/Login/Login'
import  Slider from './components/Slider/Slider'



import {BrowserRouter , Switch,Route}  from 'react-router-dom'









export default() =>{
  return (


    
   
    <div>
     
      
 
      <BrowserRouter>
     
      
      <Route path ={"/"}  exact = {true} component= {Home}/>
      <Route path={"/Login"} component={Login}/> 
      {/* <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/> */}
      {/* <Nav/> */}
      
      
     </BrowserRouter>   
   
    
        
   

     {/* <Home/>  */}
    
   
     
    
   
     
    
     
    
    
    
  

  

    </div>
  
    


    

  
  
  );
}



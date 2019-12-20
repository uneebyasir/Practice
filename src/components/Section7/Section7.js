import React, { Component } from 'react'
import Style  from '../Section7/Section7.css'







export default()=>{


 
    return(
        <div className="container-fluid vb">
                                              <div className="ss d-flex flex-row">
                                                 <div className="row as ">
                                                <h1>QUESTION ? COMMENT?SOMETHING TO SAY?</h1>
                                                <button onClick={handleIncrement} className="button-7" type="button">LET US KNOW</button>


                                            </div>
                                                 </div>
                
                                           </div>
    

    );
    
}
function handleIncrement(){
    window.open('https:stackoverflow.com/questions/38518278/how-to-use-jquery-with-reactjs','blank')
}

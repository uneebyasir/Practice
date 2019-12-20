import React from 'react'

export default ()=>{
    return(

        <style js="true">{`
        .container-1{
            display: flex;
            justify-content: space-evenly;  
            width:100%;
            background: #0005;
          }
          .box-1{
            width:350px;  
          }
          .box-1 img{
            margin-left: 25px;
          }
          
          .box-2{
            display:flex;
            width:1000px;
           justify-content: space-evenly;
          }
          a {
            font-size: 19px;
          }
          .box-2 a{
            color:white;
            margin-top:10px;
          }
          .box3{
          
            width:350px;
            justify-content: space-evenly;
            display:flex;
          }
          .vc{
            display:flex;
            justify-content: space-between;
          }
          img.dd {
            margin-left: 15px;
            height: 30px;
          }
          img.ll {
            margin-left: 12px;
            height: 2pc;
          }
          
          
                                                                               /* navbar */
          
                                        /* NAV CSS */
           /* #Resets
          –––––––––––––––––––––––––––––––––––––––––––––––––– */
          html {box-sizing: border-box;}
          *, *:before, *:after {box-sizing: inherit;  }
          
          
          
          /* #Universal and Default Styles
          –––––––––––––––––––––––––––––––––––––––––––––––––– */
          body {
            font-family: "Open Sans", sans-serif;
            background-color: white;
            font-size: 14px;
          line-height: 1;
          margin: 0;
          padding: 0;
          text-align: center;
          }
          a {text-decoration: none;}
          
          .ul-reset {
          padding-left: 0;
           margin-top: 0;
           margin-bottom: 0;
          list-style: none;
          }
          
          
          
          /* #Navigation Styles
          –––––––––––––––––––––––––––––––––––––––––––––––––– */
          nav {
          font-size: 0;
          position: relative;
          }
          nav > ul > li {
          display: inline-block;
            font-size: 14px;
            padding: 0 15px;
            position: relative;
          }
          nav > ul > li:first-child {padding-left: 0;}
          nav > ul > li:last-child {padding-right: 0;}
          nav > ul > li > a {
          color: #fff;
            display: block;
            position: relative;
            padding: 20px 0;
            border-bottom: 3px solid transparent;
          }
          nav > ul > li:hover > a {
          color: white; 
            border-bottom: 3px solid white;
          }
          
          
          
          /* #Mega Menu Styles
          –––––––––––––––––––––––––––––––––––––––––––––––––– */
          .mega-menu {
          background: transpa;
            display: none;
            left: 0;
            position: absolute;
            text-align: left;
              width: 100%;     
          }
          
          .mega-menu ul {
          float: left;
            margin-bottom: 20px;
            margin-right: 40px;
            width: 205px;
          }
          .mega-menu ul:last-child {margin-right: 0;}
          .mega-menu a {
          border-bottom: 1px solid #ddd;
            color:white;
            display: block;
            padding: 10px 0;
          }
          .mega-menu a:hover {color: #2d6a91;}
          
          
          
          /* #Droppable Class Styles
          –––––––––––––––––––––––––––––––––––––––––––––––––– */
          .droppable {position: static;}
          .droppable > a:after {
          
            font-family: FontAwesome;
            font-size: 12px;
            padding-left: 6px;
            position: relative;
            top: -1px;
          }
          .droppable:hover .mega-menu {display: block;}
          
          
          
          /* #Browser Clearfix
          –––––––––––––––––––––––––––––––––––––––––––––––––– */
          .cf:before,
          .cf:after {
          content: " "; /* 1 */
           display: table; /* 2 */
          }
          .cf:after {clear: both;}        
          
          
          
                                                           /* navbarends                                                                 */
          button.button-1 {
            color: white;
          }
          button.button-2 {
            color: whitesmoke;
          }
          button.btn {
            color: white;
            border: 1px solid;
          }
          button.btn2 {
            color: white;
            background: orange;
            border: 6px solid orange;
            margin-left:15px;
          }
        
        
        
        
        `}
        </style>

    );
}
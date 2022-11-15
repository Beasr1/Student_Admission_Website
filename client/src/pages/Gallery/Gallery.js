import "./gallery.css";
import React,{ useState } from "react";
function Gallery() {
    return(

    <div class="row">
  <div class="column">
    <img src={require("../../assets/1.jpg")}/>
    <img src={require("../../assets/2.jpg")}/>
    <img src={require("../../assets/3.jpg")}/>
    <img src={require("../../assets/4.jpg")}/>
    <img src={require("../../assets/5.jpg")}/>
   
  </div>
  <div class="column">
    <img src={require("../../assets/9.jpg")}/>
    <img src={require("../../assets/10.jpg")}/>
    <img src={require("../../assets/12.jpg")}/>
    <img src={require("../../assets/13.jpg")}/>
    <img src={require("../../assets/8.jpg")}/>
  </div>
  <div class="column">
    <img src={require("../../assets/7.jpg")}/>
    <img src={require("../../assets/14.jpg")}/>
    <img src={require("../../assets/15.jpg")}/>
    <img src={require("../../assets/16.jpg")}/>
    <img src={require("../../assets/17.jpg")}/>
   

  </div>
  <div class="column">
  
    <img src={require("../../assets/19.jpg")}/>
    <img src={require("../../assets/20.jpg")}/>
    <img src={require("../../assets/21.jpg")}/>
    <img src={require("../../assets/22.jpg")}/>
    <img src={require("../../assets/18.jpg")}/>

  </div>
  </div>

    );

    }
    
export default Gallery;

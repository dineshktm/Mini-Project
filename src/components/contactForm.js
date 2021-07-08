import emailjs from "emailjs-com";
import React from 'react';
import fire from './fire';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom"; 
import './contactform.css';
import svg from '../img/order.png';
import phonepe from '../img/phonepe.jpg';
function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_72b0qdh', 'template_uceqw7k', e.target, 'user_NmjjDR3E0BFJ3x3zLmlIa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        document.querySelector(".popup").style.display="block";
        alert ("mail send Successfully !! we will reach you soon");
        var amount=document.querySelector("#rate");
        var qty=document.querySelector("#quantity");
        var advance=(amount.value*qty.value)/4;
        document.querySelector("#adv").innerHTML=`Pay an advance as ${advance} amount`;

        e.target.reset()
        
}

    function logout()
     {
        fire.auth().signOut();
        console.log("logout");
        {/* <Redirect to="/Login"></Redirect> */}
      }
      function close()
      {
          document.querySelector(".popup").style.display="none";
         

     }
    
    return(
       
        <div className="des-container">
        <div className="design">                
        <div className="content">                    
        <h4>Have SomeThing For Us!</h4>                    
        </div>                   
             <div className="svg">                       
             <img  id="svg" src={svg}  alt="svg"></img>                    
            </div>                              
         </div>
            <div className="container">
                <br></br>
               
            <div className="title">Order Booking</div>
            <div className="content">
             <form onSubmit={sendEmail}>
                <div className="user-details">
                <div className="input-box">
                        <span className="details"></span>
                        <input type="text" placeholder="Name" name="name" required></input>
                    </div>
                    <div className="input-box">
                        <span className="details"></span>
                        <input type="text" placeholder="Style" name="type" required></input>
                    </div>
                    <div className="input-box">
                        <span className="details"></span>
                        <input type="text" placeholder="Mobile Number" name="email" required></input>
                    </div>
                    <div className="input-box">
                        <span className="details"></span>
                        <input type="text" id="quantity" placeholder="Quantity" name="quantity" required></input>
                    </div>
                    <div className="input-box">
                        <span className="details"></span>
                        <input type="text" id="rate" placeholder="Rate" name="rate" required></input>
                    </div>
                    <div className="input-box">
                        <span className="details"></span>
                        <input type="text" placeholder="Measurements" name="message" required></input>
                    </div>
                    </div>
                    
                    <div className="col-8 pt-3 mx-auto">
                    <input id="btn-send" type="submit" className="btn btn-info" value="Send Message"></input>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
      </form>
      <div id="pop"className="popup">
          <div className="back">
              <img id="back" onClick={close} src="https://image.flaticon.com/icons/png/512/93/93634.png"></img>
          </div>
          <div className="advance">
              <h6 id="adv"></h6>
          </div>

          <div className="phonepe">
              <img id="phonepe" src={phonepe}></img>
          </div>
      </div>

      
      <div style={{textAlign: 'center'}}>
        <h1 id="h1">You Are Logged In</h1>
        {/* <button onClick = {logout}>Logout</button> */}
        <Link id="logout" class="nav-link" onClick = {logout} to="/Login">Logout</Link>
      </div>
    </div>
  </div>
  </div>
            
    );
}


export default  ContactUs;

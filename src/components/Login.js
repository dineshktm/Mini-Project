import React from 'react';
import fire from './fire';
import './Login.css';
import ContactUs from './contactForm';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom"; 
import svg from '../img/login.png';

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

   /* ------ */
  
  
   constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() 
  {
      if(this.state.user)
      {
        return  <Redirect to="/ContactUs"></Redirect> 
      }
      /* else
      {
        return  <Redirect to="/Login"></Redirect>
      } */
     /* this.state.user ?  return  <Redirect to="/Loginhome"></Redirect>  : return  <Redirect to="/Login"></Redirect>   */
    return (
      <div>
        {/* <p>hai thi is dinesh kumar</p> */}
        <div className="order">
         

        <div class="container">  
        <div className="svg">
            <img id="svg"src={svg}></img>
          </div>
          <div class="forms-container">  
            <div class="signin-signup">
             <form action="#" class="sign-in-form">
                 <h2 class="title">Sign in with Jayasakthi Printers</h2>
                  <div class="input-field">
                     <i class="fa fa-user"></i>
                     <input type="text" placeholder="Username" name="username" id="email"/>
                  </div>
                  <div class="input-field">
                     <i class="fa fa-lock"></i>
                     <input type="password" placeholder="Password" name="password" id="password"/>
                  </div>
                  <div className="losp">
                        <input type="submit" class="btn solid" onClick={this.login} value="Login"/>
                        <input type="submit" class="btn solid" onClick={this.signUp} value="SignUp"/>
                        {/* <input type="submit" class="btn solid" value="Login"/>
                        <input type="submit" class="btn solid"  value="SignUp"/> */}
                  </div>
                 {/* <p class="social-text">Sign in with social platform</p>
                  <div class="social-media">
                     <a href="#" class="social-icon">
                        <i class="fab fa-facebook-f"> </i>
                     </a>   
                     <a href="#" class="social-icon">
                        <i class="fab fa-twitter"> </i>
                     </a>   
                     <a href="#" class="social-icon">
                        <i class="fab fa-google"> </i>
                     </a>   
                     <a href="#" class="social-icon">
                        <i class="fab fa-linkedin-in"> </i>
                     </a>   
                  </div> */}
                  <div className="content">
                    <p>If you already have an Account,you can just login using your creditionals</p></div>
             </form>
            </div>
          </div>
        {/* 
        <button style={{margin: '10px'}} onClick={this.login}>Login</button>
        <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button> */}
        </div>
      </div>
      </div>);
      }
}

export default Login;


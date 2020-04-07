import React from 'react';
import {withGetScreen} from 'react-getscreen';
import './Main.css';

class Main extends React.Component{
  state={
    email:'',
    emailError:'',
    password:'',
    passwordError:'',
    confirmPassword:'',
    confirmPasswordError:'',
  }

  onChangeEmail = (e)=>{
    this.setState({emailError:'',email:e.target.value}, ()=>{
      let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if(reg.test(this.state.email) === false){
        this.setState({emailError:"Invalid email"})
      }
    });
  }

  onChangePassword = (e) =>{
    this.setState({passwordError:'', password:e.target.value}, ()=>{
      if(this.state.password.length<8){
        this.setState({passwordError:"Password length should be minimum 8"})
      }
    })
  }

  onChangeConfirmPassword = (e) =>{
    this.setState({confirmPasswordError:'', confirmPassword:e.target.value}, ()=>{
      if(this.state.password!==this.state.confirmPassword){
        this.setState({confirmPasswordError:"Passwords don't match"})
      }
    })
  }

  handleContinue = () =>{
    if(this.state.emailError.length===0 &&
      this.state.passwordError.length===0 &&
      this.state.confirmPasswordError.length===0 &&
      this.state.email.trim().length!==0 &&
      this.state.password.trim().length!==0 &&
      this.state.confirmPassword.trim().length!==0){
        localStorage.setItem("naya" , JSON.stringify(
          {
            "email":this.state.email,
            "type":'',
            "designer-capacity" : 0,
            "designer-type": '',
            "designer-training":'',
            "maker-capacity":'',
            "maker-material":[],
            "maker-location":'',
          }
        ))
        window.location.href="/landing";
      }
      else{
        if(this.state.emailError.length===0){
          if(this.state.email.trim().length===0){
            this.setState({emailError:'Email cannot be empty'})
          }
        }
        if(this.state.passwordError.length===0){
          if(this.state.password.trim().length===0){
            this.setState({passwordError:'Password cannot be empty'})
          }
        }
        if(this.state.confirmPasswordError.length===0){
          if(this.state.confirmPassword.trim().length===0){
            this.setState({confirmPasswordError:'Retype the password'})
          }
        }
      }
    
  }

  render(){
    const {email, emailError, password, passwordError, confirmPassword, confirmPasswordError} = this.state;
    return(
      <div className={this.props.isMobile() ? "main-container-mobile" : "main-container-web"}>
        <div className={this.props.isMobile() ? "text-container-mobile" : "text-container-web"}>
          <div className={this.props.isMobile() ? "text-inner-container-mobile" : "text-inner-container-web"}>
            <h1>naya</h1>
            <p>We aim to give you a better experience as a designer or a maker. Join us to be a part of this ecosystem.</p>
          </div>
        </div>
        <div className={this.props.isMobile() ? "email-password-container-mobile" : "email-password-container-web"}>
          <p className="get-started-text">Let's get started!</p>
            <span className="error">{emailError}</span>
            <input 
              value={email}
              onChange={this.onChangeEmail}
              type="text" 
              placeholder="Email" 
              className="input-main"/>

            <span className="error">{passwordError}</span>
            <input 
              type="password" 
              placeholder="Password" 
              className="input-main"
              value={password}
              onChange={this.onChangePassword}/>
            
            <span className="error">{confirmPasswordError}</span>
            <input 
              type="password" 
              placeholder="Confirm password" 
              className="input-main"
              value={confirmPassword}
              onChange={this.onChangeConfirmPassword}/>
            <button 
              onClick={this.handleContinue}
              className="get-started-button">
                Get Started
            </button>
        </div>
      </div>
    )
  }
}

export default withGetScreen(Main);

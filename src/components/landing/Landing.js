import React from 'react';
import DesignerSelected from './../../assets/designer-selected.png';
import DesignerUnselected from './../../assets/designer-unselected.png';
import MakerSelected from './../../assets/maker-selected.jpg';
import MakerUnselected from './../../assets/maker-unselected.jpg';
import './Landing.css';

class Landing extends React.Component{
  state={
    designer:false,
    maker:false,
  }
  render(){
    const {designer, maker} = this.state;
    return(
      <div className="landing-container">
        <div className="header-container">
          <h1>naya</h1>
          <button className="signin-button">Signin</button>
        </div>
        <div className="landing-content">
          <h2>What do you want to register as?</h2>
          <div className="images-container">
            <div 
              onClick={()=>{this.setState({designer:!this.state.designer})}}
              className="image-title">
              <img src={designer ? DesignerSelected : DesignerUnselected} className="image" alt=""/>
              <h4>Designer</h4>
            </div>
            <div 
              onClick={()=>{this.setState({maker:!this.state.maker})}}
              className="image-title">
              <img src={maker ? MakerSelected : MakerUnselected} className="image" alt=""/>
              <h4>Maker</h4>
            </div>
          </div>
          <button 
            onClick={()=>{
              if(maker && designer){
                let data = JSON.parse(localStorage.getItem("naya"));
                data["type"] = 'designer-maker';
                localStorage.setItem("naya", JSON.stringify(data))
                window.location.href="/questionnaire/designer-maker";
              }
              else if(designer){
                let data = JSON.parse(localStorage.getItem("naya"));
                data["type"] = 'designer';
                localStorage.setItem("naya", JSON.stringify(data))
                window.location.href="/questionnaire/designer";
              }
              else if(maker){
                let data = JSON.parse(localStorage.getItem("naya"));
                data["type"] = 'maker';
                localStorage.setItem("naya", JSON.stringify(data))
                window.location.href="/questionnaire/maker";
              }
            }}
            className="continue-button">Continue</button>
        </div>
      </div>
    )
  }
}

export default Landing;
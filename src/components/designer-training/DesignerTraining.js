import React from 'react';
import './DesignerTraining.css';

class DesignerTraining extends React.Component{
  state = {
    training:'',
  }

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem("naya"))
    this.setState({training:data["designer-training"]})
  }

  onChange = (e) =>{
    this.setState({training: e.target.value}, () => {
      let data = JSON.parse(localStorage.getItem("naya"));
      data["designer-training"] = this.state.training;
      localStorage.setItem("naya", JSON.stringify(data))
    })
  }

  render(){
    return(
      <div className="designer-capacity-container">
        <h4>What is your education level or type?</h4>
        <input 
          type="text" 
          placeholder="Education level" 
          className="input-time"
          value={this.state.training}
          onChange={this.onChange}/>
      </div>
    )
  }
}

export default DesignerTraining;
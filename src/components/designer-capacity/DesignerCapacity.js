import React from 'react';
import './DesignerCapacity.css';

class DesignerCapacity extends React.Component{
  state = {
    capacity:0
  }

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem("naya"))
    this.setState({capacity:data["designer-capacity"]})
  }

  onChange = (e) => {
    this.setState({capacity:e.target.value})
  }

  componentWillUnmount(){
    let data = JSON.parse(localStorage.getItem("naya"));
    data["designer-capacity"] = this.state.capacity;
    localStorage.setItem("naya", JSON.stringify(data))
  }

  render(){
    return(
      <div className="designer-capacity-container">
        <h4>How much time can you spend on Naya projects per week?</h4>
        <input 
          type="number" 
          placeholder="Time in hours" 
          className="input-time"
          value={this.state.capacity}
          onChange={this.onChange}/>
      </div>
    )
  }
}

export default DesignerCapacity;
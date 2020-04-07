import React from 'react';
import './MakerCapacity.css';

class MakerCapacity extends React.Component{
  state = {
    selectValue:1
  }

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem("naya"))
    this.setState({training:data["maker-capacity"]})
  }

  handleChange = (e) =>{
    this.setState({selectValue:e.target.value});
  } 

  componentWillUnmount(){
    let data = JSON.parse(localStorage.getItem("naya"));
    data["maker-capacity"] = this.state.selectValue;
    localStorage.setItem("naya", JSON.stringify(data))
    console.log(JSON.parse(localStorage.getItem("naya")))
  }

  render(){
    return(
      <div className="designer-capacity-container">
        <h4>
        How many projects on average do you work on every month?
        </h4>
        <div className="dropdown-container">
          <select defaultValue={this.state.selectValue} 
          onChange={this.handleChange} 
          >
              <option value="1" className="dropdown-content">1</option>
              <option value="2" className="dropdown-content">2</option>
              <option value="3" className="dropdown-content">3</option>
              <option value="4" className="dropdown-content">4</option>
              <option value="5" className="dropdown-content">5</option>
              <option value="6" className="dropdown-content">6</option>
              <option value="7" className="dropdown-content">7</option>
              <option value="8" className="dropdown-content">8</option>
              <option value="9" className="dropdown-content">9</option>
              <option value="10+" className="dropdown-content">10+</option>
          </select>
        </div> 
      </div>
    )
  }
}

export default MakerCapacity;
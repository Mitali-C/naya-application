import React from 'react';
import './MakerLocation.css';

class MakerLocation extends React.Component{
  state={
    location:''
  }

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem("naya"))
    this.setState({location:data["maker-location"]})
  }

  onChangeLocation = (e) =>{
    this.setState({location: e.target.value}, ()=>{
      let data = JSON.parse(localStorage.getItem("naya"));
      data["maker-location"] = this.state.location;
      localStorage.setItem("naya", JSON.stringify(data))
    })
  }

  render(){
    return(
      <div className="designer-capacity-container">
        <h4>Where are your based out of?</h4>
        <input 
          type="text" 
          placeholder="Location" 
          className="input-time"
          value={this.state.location}
          onChange={this.onChangeLocation}/>
      </div>
    )
  }
}

export default MakerLocation;
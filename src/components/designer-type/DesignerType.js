import React from 'react';
import './DesignerType.css';

class DesignerType extends React.Component{
  state = {
    types:[
      {name:"Furniture Designer", id:0},
      {name:"Architect", id:1},
      {name:"Interior Designer", id:2},
      {name:"Industrial Designer", id:3},
      {name:"Designer Maker", id:4},
      {name:"Other", id:5},
    ],
    checked:''
  }

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem("naya"))
    this.setState({checked:data["designer-type"]})
  }

  componentWillUnmount(){
    let data = JSON.parse(localStorage.getItem("naya"));
    data["designer-type"] = this.state.checked;
    localStorage.setItem("naya", JSON.stringify(data))
    console.log(JSON.parse(localStorage.getItem("naya")))
  }

  render(){
    const {types, checked} = this.state;
    return(
      <div className="designer-type-container">
        <h4>Which of the following best describes you?</h4>
        <div className="radio">
          {
            types.map((type, index) => (
              <div className="button-title">
                <label>
                    <input 
                      type="radio" 
                      value={type.name}
                      checked={checked===type.name}
                      onClick={()=>{this.setState({checked:type.name})}}/> 
                    {type.name}<span></span>
                  </label>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default DesignerType;
import React from 'react';
import './MakerMaterial.css';

class MakerMaterial extends React.Component{
  state = {
    materials:[
      {name:"Wood", checked:false},
      {name:"Metal", checked:false},
      {name:"Glass", checked:false},
      {name:"Plastic", checked:false},
      {name:"Concrete", checked:false},
      {name:"Other", checked:false},
    ]
  }

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem("naya"))
    if(data["maker-material"].length!==0) {
      this.setState({materials:data["maker-material"]})
    }
  }

  componentWillUnmount(){
    let data = JSON.parse(localStorage.getItem("naya"));
    data["maker-material"] = this.state.materials;
    localStorage.setItem("naya", JSON.stringify(data))
  }

  render(){
    const {materials} = this.state;
    return(
      <div className="designer-capacity-container">
        <h4>What kind of materials can you work with?</h4>
        {
          materials.map((material, index) => (
            <label className="container" key={index}>
              <h6 style={{marginLeft: '20px'}}>{material.name}</h6>
              <input 
                type="checkbox" 
                checked={material.checked}
                value={material.name}
                onClick = {(e)=>{
                  let temp=materials;
                  temp[index].checked = !temp[index].checked;
                  this.setState({materials: temp})
                }}/>
              <span className="checkmark"></span>
            </label>
          ))
        }
      </div>
    )
  }
}

export default MakerMaterial;
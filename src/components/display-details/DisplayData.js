import React from 'react';
import {Container} from 'reactstrap';
import {withGetScreen} from 'react-getscreen'
import './DisplayData.css';

class DisplayData extends React.Component{
  state={
    data:[],
  }
  componentDidMount(){
    this.setState({data:JSON.parse(localStorage.getItem("naya"))})
  }
  render(){
    const {data} = this.state;
    return(
      <div className="details-container">
        <h1 style={{marginLeft:'10px'}}>naya</h1>
        <Container className={!this.props.isMobile() && "details-box"}>
          <h1>Details</h1>
          {
            data.length!==0 && (
              <>
                <div className="title-value-container">
                  <div className="title">Email:</div>
                  <h6 className="value">{data["email"]}</h6>
                </div>
                <div className="title-value-container">
                  <div className="title">Registered as:</div>
                  <h6 className="value">{data["type"]}</h6>
                </div>
                {
                  data["designer-capacity"] !== 0 && (
                    <div className="title-value-container">
                      <div className="title">Time you can spend on Naya projects per week:</div>
                      <h6 className="value">{data["designer-capacity"]} hours</h6>
                    </div>
                  )
                }
                {
                  data["designer-type"].length !== 0 && (
                    <div className="title-value-container">
                      <div className="title">You are best described as:</div>
                      <h6 className="value">{data["designer-type"]}</h6>
                    </div>
                  )
                }
                {
                  data["designer-training"].length !== 0 && (
                    <div className="title-value-container">
                      <div className="title">Education level:</div>
                      <h6 className="value">{data["designer-training"]}</h6>
                    </div>
                  )
                }
                {
                  data["maker-capacity"].length !== 0 && (
                    <div className="title-value-container">
                      <div className="title">Average no. projects you work on every month:</div>
                      <h6 className="value">{data["maker-capacity"]}</h6>
                    </div>
                  )
                }
                {
                  data["maker-material"].length !== 0 && (
                    <div className="title-value-container">
                      <div className="title">Materials can you work with:</div>
                      <ul>
                        {
                          data["maker-material"].map((material, index)=>{
                            if(material.checked){
                              return(
                                <li key={index}><h6 className="value">{material.name}</h6></li>
                              )
                              
                            }
                          })
                        }
                      </ul>
                    </div>
                  )
                }
                {
                  data["maker-location"].length !== 0 && (
                    <div className="title-value-container">
                      <div className="title">You are based out of:</div>
                      <h6 className="value">{data["maker-location"]}</h6>
                    </div>
                  )
                }
              </>
            )
          }
        </Container>
      </div>
    )
  }
}

export default withGetScreen(DisplayData);
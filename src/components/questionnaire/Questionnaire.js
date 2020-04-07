import React from 'react';
import DesignerCapacity from './../designer-capacity/DesignerCapacity';
import DesignerTraining from './../designer-training/DesignerTraining';
import Designertype from './../designer-type/DesignerType';
import MakerCapaity from './../maker-capacity/MakerCapacity';
import MakerLocation from './../maker-location/MakerLocation';
import MakerMaterial from './../maker-material/MakerMaterial';
import './Questionnaire.css';

class Questionnaire extends React.Component{
  state = {
    data:[
      {capacityDesigner:2}
    ],
    designer:[
      {id:0, component:<DesignerCapacity/>},
      {id:1, component:<Designertype/>},
      {id:2, component:<DesignerTraining/>},
    ],
    maker:[
      {id:0, component:<MakerCapaity/>},
      {id:1, component:<MakerMaterial/>},
      {id:2, component:<MakerLocation/>},
    ],
    designerMaker:[
      {id:0, component:<DesignerCapacity/>},
      {id:1, component:<Designertype/>},
      {id:2, component:<DesignerTraining/>},
      {id:3, component:<MakerCapaity/>},
      {id:4, component:<MakerMaterial/>},
      {id:5, component:<MakerLocation/>},
    ],
    type:this.props.match.params.type,
    current:0
  }
  render(){
    const {type, designer, maker, designerMaker, current} = this.state;
    return(
      <div className="questionnaire-container">
        {/* <div className="timeline-container"> */}
        {
          type==="designer" && (
            <div className="timeline-question-container" style={{maxWidth:window.innerWidth-40}}>
              <div className="timeline-container">
              {
                designer.map((question, index) => (
                  <>
                      <div key={index} className={index<=current ? "timeline-point" : "timeline-point-unfilled"}>{question.id}</div>
                      {index!==designer.length-1 && (<div className={index<=current ? "timeline-line" : "timeline-line-unfilled"}/>)}
                  </>
                ))
              }
              </div>
              <div className="question-container">
                {designer[current].component}
              </div>
              <div className="prev-next-buttons-container">
                <button 
                  disabled={current !==0 ? false : true}
                  className="prev-next-button"
                  onClick={()=>{this.setState({current:this.state.current-1})}}
                >Prev</button>
                {
                  current !==designer.length-1  && (
                    <button 
                      className="prev-next-button"
                      onClick={()=>{this.setState({current:this.state.current+1})}}
                    >Next</button>
                  )
                }
                {
                  current ===designer.length-1  && (
                    <button 
                      className="signin-button"
                      onClick={()=>{window.location.href="/display-data"}}
                    >Submit</button>
                  )
                }
              </div>
            </div>
          )
        }
        {
          type==="maker" && (
            <div className="timeline-question-container">
              <div className="timeline-container">
              {
                maker.map((question, index) => (
                  <>
                      <div className={index<=current ? "timeline-point" : "timeline-point-unfilled"}>{question.id}</div>
                      {index!==maker.length-1 && (<div className={index<=current ? "timeline-line" : "timeline-line-unfilled"}/>)}
                  </>
                ))
              }
              </div>
              <div className="question-container">
                {maker[current].component}
              </div>
              <div className="prev-next-buttons-container">
                <button 
                  disabled={current !==0 ? false : true}
                  className="prev-next-button"
                  onClick={()=>{this.setState({current:this.state.current-1})}}
                >Prev</button>
                {
                  current !==maker.length-1  && (
                    <button 
                      className="prev-next-button"
                      onClick={()=>{this.setState({current:this.state.current+1})}}
                  >Next</button>
                  )
                }
                {
                  current ===maker.length-1  && (
                    <button 
                      className="signin-button"
                      onClick={()=>{window.location.href="/display-data"}}
                    >Submit</button>
                  )
                }
              </div>
            </div>
          )
        }
        {
          type==="designer-maker" && (
            <div className="timeline-question-container">
              <div className="timeline-container">
              {
                designerMaker.map((question, index) => (
                  <>
                      <div className={index<=current ? "timeline-point" : "timeline-point-unfilled"}>{question.id}</div>
                      {index!==designerMaker.length-1 && (<div className={index<=current ? "timeline-line" : "timeline-line-unfilled"}/>)}
                  </>
                ))
              }
              </div>
              <div className="question-container">
                {designerMaker[current].component}
              </div>
              <div className="prev-next-buttons-container">
                <button 
                  disabled={current !==0 ? false : true}
                  className="prev-next-button"
                  onClick={()=>{this.setState({current:this.state.current-1})}}
                >Prev</button>
                {
                  current !==designerMaker.length-1  && (
                    <button 
                      className="prev-next-button"
                      onClick={()=>{this.setState({current:this.state.current+1})}}
                  >Next</button>
                  )
                }
                {
                  current ===designerMaker.length-1  && (
                    <button 
                      className="signin-button"
                      onClick={()=>{window.location.href="/display-data"}}
                    >Submit</button>
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Questionnaire;
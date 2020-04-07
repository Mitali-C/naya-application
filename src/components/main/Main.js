import React from 'react';

class Main extends React.Component{
  render(){
    return(
      <div>
        <h1>Main</h1>
        <button onClick={()=>{window.location.href="/landing"}}>navigate</button>
      </div>
    )
  }
}

export default Main;
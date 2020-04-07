import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/main/Main';
import Landing from './components/landing/Landing';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/landing" component={Landing} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

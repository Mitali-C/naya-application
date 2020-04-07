import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Main from './components/main/Main';
import Landing from './components/landing/Landing';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/landing" component={Landing} />
          <Route path='/display-data' component={Main}></Route>
          <Route path='/questionnaire/:type' component={Landing}></Route>
          <Route path='*' exact={true} component={Main} />
          <Redirect from='*' to='/404' /> 
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'; 
import ListPolicy from '../ListPolicy';
import {HashRouter as Router} from 'react-router-dom';
// import PolicyItem from '../PolicyItem';
const MeinRouter = () => {
  return (
    <Router basename='/'>
      <Switch>
          <Route exact path="/" component={ ListPolicy }/>
          {/* <Route path="/prisoners/:id" component={ PolicyItem }/> */}
      </Switch>
    </Router>
  )
}

export default MeinRouter; 
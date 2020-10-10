import React from 'react';
import {Route, Switch} from 'react-router-dom'; 
import SearchInmates from '../SearchInmates';
import {MemoryRouter as Router} from 'react-router-dom';
import InmateDetails from '../InmateDetailContainer/InmateDetails';

const MeinRouter = () => {
  return (
    <Router basename='/'>
      <Switch>
        <Route exact path="/" component={ SearchInmates }/>
        <Route path="/prisoners/:id" component={ InmateDetails }/>
      </Switch>
    </Router>
  )
}

export default MeinRouter; 
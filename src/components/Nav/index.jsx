import React from 'react';

// You're likely missing some imports...
//importing react router from the react router dom folder
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../Home'
import About from '../About'
import Styles from './styles';

// Don't forget to import your components

const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            {/* Your link to home here */}
            <Link to="/">Home</Link>

          </li>
          <li>
            {/* Your link to about here */}
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
        {/* Your Routes Here */}
        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route exact path="/about">
         <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;
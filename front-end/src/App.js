import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CocktailsContainer from './CocktailsContainer'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to='/cocktails' >Cocktails</Link>
            <Route path='/cocktails' component={CocktailsContainer} />
            <Route exact path='/' render={()=> <h1>Welcome!</h1>}/>
          </div>
        </Router>
    </div>
    );
  }
}

export default App;

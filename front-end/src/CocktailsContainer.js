import React, {Component} from 'react';
import CocktailsList from './CocktailsList'
import {Route} from 'react-router-dom'
import CocktailShow from './CocktailShow'

export default class CocktailsContainer extends Component {
  state = {
    cocktails: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        cocktails: [...json]
      })
    })
  }


  render() {
    return(
      <div>
        <Route exact path='/cocktails' render={() => <CocktailsList cocktails={this.state.cocktails} />
        } />
        <Route path='/cocktails/:id' component={CocktailShow} />
    </div>
    )
  }

}

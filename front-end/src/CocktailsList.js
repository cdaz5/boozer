import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class CocktailsList extends Component {


  render() {
    return (
      <div>
        <ul>
          {this.props.cocktails.map(cocktail =>
          <li><Link to={`cocktails/${cocktail.id}`}>{cocktail.name}</Link></li>
          )
        }
        </ul>
      </div>
    )
  }
}

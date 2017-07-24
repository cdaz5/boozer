import React, {Component} from 'react';

export default class CocktailShow extends Component {
  state = {
    currentCock: {}
  }

componentDidMount() {
  const cockID = this.props.match.params.id
  fetch(`http://localhost:3000/api/v1/cocktails/${cockID}`)
  .then(resp => resp.json())
  .then(json => {
    this.setState({
      currentCock: json
    })
  })
}

  shouldRender(){
    return !!this.state.currentCock.proportions ? <div>
      Name: {this.state.currentCock.name}<br/><br/>
      Description: {this.state.currentCock.description}<br/><br/>
      Instructions: {this.state.currentCock.instructions}<br/><br/>
      Proportions:
      <ul>
        {this.state.currentCock.proportions.map(p => (
          <li>{p.ingredient_name}: {p.amount}</li>
        ))}
      </ul>
    </div> : null
  }


  render() {
    return (this.shouldRender())
  }
}

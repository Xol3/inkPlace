import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import {Dropdown} from 'reactjs-dropdown-component';

class App extends Component {
    constructor(){
    super()
    this.state = {}

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  render() {
    return (
      <div className="App">
        <p>Dropdown menu examples</p>
      <div>
          <Dropdown
            title="Select styles"
            list={this.state.styles}
            resetThenSet={this.resetThenSet}
          />
        </div>
      </div>
    );
  }
}

// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;

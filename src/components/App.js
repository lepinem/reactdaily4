import React, {Component} from 'react';
import '../styles/App.css';
import Jumbotron from './Jumbotron';
import Trucks from './Trucks';
import Fliers from './Fliers';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pilot:''
    }
  }

  _handleNameChange = (pilot) => {
    this.setState({pilot: pilot})
  }

  render(){
    return (
      <div className="App">
        <Jumbotron />
        <Fliers
          nameChange={this._handleNameChange}
          pilot = {this.state.pilot}
        />
        <Trucks />

      </div>
    )
  }
}
export default App;

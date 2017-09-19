import React, {Component} from 'react';
import '../styles/App.css';
import Jumbotron from './Jumbotron'
import getVehicles from '../services'

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:

  constructor(props) {
    super(props);

    this.state = {
      pilotText: '',
      value: '',
      pilots: [],
      vehicles: []
    }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

    // this.handlePilotTextChange = this.handlePilotTextChange.bind(this);
    // // this.handleValueChange = this.handleValueChange.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  handlePilotTextChange(submit){
    this.setState({
      pilotText: submit.target.value
    })
  }

  // handleValueChange(submit){
  //   this.setState({
  //     value: submit.target.value
  //   })
  // }

  handleFormSubmit(submit){
    submit.preventDefault()
    const newPilot = {
      pilot: this.state.pilotText
    }
    const pilots = this.state.pilots;
    pilots.pop(0);
    pilots.push(newPilot)

    this.setState({
      pilots: pilots,
      pilot: '',
      pilotText: ''
    })
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  // fetchVehicles = (showVal) => {
  //    getVehicles(showVal).then((response) => {
  //       this.setState({ vehicles: response })
  //    })
  // }
  // componentDidMount(){
  //    this.fetchVehicles()
  // }

  //
  componentWillMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(r => r.json() )
    .then((json) => {
      console.log(json)
      this.setState({vehicles: json.results})
    })
  }
  //
  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // // Map over the data.
  // // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    let vehicles = this.state.vehicles
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    // })
    return (
      <div className="App">
        <Jumbotron />
        <div className="card">
          <div className="card-block">
            <h2>What is your name, pilot?</h2>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <input value={this.state.pilotText} onChange={this.handlePilotTextChange} className="form-control col-md-3" name="pilot"  type="text"/>
              </div>
              <div className="form-group pull-right">
                <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
              </div>
            </form>
            <div className="card pilot col-md-5">
              {this.state.pilots.map((pilot) => {
                return(
                  <div>
                  <h2>{pilot.pilot}</h2>
                </div>
              )
              })}
            </div>
          </div>
        </div>
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
      </div>
    );
  }
}

export default App;

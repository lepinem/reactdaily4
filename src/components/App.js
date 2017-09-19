import React, {Component} from 'react';
import '../styles/App.css';
import Jumbotron from './Jumbotron'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pilotText: '',
      value: '',
      pilots: [],
      vehicles: []
    }
  }

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

  componentWillMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(r => r.json() )
    .then((json) => {
      this.setState({vehicles: json.results})
    })
  }

  render() {
    let vehicles = (this.state.vehicles).map((vehicle) => {

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
        <div className="card" >
          <div className="card-block">
            <h4 className="card-title">Name: {vehicle.name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h6>
            <ul class="list-group list-group-flush">
              <h6 class="list-group-item-heading">Specs</h6>
                <li class="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                <li class="list-group-item">Class: {vehicle.vehicle_class}</li>
                <li class="list-group-item">Passengers: {vehicle.passengers}</li>
                <li class="list-group-item">Crew: {vehicle.crew}</li>
                <li class="list-group-item">Length: {vehicle.length}</li>
                <li class="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
                <li class="list-group-item">Cargo: {vehicle.cargo_capacity}</li>
            </ul>
          </div>
        </div>
      </div>
    )
    })
    return (
      <div className="quake-list">
        <div className="row">
          {vehicles}
        </div>
      </div>
    )
  }
}

export default App;

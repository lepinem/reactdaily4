// Trucks.js

import React, { Component } from 'react'
// import getTrucks from '../services';


export default class Trucks extends Component {
  constructor(props){
     super(props);
     this.state = {
        vehicles: []
     }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(r => r.json() )
    .then((json) => {
      this.setState({vehicles: json.results})
    })
  }

  render() {
    let vehicle = (this.state.vehicles).map((vehicle) => {
      return(
        <div className="row" key={vehicle.name}>
          <div className="w-40 p-2">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Name: {vehicle.name}</h4>
                <h6 className="card-subtitle mb-2">Model: {vehicle.model}</h6>
              </div>
              <div className="card-block">
                <ul className="list-group list-group-flush">
                  <h6 className="card-subtitle mb-2 text-muted">Specs</h6>
                  <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                  <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
                  <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                  <li className="list-group-item">Crew: {vehicle.crew}</li>
                  <li className="list-group-item">Length: {vehicle.length}</li>
                  <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
                  <li className="list-group-item">Cargo: {vehicle.cargo_capacity}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="card-deck-wrapper">
            {vehicle}
      </div>
    )
  }
}

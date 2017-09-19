// Jumbotron.js
import React, { Component } from 'react'


export default class Jumbotron extends Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbo-tron">
              <h1>Star Wars</h1>
              <hr></hr>
              <h4>The Vehicles of Star Wars</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

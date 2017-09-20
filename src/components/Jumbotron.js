// Jumbotron.js
import React, { Component } from 'react'


export default class Jumbotron extends Component {
  render(){
    return(
      <div className="jumbotron rounded w-75">
        <h1 className="display-3">Star Wars</h1>
        <hr className="my-4" />
        <p className="lead">The Vehicles of Star Wars</p>
      </div>
    )
  }
}

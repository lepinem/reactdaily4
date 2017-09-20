// Fliers.js

import React, { Component } from 'react'

export default class Fliers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''

    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(submit){
    this.setState({
      name: submit.target.value
    })
  }

  handleFormSubmit(submit){
    submit.preventDefault()
    this.props.nameChange(this.state.name)

    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className="card text-center w-75">
        <div className="card-title">
          <h2>What is your name, pilot?</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div className="card-block">
              <div className="form-group-center">
                <input className="form-control" type="text" value={this.state.name} name="name" placeholder="Enter Name" onChange={this.handleNameChange}/>
              </div>
            </div>
            <div className="card-block">
              <div className="form-group-center ">
                <input className="btn btn-primary" type="submit" value='Submit' />
              </div>
            </div>
          </form>
          <div className="card-footer p-2">
              <h2> {this.props.pilot} </h2>
          </div>
        </div>
      </div>
    )
  }
}

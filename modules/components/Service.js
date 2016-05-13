import React, { Component } from 'react'

export default class Service extends Component {
  render() {
    let name = this.props.url ? <a href={this.props.url} target="_blank">{this.props.name}</a> : <span>{this.props.name}</span>
    return(
      <li>
        <div className="container">
          {name}
          <br />
          <span>{this.props.phone}</span>
          <hr />
        </div>
      </li>
    )
  }
}

import React, { Component } from 'react'
import $ from 'jquery'

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = { edit: false }
  }

  toggleEdit(e) {
    if (e !== 'skip')
      e.preventDefault()
    this.setState({ edit: !this.state.edit })
  }

  updateService(e) {
    e.preventDefault()
    let name = this.refs.name.value
    let phone = this.refs.phone.value
    let url = this.refs.url.value
    $.ajax({
      url: `/api/services/${this.props._id}`,
      type: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({ name, phone, url, id: this.props._id })
    }).done( service => {
      this.toggleEdit('skip')
      this.props.updateService(service)
    })
  }

  deleteService(e) {
    e.preventDefault()
    let choice = confirm('Really delete this service?')
    if (choice) {
      $.ajax({
        url: `/api/services/${this.props._id}`,
        type: 'DELETE',
        contentType: 'application/json',
        data: JSON.stringify({ id: this.props._id })
      }).done( service => {
        this.props.removeService(service.id)
      })
    }
  }

  show() {
    return(
      <div className="row">
        <div className="col s6">
          <span>{this.props.name}</span>
        </div>
        <div className="col s3">
          <a href="" onClick={(e) => this.toggleEdit(e)}>Edit</a>
        </div>
        <div className="col s3">
          <a href="" onClick={(e) => this.deleteService(e)}>Delete</a>
        </div>
      </div>
    )
  }

  edit() {
    return(
      <div>
        <form onSubmit={(e) => this.updateService(e)}>
          <input ref="name" defaultValue={this.props.name} required={true} />
          <input ref="url" defaultValue={this.props.url} />
          <input ref="phone" defaultValue={this.props.phone} />
          <button className="btn grey" onClick={(e) => this.toggleEdit(e)}>Cancel</button>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    )
  }

  render() {
    if (this.state.edit)
      return this.edit()
    else
      return this.show()
  }
}

export default Service

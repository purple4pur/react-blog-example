import React, { PureComponent } from 'react'

export default class BlogItem extends PureComponent {
  render() {
    return (
      <li>
        <h3>{this.props.title}</h3>
        <span>{this.props.body}</span>
      </li>
    )
  }
}

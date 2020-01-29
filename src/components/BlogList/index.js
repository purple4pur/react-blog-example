import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import BlogItem from './BlogItem'

class BlogList extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <ul>
        {
          this.props.list.map(item => (
            <BlogItem key={item.id} title={item.title} body={item.body} />
          ))
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.blog.list,
  isLoading: state.blog.isLoading
})

export default connect(
  mapStateToProps
)(BlogList)

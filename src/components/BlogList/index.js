import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import BlogItem from './BlogItem'
import { fetchBlogList } from 'redux/actions'

class BlogList extends PureComponent {
  componentDidMount() {
    this.props.fetchBlogList()
  }

  render() {
    console.log(this.props)
    return (
      this.props.isLoading
        ? <div>Loading...</div>
        : <ul>
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
  mapStateToProps,
  { fetchBlogList }
)(BlogList)

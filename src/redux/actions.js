import actionTypes from './actionTypes'
import { getPosts } from 'services'

const startFetchBlogList = () => ({
  type: actionTypes.START_FETCH_BLOG_LIST
})

const fetchBlogListSuccess = (data) => ({
  type: actionTypes.FETCH_BLOG_LIST_SUCCESS,
  payload: {
    list: data
  }
})

const fetchBlogListFailed = () => ({
  type: actionTypes.FETCH_BLOG_LIST_FAILED
})

export const fetchBlogList = () => dispatch => {
  dispatch(startFetchBlogList())
  getPosts()
    .then(resp => {
      dispatch(fetchBlogListSuccess(resp.data))
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchBlogListFailed())
    })
}

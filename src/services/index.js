import axios from 'axios'

const ajax = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = () => (
  ajax.get('/posts')
)

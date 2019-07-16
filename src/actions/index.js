import { types } from './types';
import axios from 'axios';

export const fetchPost = () => async (dispatch) => {
  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => {
      return dispatch({
        type: types.GET_POSTS,
        payload: res.data })}
    )
    .catch(err => console.log(err))
}

// export const fetchPost = () => {
//   return async dispatch => {
//     const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')

//     return dispatch({
//       type: types.GET_POSTS,
//       payload: posts.data 
//     })
//   }
// }
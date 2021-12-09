import axios from 'axios'
export const LOADING = 'LOADING';
export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'

export const animeList = () => (dispatch) => {
    dispatch({type: LOADING })
    axios.get('https://animechan.vercel.app/api/random')
    .then(res => {
        dispatch({type: SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: ERROR, payload: err.message}))
}


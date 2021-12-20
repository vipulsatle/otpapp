import {USER_REQUEST,USER_SUCCESS,USER_ERROR} from './Type'
import axios from 'axios'
const userRequest =() => {
    return {
        type: USER_REQUEST
    }
}
const userSuccess =(users) => {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}
const userError =(error) => {
    return {
        type: USER_ERROR,
        payload: error
    }
}

export const fetchUser = () => {
    return function(dispatch) {
        dispatch(userRequest())
        axios.get('http://tomatoman.pythonanywhere.com/items/items/')
        .then((responce)=> {
            //console.log(responce.data)
            const users = responce.data.map((user)=>user)
            dispatch(userSuccess(users))
        })
        .catch((error)=>{
            dispatch(userError(error))
        })
    }
}
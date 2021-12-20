import { USER_ERROR, USER_REQUEST, USER_SUCCESS } from "./Type"

const initialState = {
    loading: false,
    users: [],
    error: ''
}
export const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case USER_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload
        }
        case USER_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state;
    }

}
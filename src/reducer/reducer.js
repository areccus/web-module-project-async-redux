import {LOADING, ERROR, SUCCESS} from '../action/action'
const initialState = {
    data: {},
    loading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return{
                ...state,
                loading: true,
            }
        case SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}
import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

const initialState = { 
    user: {
        username: '',
        password: '',
        role: ''
    },
    clients: [
        {
            username: ''
        }
    ],
    isFetching: false,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                user: {}, 
                isFetching: true,
                error: '',
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                user: {},
                isFetching: false,
                error: '',
            })
        case(FETCH_FAIL):
            return({
                ...state,
                user: {},
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}

export default reducer;
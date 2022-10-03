import * as types from '../constants'
const DEFAULT_STATE = {
    listItem: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    activePage: 1,
    totalPage: 1,
    nameSearch: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_STUDENT_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_STUDENT_SUCCESS:
        case types.SEARCH_STUDENT_SUCCESS:
            return {
                ...state,
                listItem: action.payload.res,
                isFetching: false,
                dataFetched: true,


            }

        case types.ADD_STUDENT_REQUEST:
        case types.DELETE_STUDENT_REQUEST:
        case types.UPDATE_STUDENT_REQUEST:
        case types.LOGIN_REQUEST:
        case types.SIGNUP_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        

        case types.ADD_STUDENT_FAILURE:
        case types.DELETE_STUDENT_FAILURE:
        case types.UPDATE_STUDENT_FAILURE:
        case types.GET_STUDENT_FAILURE:
        case types.SEARCH_STUDENT_FAILURE:
        case types.LOGIN_FAILURE:
        case types.SIGNUP_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.message


            }


        default:
            return state
    }
}
import * as types from '../constants'
export function getItemRequest(payload){
    return{
        type:types.GET_STUDENT_REQUEST,
        payload
    }
}
export function getItemSuccess(payload){
    return{
        type:types.GET_STUDENT_SUCCESS,
        payload
    }
}
export function getItemFailure(payload){
    return{
        type:types.GET_STUDENT_FAILURE,
        payload
    }
}
//HAM ADD 
export function addItemRequest(payload){
    return{
        type:types.ADD_STUDENT_REQUEST,
        payload
    }
}
export function addItemSuccess(payload){
    return{
        type:types.ADD_STUDENT_SUCCESS,
        payload
    }
}
export function addItemFailure(payload){
    return{
        type:types.ADD_STUDENT_FAILURE,
        payload
    }
}
//ham delete 
export function deleteItemRequest(payload){
    return{
        type:types.DELETE_STUDENT_REQUEST,
        payload
    }
}
export function deleteItemSuccess(payload){
    return{
        type:types.DELETE_STUDENT_SUCCESS,
        payload
    }
}
export function deleteItemFailure(payload){
    return{
        type:types.DELETE_STUDENT_FAILURE,
        payload
    }
}
// ham update
export function updateItemRequest(payload){
    return{
        type:types.UPDATE_STUDENT_REQUEST,
        payload
    }
}
export function updateItemSuccess(payload){
    return{
        type:types.UPDATE_STUDENT_SUCCESS,
        payload
    }
}
export function updateItemFailure(payload){
    return{
        type:types.UPDATE_STUDENT_FAILURE,
        payload
    }
}
//ham search
export function searchItemRequest(payload){
    return{
        type:types.SEARCH_STUDENT_REQUEST,
        payload
    }
}
export function searchItemSuccess(payload){
    return{
        type:types.SEARCH_STUDENT_SUCCESS,
        payload
    }
}
export function searchItemFailure(payload){
    return{
        type:types.SEARCH_STUDENT_FAILURE,
        payload
    }
}

export function loginRequest(payload){
    return{
        type:types.LOGIN_REQUEST,
        payload
    }
}
export function loginSuccess(payload){
    return{
        type:types.LOGIN_SUCCESS,
        payload
    }
}
export function loginFailure(payload){
    return{
        type:types.LOGIN_FAILURE,
        payload
    }
}

export function signUpRequest(payload){
    return{
        type:types.SIGNUP_REQUEST,
        payload
    }
}
export function signUpSuccess(payload){
    return{
        type:types.SIGNUP_SUCCESS,
        payload
    }
}
export function signUpFailure(payload){
    return{
        type:types.SIGNUP_FAILURE,
        payload
    }
}
 
 


import * as actions from '../Action/index'
import * as types from '../constants'
import callApi from '../FetchApi/callAPI'
import { put,takeEvery } from 'redux-saga/effects'
function* getItem(){
    try {
        const res=yield callApi('GET','')
        yield put(actions.getItemSuccess({res:res.listStudent}))
        
    } catch (error) {
        yield put(actions.getItemFailure(error))
    }
}
function* addItem(data){
    try {
        const res=yield callApi('POST','',data.payload)
        if(res.message==='Sai quyen'){
            alert('khong co quyen')
        }
        yield put(actions.addItemSuccess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.addItemFailure(error))
    }
}
function* updateItem(data){
    try {
        const res=yield callApi('PUT',`${data.payload.id}`,{name:data.payload.nameUpdate})
        if(res.message==='Sai quyen'){
            alert('khong co quyen')
        }
        yield put(actions.updateItemSuccess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.updateItemFailure(error))
    }
}
function* deleteItem(data){
    try {
        const res=yield callApi('DELETE',`${data.payload.id}`)
        if(res.message==='Sai quyen'){
            alert('khong co quyen')
        }
        yield put(actions.deleteItemSuccess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.deleteItemFailure(error))
    }
}
function* searchItem(data){
    try {
        const res=yield callApi('GET',`search/?textSearch=${data.payload.nameSearch}`)
        yield put(actions.searchItemSuccess({res:res.listStudent}))
    } catch (error) {
        yield put(actions.searchItemFailure(error))
    }
}

function* signUp(data){
    try {
        const res=yield callApi('POST','sign',data.payload)
        if (res.message === 'tai khoan da ton tai') {
            alert(res.message)
            yield put(actions.signUpFailure(res.message))
        }
        else {
            yield put(actions.signUpSuccess())
            yield alert('dang ki thanh cong')
            window.location="http://localhost:3000/"
        }
    } catch (error) {
        yield put(actions.loginFailure(error))
    }
}
function* login(data){
    try {
        const res=yield callApi('POST','login',data.payload)
      
        if(res.message==='failure'){
            yield put(actions.loginFailure(res.message))
            alert('dang nhap khong thanh cong')
        }
       else{
        yield put(actions.loginSuccess())
       const token =  yield localStorage.setItem('token', res.token)
      
         yield localStorage.setItem('role', res.role)
         window.location.reload()
       }
    } catch (error) {
        yield put(actions.loginFailure(error))
    }
}
export const ItemSaga=[takeEvery(types.GET_STUDENT_REQUEST,getItem),
    takeEvery(types.ADD_STUDENT_REQUEST,addItem),
    takeEvery(types.DELETE_STUDENT_REQUEST,deleteItem),
    takeEvery(types.UPDATE_STUDENT_REQUEST,updateItem),
    takeEvery(types.SEARCH_STUDENT_REQUEST,searchItem),
    takeEvery(types.LOGIN_REQUEST,login),
    takeEvery(types.SIGNUP_REQUEST,signUp),
                        
]
import * as actions from'../Action/index'
import { connect } from 'react-redux'
import ItemLogin from '../Component/ComponentLogin/index'
import React from 'react'
class LoginContainer extends React.Component{
    
    render(){
        return(
        <ItemLogin {...this.props}/>
    )}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        login:(data)=>{
            dispatch(actions.loginRequest(data))
        }
    }
}
export default connect(null,mapDispatchToProps)(LoginContainer)
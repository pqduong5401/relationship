import * as actions from'../Action/index'
import { connect } from 'react-redux'
import ItemSignUp from '../Component/ComponentSignUp/index'
import React from 'react'
class SignUpContainer extends React.Component{
    
    render(){
        return(
        <ItemSignUp {...this.props}/>
    )}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signUp:(data)=>{
            dispatch(actions.signUpRequest(data))
        }
    }
}
export default connect(null,mapDispatchToProps)(SignUpContainer)
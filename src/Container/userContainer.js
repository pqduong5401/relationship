import * as actions from'../Action/index'
import { connect } from 'react-redux'
import ItemUser from '../Component/ComponentUser'
import React from 'react'
class UserPageContainer extends React.Component{
    componentDidMount(){
        this.props.getItem()
    }
    render(){
        return(
        <ItemUser {...this.props}/>
    )}
}
const mapStateToProps=(state)=>{
    return{
        item:state.items.listItem,
        nameSearch:state.items.nameSearch


    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getItem:()=>{
            dispatch(actions.getItemRequest())
        },
        searchItem:(data)=>{
            dispatch(actions.searchItemRequest(data))
        },
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserPageContainer)
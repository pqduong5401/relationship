import React,{Component} from "react";
export default class Items extends Component{
    state={
        name:'',
        id:'',
        nameUpdate:'',
        nameSearch:''

    }
    handleSignout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        window.location='/'
    }
    handleInput(e){
        this.setState({name:e.target.value})
    }
    handleInputUpdate(e){
        this.setState({nameUpdate:e.target.value})
    }
    handleAdd(){
        this.props.addItem({name:this.state.name})
    }
    handleUpdate(){
        this.props.updateItem({nameUpdate:this.state.nameUpdate,id:this.state.id})
    }
    render(){
        let listData=[]
        if(this.props.item){
            listData=this.props.item.map((item,key)=>{
                return(
                    <tr key={key}>
                        <th>{key+1}</th>
                        <th>{item.name}</th>
                        <th><button onClick={()=>this.props.deleteItem({id:item._id})}>Delete</button></th>
                        <th><button onClick={()=>this.setState({id:item._id,nameUpdate:item.name})}>push</button></th>

                    </tr>
                )
            })
        }
        return(
            <div>

                <div>
                    <input onChange={(e)=>this.handleInput(e)} value={this.state.name}/>
                    <button onClick={()=>this.handleAdd()}>Add</button>
                    <input onChange={(e)=>this.handleInputUpdate(e)} value={this.state.nameUpdate}/>
                    <button onClick={()=>this.handleUpdate()}>Update</button>
                    <input onChange={(e)=>this.setState({nameSearch:e.target.value})}/>
                    <button onClick={()=>this.props.searchItem({nameSearch:this.state.nameSearch})}>Search</button>

                    <table>
                        <tbody>
                            <tr>
                                <th>So Thu Tu</th>
                                <th>Ten</th>
                            </tr>
                            {listData}

                        </tbody>
                    </table>
                    <button onClick={()=>this.handleSignout()}>dang xuat</button>

                </div>
            </div>
        )
    }
}
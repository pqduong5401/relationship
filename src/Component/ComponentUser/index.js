import React,{Component} from "react";
export default class ItemUser extends Component{
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
    
    render(){
        let listData=[]
        if(this.props.item){
            listData=this.props.item.map((item,key)=>{
                return(
                    <tr key={key}>
                        <th>{key+1}</th>
                        <th>{item.name}</th>

                    </tr>
                )
            })
        }
        return(
            <div>

                <div>
                    
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
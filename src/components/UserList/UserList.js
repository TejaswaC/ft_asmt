import React, { Component } from 'react';
import Users from '../../assets/user';
import User from '../User/User';

class UserList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users : Users.members
        }

      //  console.log(Users)

    }
    
    
    componentDidMount(){

        //this.setState({users : Users.members});
        console.log(this.state.users)



    }

render(){


    return(<div>
        {this.state.users.map(user => {return <User profile={user}/>})}
        </div>)
}


}


export default UserList;
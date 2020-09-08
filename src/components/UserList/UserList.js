import React, { Component } from 'react';
import Users from '../../assets/user';

class UserList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users : []
        }

      //  console.log(Users)

    }
    
    
    componentDidMount(){

        this.setState({users : Users.members});
        console.log(Users.members)



    }

render(){


    return(<div>UserList</div>)
}


}


export default UserList;
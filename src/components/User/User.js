import React, { Component } from 'react'

class User extends Component{

    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
            activities : this.props.profile.activity_periods,
            selectedDate : ''
        }
        this.activityDate = this.activityDate.bind(this);      
        this.checkToday = this.checkToday.bind(this);

        //console.log(this.state.date);
    }

     activityDate(evt){
        let eventDate = evt.target.valueAsDate;
        //console.log(this.state.activities)
        //console.log(eventDate)
         this.setState(state =>  {console.log("In set state"); return {date : eventDate}});
        //console.log(this.state.date);

    }

    checkToday(){
        console.log(this.state.activities)
    }

    componentDidUpdate(){
        console.log(this.state.date);
        console.log(this.state.activities);
    }



    render(){
        return (<div>
                <h1>{this.props.profile.real_name}</h1>
        <h2>{this.props.profile.tz}</h2>
        <input type="date" name="date" onChange={this.activityDate} /> 
        <button onClick={this.checkToday}>Check Today's activity</button>

        </div>)
    }
}




export default User;
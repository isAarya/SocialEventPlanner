import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const SocialEvent = props => (
    
    <div class="card-deck" style={{ width: '32%', height:'20%' }}>
        <div class="card text-white bg-dark mb-2" >

            <div class="card-body" style={{ height: '10%' }}>
                  <h2 class="card-title" className={props.socialevent.event_completed ? 'completed': ''}>{props.socialevent.event_title}</h2>
                  <br/>
                  <p className={props.socialevent.event_completed ? 'completed': ''}>Organizer: {props.socialevent.event_organizer}</p>
                  <p className={props.socialevent.event_completed ? 'completed': ''}>Date: {props.socialevent.event_date}</p>
                  <p className={props.socialevent.event_completed ? 'completed': ''}>Venue: {props.socialevent.event_venue}</p>
                  <p className={props.socialevent.event_completed ? 'completed': ''}><span class="badge badge-secondary">{props.socialevent.event_tag}</span></p>
            </div>  
            <div class="card-footer">
                  <span><Link to={"/edit/"+props.socialevent._id}>Update/View</Link></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <span><Link to={"/delete/"+props.socialevent._id}>Delete</Link></span>
            </div>                  
        </div>
    </div>

)

export default class SocialEventList extends Component {
    
    constructor(props){
        super(props);
        this.state = {socialevents:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/socialevents')
             .then( response => {
                 this.setState({ socialevents: response.data});
             })
             .catch(function (error){
                 console.log(error);
             })
    }

    socialeventList(){
        return this.state.socialevents.map(function(currentSocialEvent, i){
            return <SocialEvent socialevent={currentSocialEvent}  key={i} />      })
    }    
    
    render () {
        return (
            <div>
                <p>Welcome to DFG Social Event Planner !!</p>

                <div class="row">{this.socialeventList()}</div>

            </div>
        )
    }
}
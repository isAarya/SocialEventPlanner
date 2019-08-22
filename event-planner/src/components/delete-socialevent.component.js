import React, {Component} from 'react';
import axios from 'axios';

export default class DeleteSocialEvent extends Component{

    constructor(props){

        super(props);

        this.onDelete = this.onDelete.bind(this);

        this.state = {
            event_title: '',
            event_description: '',
            event_cost: '',
            event_venue: '',
            event_date: '',
            event_tag: '',
            event_organizer: '',
            event_attendees: '',
            event_completed: false
        }

    }

    componentDidMount() {
        axios.get('http://localhost:4000/socialevents/' + this.props.match.params.id)
             .then(response => {
                 this.setState({
                    event_title: response.data.event_title,
                    event_description: response.data.event_description,
                    event_cost: response.data.event_cost,
                    event_venue: response.data.event_venue,
                    event_date: response.data.event_date,
                    event_tag: response.data.event_tag,
                    event_organizer: response.data.event_organizer,
                    event_attendees: response.data.event_attendees,
                    event_completed: response.data.event_completed
                 })
             })
             .catch(function(error){
                 console.log(error);
             })
    }
    
    onDelete(e)
    {
        e.preventDefault();

        const obj = {
            event_title: this.state.event_title,
            event_description: this.state.event_description,
            event_cost: this.state.event_cost,
            event_venue: this.state.event_venue,
            event_date: this.state.event_date,
            event_tag: this.state.event_tag,
            event_organizer: this.state.event_organizer,
            event_attendees: this.state.event_attendees,
            event_completed: this.state.event_completed
        };

        console.log(obj);

        axios.get('http://localhost:4000/socialevents/delete/' + this.props.match.params.id, obj)
             .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <p> Are you sure to Delete Social Event !!</p>

                <h6>Event Title</h6>
                <h1>{this.state.event_title}</h1>

                <button type="button" class="btn btn-outline-danger btn-lg btn-block" onClick={this.onDelete}>Delete Event</button>

                
               
            </div>
        )
    }

}
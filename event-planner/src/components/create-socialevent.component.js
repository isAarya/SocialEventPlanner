import React, {Component} from 'react';
import axios from 'axios';

export default class CreateSocialEvent extends Component {

    constructor(props){
        super(props);

        this.onChangeEventTitle = this.onChangeEventTitle.bind(this);
        this.onChangeEventDescription = this.onChangeEventDescription.bind(this);
        this.onChangeEventCost = this.onChangeEventCost.bind(this);
        this.onChangeEventVenue = this.onChangeEventVenue.bind(this);
        this.onChangeEventTag = this.onChangeEventTag.bind(this);
        this.onChangeEventOrganizer = this.onChangeEventOrganizer.bind(this);
        this.onChangeEventAttendees = this.onChangeEventAttendees.bind(this);
        this.onChangeEventDate = this.onChangeEventDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            event_title: '',
            event_description: '',
            event_date: '',
            event_cost: '',
            event_venue: '',
            event_tag: '',
            event_organizer: '',
            event_attendees: '',
            event_completed: false
        }
        
    }

    onChangeEventTitle(e) {
        this.setState({
            event_title: e.target.value
        });
    }
    
    onChangeEventDescription(e) {
        this.setState({
            event_description: e.target.value
        });
    }

    onChangeEventDate(e){
        this.setState({
            event_date: e.target.value
        });
    }

    onChangeEventCost(e) {
        this.setState({
            event_cost: e.target.value
        });
    }

    onChangeEventVenue(e){
        this.setState({
            event_venue:e.target.value
        });
    }

    onChangeEventTag(e){
        this.setState({
            event_tag: e.target.value
        });
    }

    onChangeEventOrganizer(e){
        this.setState({
            event_organizer: e.target.value
        });
    }

    onChangeEventAttendees(e){
        this.setState({
            event_attendees: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const newSocialEvent = {

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

        axios.post('http://localhost:4000/socialevents/add', newSocialEvent)
             .then( res => console.log(res.data));

        this.setState({
            event_title:'',
            event_description:'',
            event_cost:'',
            event_venue:'',
            event_date:'',
            event_tag:'',
            event_organizer:'',
            event_attendees:'',
            event_completed: false

        })
    }

    
    render() {
        return(
            
            <div style={{marginTop: 15}}>

                <h4> Create New Social Event</h4>

                <br/>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_title}
                               onChange={this.onChangeEventTitle} />
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <textarea type="text"
                               className="form-control"
                               rows="3"
                               placeholder="...Max 100 words"
                               value={this.state.event_description}
                               onChange={this.onChangeEventDescription} />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                        <label>Date:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_date}
                               onChange={this.onChangeEventDate} />
                        </div>

                        <div className="form-group col-md-4">
                        <label>Cost:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_cost}
                               onChange={this.onChangeEventCost} />
                        </div>

                        <div className="form-group col-md-4">
                        <label>Organizer:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_organizer}
                               onChange={this.onChangeEventOrganizer} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Venue:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_venue}
                               onChange={this.onChangeEventVenue} />
                    </div>

                    <div className="form-group">
                        <label>Attendees:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_attendees}
                               onChange={this.onChangeEventAttendees} />
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="tagOptions"
                                   id="Comedy"
                                   value="Comedy"
                                   checked={this.state.event_tag === 'Comedy'}
                                   onChange={this.onChangeEventTag}/>
                            <label className="form-check-label">Comedy</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="tagOptions"
                                   id="Drama"
                                   value="Drama"
                                   checked={this.state.event_tag === 'Drama'}
                                   onChange={this.onChangeEventTag}/>
                            <label className="form-check-label">Drama</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="tagOptions"
                                   id="Adventure"
                                   value="Adventure"
                                   checked={this.state.event_tag === 'Adventure'}
                                   onChange={this.onChangeEventTag}/>
                            <label className="form-check-label">Adventure</label>
                        </div>
                    </div>

                    
                    <div className="form-group">
                        <input type="submit" value="Create Event" className="btn btn-primary" />
                    </div>


                </form>

            </div>
        )
    }
}
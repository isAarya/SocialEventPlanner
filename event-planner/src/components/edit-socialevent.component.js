import React, {Component} from 'react';
import axios from 'axios';

export default class EditSocialEvent extends Component{

    constructor(props){

        super(props);

        this.onChangeSocialEventTitle = this.onChangeSocialEventTitle.bind(this);
        this.onChangeSocialEventDescription = this.onChangeSocialEventDescription.bind(this);
        this.onChangeSocialEventCost = this.onChangeSocialEventCost.bind(this);
        this.onChangeSocialEventVenue = this.onChangeSocialEventVenue.bind(this);
        this.onChangeSocialEventDate = this.onChangeSocialEventDate.bind(this);
        this.onChangeSocialEventTag = this.onChangeSocialEventTag.bind(this);
        this.onChangeSocialEventOrganizer = this.onChangeSocialEventOrganizer.bind(this);
        this.onChangeSocialEventAttendees = this.onChangeSocialEventAttendees.bind(this);
        this.onChangeSocialEventCompleted = this.onChangeSocialEventCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

    onChangeSocialEventTitle(e){
        this.setState({
            event_title: e.target.value
        });
    }

    onChangeSocialEventDescription(e){
        this.setState({
            event_description: e.target.value
        });
    }

    onChangeSocialEventCost(e){
        this.setState({
            event_cost: e.target.value
        });
    }

    onChangeSocialEventDate(e){
        this.setState({
            event_date: e.target.value
        });
    }

    onChangeSocialEventVenue(e){
        this.setState({
            event_venue: e.target.value
        });
    }

    onChangeSocialEventTag(e){
        this.setState({
            event_tag: e.target.value
        });
    }

    onChangeSocialEventOrganizer(e){
        this.setState({
            event_organizer: e.target.event_venue
        });
    }

    onChangeSocialEventAttendees(e){
        this.setState({
            event_attendees: e.target.value
        });
    }

    onChangeSocialEventCompleted(e){
        this.setState({
            event_completed: e.target.value
        });
    }

    onSubmit(e){
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

        axios.post('http://localhost:4000/socialevents/update/' + this.props.match.params.id, obj)
             .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <p> Welcome to Edit Social Event !!</p>

                <h3 align="center">Update Social Event</h3>

                <form on onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_title}
                               onChange={this.onChangeSocialEventTitle}/>
                    </div>                   

                    <div className="form-group">
                        <label>Description:</label>
                        <textarea type="text"
                               className="form-control"
                               rows="3"
                               value={this.state.event_description}
                               onChange={this.onChangeSocialEventDescription}/>
                    </div>
                  

                    <div className="form-group">
                        <label>Cost:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_cost}
                               onChange={this.onChangeSocialEventCost}/>
                    </div>

                    <div className="form-group">
                        <label>Venue:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_venue}
                               onChange={this.onChangeSocialEventVenue}/>
                    </div>

                    <div className="form-group">
                        <label>Date:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_date}
                               onChange={this.onChangeSocialEventDate}/>
                    </div>

                    <div className="form-group">
                        <label>Organizer:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_organizer}
                               onChange={this.onChangeSocialEventOrganizer}/>
                    </div>

                    <div className="form-group">
                        <label>Attendees:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.event_attendees}
                               onChange={this.onChangeSocialEventAttendees}/>
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="tagOptions"
                                   id="OptionsComedy"
                                   value="Comedy"
                                   checked={this.state.event_tag === 'Comedy'}
                                   onChange={this.onChangeEventTag}/>
                            <label className="form-check-label">Comedy</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="tagOptions"
                                   id="OptionsDrama"
                                   value="Drama"
                                   checked={this.state.event_tag === 'Drama'}
                                   onChange={this.onChangeEventTag}/>
                            <label className="form-check-label">Drama</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="tagOptions"
                                   id="OptionsAdventure"
                                   value="Adventure"
                                   checked={this.state.event_tag === 'Adventure'}
                                   onChange={this.onChangeEventTag}/>
                            <label className="form-check-label">Adventure</label>
                        </div>
                    </div>

                    <br/>

                    <div className="form-group">
                        <input type="submit" value="Update Event" className="btn btn-primary" />
                    </div>

                </form>

            </div>
        )
    }
}
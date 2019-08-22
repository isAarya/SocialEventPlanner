const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SocialEvent = new Schema({
    event_description: {
        type: String
    },
    event_title:{
        type: String
    },
    event_cost:{
        type: String 
    },
    event_venue:{
        type: String 
    },
    event_date:{
        type: String
    },
    event_tag:{
        type: String
    },
    event_organizer:{
        type: String
    },
    event_attendees:{
        type: String
    },
    event_completed:{
        type: Boolean
    }
});

module.exports = mongoose.model('SocialEvent', SocialEvent);
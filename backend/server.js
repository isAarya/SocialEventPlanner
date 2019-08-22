const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const socialEventRoutes = express.Router();
const PORT = 4000;

let SocialEvent = require('./socialevent.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/socialevents',{
    useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

socialEventRoutes.route('/').get(function(req, res){
    SocialEvent.find(function(err, socialevents){
        if(err){
            console.log(err);
        } else{
            res.json(socialevents);
        }
    });
});

socialEventRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    SocialEvent.findById(id, function(err, socialevent){
        res.json(socialevent);
    });
});

socialEventRoutes.route('/update/:id').post(function(req, res){
    SocialEvent.findById(req.params.id, function(err, socialevent){
        if(!socialevent)
            res.status(404).send("data is not found");
        else
            socialevent.event_description = req.body.event_description;
            socialevent.event_title = req.body.event_title;
            socialevent.event_cost = req.body.event_cost;
            socialevent.event_venue = req.body.event_venue;
            socialevent.event_date = req.body.event_date;
            socialevent.event_tag = req.body.event_tag;
            socialevent.event_organizer = req.body.event_organizer;
            socialevent.event_attendees = req.body.event_attendees;
            socialevent.event_completed = req.body.event_completed;

        socialevent.save().then(socialevent => {
            res.json('SocialEvent updated!');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
    });
});

socialEventRoutes.route('/add').post(function(req, res){
    let socialevent = new SocialEvent(req.body);
    socialevent.save()
               .then(socialevent => {
                   res.status(200).json({'socialevent': 'social event added successfully'});
               })
               .catch( err => {
                   res.status(400).send('adding new social event failed');
               });
});

socialEventRoutes.route('/delete/:id').get(function(req, res){
    SocialEvent.findByIdAndRemove({_id:req.params.id}, function(err, socialevent){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });

});

app.use('/socialevents', socialEventRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
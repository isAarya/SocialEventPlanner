This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## DFG: Social Event PLanner

Web app for planning and organizing social events:

### `Start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Furthermore, you also need to run the mongo and express server using 'mongod' and npm start respectively.

If you have access to postman app. You can instinctively see the created, updated and deleted event in real time.

If you don't have the postman api. You can see the details of the created/updated/deleted database 'socialevents' in mongo shell.

### `Create an event`

An organizer, which in this case anyone from DFG can create an event of their choice.

The form is a way to deliver date, venue, cost and other information for prospective/current client to review.

Assumption: All members are owners of this event planning app.

WIP: Better use of event tags. 

### `Update and event`

Both organizer and prospective attendees can get more information about the app using View/Update button.

The organizer can use to update any event details as part of the input form.

A prospective/current attendee too can add their details to the same form.

WIP: restrictions on form edition based on organizer and attendee. Also adding contact details in addition to just name.

### `Delete an event`

**Note: this is a one-way operation. Once you `delete`, you can’t go back! The database also reflects the object delete**

If you aren’t satisfied with the event or any of its properties you can delete this event.

**Note: only an event organizer is able to delete this event

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Advanced Configuration

This also contains a dockerfile to containerize the app. Not uploaded in this repository as still WIP. In addition 'popular event' prediction using machine learning has not been integrated with the app yet.


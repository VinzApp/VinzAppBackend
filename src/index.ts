import express from 'express';
import MealsDatabase from './db/meals';
import TimetableDatabase from './db/timetable';
import EventsDatabase from './db/events';
import swaggerUi from 'swagger-ui-express';
import openAPIDocumentation from '../docs/doc';
import RegistrationDatabase from './db/registration';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openAPIDocumentation));

app.enable('trust proxy');
const {GA_TRACKING_ID} = process.env;
const trackEvent = (category: any, action: any, label: any, value: any) => {
  const data = {
    // API Version.
    v: '1',
    // Tracking ID / Property ID.
    tid: GA_TRACKING_ID,
    // Anonymous Client Identifier. Ideally, this should be a UUID that
    // is associated with particular user, device, or browser instance.
    cid: '555',
    // Event hit type.
    t: 'event',
    // Event category.
    ec: category,
    // Event action.
    ea: action,
    // Event label.
    el: label,
    // Event value.
    ev: value,
  };

  return axios.get('http://www.google-analytics.com/debug/collect', { params: data });
};

app.get('/', async (req: express.Request, res: express.Response) => {
    try {
        await trackEvent(
            'Example category',
            'Example action',
            'Example label',
            '100'
        );
        res.status(200).send('Event tracked.').end();
  } catch (error) {
    // This sample treats an event tracking error as a fatal error. Depending
    // on your application's needs, failing to track an event may not be
    // considered an error.
    console.log('Error: ' + error);
  }
});

app.post('/nextMeal', (req: express.Request, res: express.Response) => {
    const db = new MealsDatabase();
    db.getTodaysMeals(req.body.date, (response: string) => {
        res.send(response);
    });
});


app.post('/todaysTimetable', (req: express.Request, res: express.Response) => {
    const db = new TimetableDatabase();
    db.getTodaysTimetable(req.body.day, (response: string) => {
        res.send(response);
    });
});

app.get('/getEvents', (req: express.Request, res: express.Response) => {
    const db = new EventsDatabase();
    db.getEvents((response: string) => {
        res.send(response);
    });
});

app.post('/createEvent', (req: express.Request, res: express.Response) => {
    const db = new EventsDatabase();
    db.createEvent(req.body.expiration, req.body.text);
    res.sendStatus(200);
});

app.get('/getRegistration', (req: express.Request, res: express.Response) => {
    const db = new RegistrationDatabase();
    db.getRegistrations((response: string) => {
        res.send(response);
    });
});

app.listen(port, () => {
    console.log('Listening on Port: ' + port); 
});

import http from 'http';

const adminPort = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is the Admin Side!\n');
});

server.listen(adminPort, () => {
    console.log(`Server running at http://:${adminPort}/`);
});

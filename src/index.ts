import express from 'express';
import MealsDatabase from './db/meals';
import TimetableDatabase from './db/timetable';
import EventsDatabase from './db/events';
import swaggerUi from 'swagger-ui-express';
import openAPIDocumentation from '../docs/doc';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openAPIDocumentation));


app.get('/', (req: express.Request, res: express.Response) => {
    res.sendStatus(200);
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

app.listen(port, () => {
    console.log('Listening on Port: ' + port); 
});

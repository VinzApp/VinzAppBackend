import express from 'express';
import MealsDatabase from './db/meals';
import TimetableDatabase from './db/timetable';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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

app.listen(port, () => {
    console.log('Listening on Port: ' + port); 
});

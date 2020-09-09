import express from 'express';
import Database from './db/database';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendStatus(200);
});

app.post('/nextMeal', (req: express.Request, res: express.Response) => {
    const db = new Database();
    db.getTodaysMeals(req.body.date, (response: string) => {
        res.send(response);
    });
});

app.listen(port, () => {
    console.log('Listening on Port: ' + port); 
});

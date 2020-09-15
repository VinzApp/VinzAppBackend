import express from 'express';
import MealsDatabase from './db/meals';
import TimetableDatabase from './db/timetable';
import EventsDatabase from './db/events';
import swaggerSpec from '../swagger';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


/**
 * @swagger
 * definition:
 *  meal:
 *      properties:
 *          date: 
 *              type: string
 *              description: String that represents the date in day.month.year format
 *          time:
 *              type: string
 *              description: 1 = lunch, 2 = dinner
 *          meal:
 *              type: string
 *              description: Description of the meal (Vegetarian and dessert) 
 */


/**
 * @swagger
 * /:
 *  get:
 *      description: Test route returns 200 if the api is up
 *      response:
 *          200:
 *              description: The API is up and running
 *          404: 
 *              description: The API is currently down
 *          
 */
app.get('/', (req: express.Request, res: express.Response) => {
    res.sendStatus(200);
});


/**
 * @swagger
 * /nextMeal:
 *  post:
 *      description: Returns meals of the day
 *      produces: 
 *          - application/json
 *      parameters:
 *          - name: date
 *            description: Date of which the meals will be returned
 *            in: body
 *            required: true
 *            type: string
 *            examples:
 *              one:
 *                  date: 01.09.2020
 *              two: 
 *                  date: 20.09.2020
 *                  
 * 
 *      responses:
 *          200:
 *              description: An array with all the meals of the day
 *              schema:
 *                  $ref: '#definitions/meal'
 *          
 */
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

});

app.listen(port, () => {
    console.log('Listening on Port: ' + port); 
});

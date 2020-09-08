import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log('Listening on Port: ' + port); 
});

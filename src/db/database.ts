import sqlite3 from 'sqlite3';

type CallbackFunc = (s: string) => void;

export default class Database {
    db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('src/db/meals.sqlite');
    }

    getTodaysMeals(date: string, callback: CallbackFunc): void {
        this.db.all(`SELECT * FROM Meals WHERE date="${date}"`, (err: string, res: string) => {
            if(err) {
                console.log('Error: ' + err);
            }
            callback(res);
        });
    }
}
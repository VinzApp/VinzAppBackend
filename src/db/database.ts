import sqlite3 from 'sqlite3';
import path from 'path';
import { callbackify } from 'util';

export default class Database {
    db: sqlite3.Database;

    constructor() {
        console.log('Created Database object');
        this.db = new sqlite3.Database('src/db/meals.sqlite');
    }

    getTodaysMeals(callback: any) {
        this.db.all('SELECT * FROM Meals', (err: any, res: any) => {
            if(err) {
                console.log('Error: ' + err);
            }
            console.log('Selected all Database entries');
            callback(res);
        });
    }
}
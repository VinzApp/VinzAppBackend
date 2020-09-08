import sqlite3 from 'sqlite3';

export default class Database {
    db: sqlite3.Database;

    constructor() {
        console.log('Created Database object');
        this.db = new sqlite3.Database('src/db/meals.sqlite');
    }

    getTodaysMeals(date: string, callback: any) {
        this.db.all(`SELECT * FROM Meals WHERE date="${date}"`, (err: any, res: any) => {
            if(err) {
                console.log('Error: ' + err);
            }
            console.log('Selected all Database entries');
            callback(res);
        });
    }
}
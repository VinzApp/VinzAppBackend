import sqlite3 from 'sqlite3';

type CallbackFunc = (s: string) => void;

export default class EventsDatabase {
    db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('src/db/events.sqlite');
    }

    getEvents(callback: CallbackFunc): void {
        this.db.all(`SELECT * FROM Events`, (err: string, res: string) => {
            if(err) {
                console.log('Error: ' + err);
            }
            callback(res);
        });
    }

}
import sqlite3 from 'sqlite3';

type CallbackFunc = (s: string) => void;

export default class TimetableDatabase {
    db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('src/db/timetable.sqlite');
    }

    getTodaysTimetable(day: string, callback: CallbackFunc): void {
        this.db.all(`SELECT * FROM timetable WHERE day="${day}"`, (err: string, res: string) => {
            if(err) {
                console.log('Error: ' + err);
            }
            callback(res);
        });
    }
}
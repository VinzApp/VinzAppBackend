import sqlite3 from 'sqlite3';

type CallbackFunc = (s: string) => void;

export default class RegistrationDatabase {
    db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('src/db/registration.sqlite');
    }

    getRegistrations(callback: CallbackFunc): void {
        const now = new Date();
        now.setDate(now.getDate() + (7 + (7 - now.getDay())) % 7);
        const nextSunday: string = this.pad(now.getDate(), 2) + '.' + this.pad(now.getMonth()+1, 2) + '.' + now.getFullYear();
        this.db.all(`SELECT * FROM Registration WHERE date="${nextSunday}"`, (err: string, res: string) => {
            if(err) {
                console.log('Error: ' + err);
            }
            callback(res);
        });
    }

    pad(n: number, width: number): string{
        const z = '0';
        const nString = n.toString();
        return nString.length >= width ? nString : new Array(width - nString.length + 1).join(z) + nString;
    }
}
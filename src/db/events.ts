import sqlite3 from 'sqlite3';

type promiseFun = (n: void) => void;
type CallbackFunc = (s: string) => void;

export default class EventsDatabase {
    db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('src/db/events.sqlite');
    }

    getEvents(callback: CallbackFunc): void {
        // Remove all the expired events, then fetch and return all remaining
        this.removeExpiredEvents()
            .then(() => {
                this.db.all(`SELECT * FROM Events`, (err: string, res: string) => {
                    if(err) {
                        console.log('Error: ' + err);
                    }
                    callback(res);
                });
            })
            .catch(() => {
                console.log('An error occured, look above output for more info');
            });
            
    }

    createEvent(expirationDate: string, text: string): void {
        // Create unix time out of passed date
        const dateParts: string[] = expirationDate.split('.');
        const date = new Date(parseInt(dateParts[2]), parseInt(dateParts[1])-1, parseInt(dateParts[0])+1);
        // Insert data in database
        this.db.run(`INSERT INTO Events VALUES ('${expirationDate}', ${date.getTime() / 1000}, '${text}');`, (err: string) => {
            if(err){
                console.log('Error: ' + err);
            }
        });
    }

    async removeExpiredEvents(): Promise<void> {
        return new Promise<void>((resolve: promiseFun, reject: promiseFun) => {
            const date: Date = new Date();
            // Convert unixtime from milliseconds to seconds
            const unixTime = Math.floor(date.getTime() / 1000);
            // Delete all expired dates 
            this.db.run(`DELETE FROM Events WHERE expiration_unix<${unixTime}`, (err: string) => {
                if(err) {
                    console.log('Error: ' + err);
                    reject();
                }
                resolve();
            });
        });
    }
}
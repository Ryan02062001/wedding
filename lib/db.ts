import sqlite3 from 'sqlite3';
sqlite3.verbose();

const DBSOURCE = 'rsvp.db';

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(
      `CREATE TABLE IF NOT EXISTS rsvp (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         fullName TEXT NOT NULL,
         attendance TEXT NOT NULL,
         additionalGuests TEXT
       )`,
      (err) => {
        if (err) {
          console.error('Error creating table:', err.message);
        } else {
          console.log('RSVP table is ready.');
        }
      }
    );
  }
});

export default db;

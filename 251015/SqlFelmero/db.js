import Database from "better-sqlite3";

const db = new Database('./users.sqlite');

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    );
`);

const usersObject = {
    id: Number,
    firstName: String,
    lastName: String,
    email: String
}

function getAllUsersData() {
    const adatbazisParancs = db.prepare(`SELECT * FROM users`);
    return  adatbazisParancs.all();
}

function getUserById(id) {
  const adatbazisParancs = db.prepare(`SELECT * FROM users WHERE id = ?`);
  return adatbazisParancs.get(id);
}

function saveUser(user) {
    const adatbazisParancs = db.prepare(`INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)`);
    return adatbazisParancs.run(user.firstName, user.lastName, user.email);
}

function modifyAllUsers(newUsers) {
    const deleteAll = db.prepare(`DELETE FROM users`);
    deleteAll.run();

    const insert = db.prepare(`INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)`);
    const insertMany = db.transaction((users) => {
        for (const user of users) {
            insert.run(user.firstName, user.lastName, user.email);
        }
    });

    insertMany(newUsers);
}

function deleteUserById(id) {
    const adatbazisParancs = db.prepare(`DELETE FROM users WHERE id = ?`);
    return adatbazisParancs.run(id);
}



export { saveUser, deleteUserById, modifyAllUsers, getUserById, getAllUsersData };

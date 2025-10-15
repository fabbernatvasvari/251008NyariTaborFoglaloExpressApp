import { saveUser, getAllUsersData } from './db.js';

saveUser({ firstname: 'Alice', lastname: 'Doe', email: 'alice@example.com' });
saveUser({ firstname: 'Bob', lastname: 'Smith', email: 'bob@example.com' });

console.log('All users:', getAllUsersData());

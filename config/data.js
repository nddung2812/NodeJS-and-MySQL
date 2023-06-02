import mysql from 'mysql';

const connection = mysql.createPool({
    host: 'bgw104db09.int.bgwgroup.com.au',
    user: 'webdev',
    password: 'BGWw3bDev',
    database: 'nodejs'
})

export default connection;

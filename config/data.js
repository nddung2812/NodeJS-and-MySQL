import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'bgw104db09.int.bgwgroup.com.au',
    user: 'webdev',
    password: 'BGWw3bDev',
    database: 'nodejs'
})

export { connection };


const connectDB = async () => {
    connection.connect((error) => {
        if (error) {
            console.log("Error connecting to the database:", error);
            return;
        }

        console.log('connected to the database');

        connection.end((error) => {
            if (error) {
                console.log('Error closing the database connection:', error);
                return;
            }
            console.log('Database connection closed!')
        })
    })
} 

export default connectDB;
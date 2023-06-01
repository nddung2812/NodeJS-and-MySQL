import express from 'express'
import connection from '../config/data.js';
import bodyParser from 'body-parser';
const router = express.Router();

const getAllCustomerAccount = (req, res) => {
    connection.query('SELECT * FROM total_customer_points', (error, results) => {
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'An error occurred while fetching customer accounts' });
            return;
        }
        console.log('Query results:', results);
        res.json(results);
    });
};

router.get('/', getAllCustomerAccount);

export default router;
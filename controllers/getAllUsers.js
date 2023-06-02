import connection from "../config/data.js";

const getAllUsers = async (req, res) => {
    connection.getConnection((err, results) => {
      if (err) {
        throw err;
      }
      // Perform further operations with the connection if needed
      // ...
       results.query('SELECT * FROM total_customer_points', (error, results) => {
                if (error) {
                    console.error('Error executing the query:', error);
                    res.status(500).json({ error: 'An error occurred while fetching customer accounts' });
                    return;
                }
                res.json(results);
            });
      // Release the connection when finished
      results.release();
    });
}

export { getAllUsers }

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'retail_omnichannel',
    password: 'password',
    port: 5432,
});

app.get('/api/health', (req, res) => res.status(200).json({ status: 'OK' }));

app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error("Database error:", err); // This prints the error to your terminal
        res.status(500).json({ error: err.message || "Database connection failed" });
    }
});

// Export app for testing, or listen if running directly
if (require.main === module) {
    app.listen(5000, () => console.log('Backend API running on port 5000'));
}
module.exports = app;

app.put('/api/products/:id', async (req, res) => {
    const { price } = req.body;
    const { id } = req.params;
    try {
        await pool.query('UPDATE products SET price = $1 WHERE id = $2', [price, id]);
        res.json({ message: 'Price updated successfully' });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
    }
});
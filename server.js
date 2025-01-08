// server.js

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'root', 
    database: 'MajorV2' 
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL Database!");
});

// Registration Endpoint
app.post('/register', (req, res) => {
    const { email, username, password } = req.body;

    db.query(
        'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
        [email, username, password],
        (err, result) => {
            if (err) return res.status(500).send("Registration failed: " + err.message);
          
            res.status(201).json({
                id: result.insertId,
                email: email,
                username: username,
                scores: 0 
            });
        }
    );
});

// Login Endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (err, results) => {
            if (err) return res.status(500).send("Login failed: " + err.message);
            if (results.length > 0) {
                const user = results[0];
                // Send user details upon successful login
                res.status(200).json({
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    scores: user.scores
                });
            } else {
                res.status(401).send("Invalid credentials.");
            }
        }
    );
});

// Update User Score Endpoint
app.post('/updateScore', (req, res) => {
    const { id, score } = req.body;

    db.query(
        'UPDATE users SET scores = ? WHERE id = ?',
        [score, id],
        (err, result) => {
            if (err) return res.status(500).send("Failed to update score: " + err.message);
            if (result.affectedRows > 0) {
                res.status(200).send("Score updated successfully!");
            } else {
                res.status(404).send("User not found.");
            }
        }
    );
});

// Get Leaderboard Endpoint
app.get('/leaderboard', (req, res) => {
    db.query(
        'SELECT username, scores FROM users ORDER BY scores DESC LIMIT 5',
        (err, results) => {
            if (err) return res.status(500).send("Error retrieving leaderboard: " + err.message);
            res.status(200).json(results); // Send results as JSON
        }
    );
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
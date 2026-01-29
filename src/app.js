const express = require("express");

const app = express();

// Middleware to parse JSON
app.use(express.json({limit: "15mb"}));

// Health check (important for deployment & testing)
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

module.exports = app;

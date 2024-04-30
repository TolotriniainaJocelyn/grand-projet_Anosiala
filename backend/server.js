const express = require('express');
const corsMiddleware = require('./middleware/corsMiddleware');
const donneesRoute = require('./routes/donnees');
const app = express();

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use('/api', donneesRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

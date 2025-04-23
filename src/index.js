const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Simple GET endpoint
app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello from the API!',
        timestamp: new Date().toISOString(),
        data: {
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' }
            ]
        }
    });
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        revision: process.env.CONTAINER_APP_REVISION,
        hostname: process.env.CONTAINER_APP_HOSTNAME
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
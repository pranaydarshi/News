const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS to allow requests from all origins (*).
app.use(cors());

// Serve the static files (index.html, style.css, etc.) from a "public" folder.
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

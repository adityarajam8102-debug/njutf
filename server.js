const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS, Images) from the current directory
app.use(express.static(path.join(__dirname)));

// Main route to serve the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`\n---------------------------------------------------`);
    console.log(`❤️  Anniversary Website Server Running!  ❤️`);
    console.log(`---------------------------------------------------`);
    console.log(`👉 Open your browser at: http://localhost:${PORT}`);
    console.log(`---------------------------------------------------\n`);
});

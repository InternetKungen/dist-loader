import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Get the port from the environment variable
const PORT = process.env.PORT || 5001;

// The __dirname is the absolute path to this directory
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Create the express app
const app = express();

// Path to the dist folder
const distPath = path.join(__dirname, '..', 'dist');

// Serve the dist folder
app.use(express.static(distPath));

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Servern kör på http://localhost:${PORT}`);
});

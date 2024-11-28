import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

// Ladda miljövariabler från .env
dotenv.config();

// Hämta PORT från .env-filen eller använd 5001 som standard
const PORT = process.env.PORT || 5001;

// Skapa Express-app
const app = express();

// Sökvägen till dist-mappen
const distPath = path.join(__dirname, '..', 'dist');

// Dela ut statiska filer från dist-mappen
app.use(express.static(distPath));

// Fallback för alla andra rutter till index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern kör på http://localhost:${PORT}`);
});

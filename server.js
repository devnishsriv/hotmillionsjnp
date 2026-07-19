import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve clean URLs by redirecting to hash targets on the single page
app.get('/about', (req, res) => {
  res.redirect('/#about');
});

app.get('/menu', (req, res) => {
  res.redirect('/#menu');
});

app.get('/specialties', (req, res) => {
  res.redirect('/#specialties');
});

app.get('/contact', (req, res) => {
  res.redirect('/#contact');
});

// Serve static files from root directory
app.use(express.static(__dirname));

// Direct any unmatched request to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

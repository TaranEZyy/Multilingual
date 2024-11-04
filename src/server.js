// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/locales/:lng/translation.json', (req, res) => {
  const language = req.params.lng;
  try {
    const translations = require(`./locales/${language}/translation.json`);
    res.json(translations);
  } catch (error) {
    res.status(404).json({ error: 'Translation not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Translation API running at http://localhost:${PORT}`);
});

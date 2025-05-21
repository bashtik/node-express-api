const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

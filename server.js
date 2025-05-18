const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(cors());
app.use(express.json());

app.post('/api/auth/register', (req, res) => {
  const { email, password, username } = req.body;
  // TODO: Save to DB with Prisma
  res.json({ message: 'User registered', user: { email, username }, token: 'fake-jwt' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/api/auth/signup', (req, res) => {
  // Handle signup logic
  res.send({ message: 'Signup successful' });
});

app.post('/api/auth/login', (req, res) => {
  // Handle login logic
  res.send({ message: 'Login successful' });
});

app.get('/api/auth/me', (req, res) => {
  // Handle fetching current user logic
  res.send({ user: 'User data' });
});

app.post('/api/auth/logout', (req, res) => {
  // Handle logout logic
  res.send({ message: 'Logout successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

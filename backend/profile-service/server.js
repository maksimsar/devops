import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'profile-service' });
});

app.get('/profile', (req, res) => {
  res.json({
    id: 42,
    name: 'Demo User',
    email: 'demo@example.com',
    roles: ['viewer']
  });
});

app.listen(PORT, () => {
  console.log(`profile-service listening on ${PORT}`);
});

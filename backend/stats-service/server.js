import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'stats-service' });
});

app.get('/metrics', (req, res) => {
  const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  res.json({
    requests_total: rnd(100, 1000),
    error_rate: Number((Math.random() * 0.05).toFixed(4)),
    avg_latency_ms: rnd(5, 150)
  });
});

app.listen(PORT, () => {
  console.log(`stats-service listening on ${PORT}`);
});

// backend/routes/aggregate.js
const express = require('express');
const router = express.Router();

const PROFILE_SERVICE_URL = process.env.PROFILE_SERVICE_URL || 'http://localhost:3001';
const STATS_SERVICE_URL   = process.env.STATS_SERVICE_URL   || 'http://localhost:3002';

// Node 18+ имеет глобальный fetch
router.get('/', async (req, res, next) => {
  try {
    const [profileRes, statsRes] = await Promise.all([
      fetch(`${PROFILE_SERVICE_URL}/profile`),
      fetch(`${STATS_SERVICE_URL}/metrics`)
    ]);

    const [profile, metrics] = await Promise.all([
      profileRes.json(),
      statsRes.json()
    ]);

    res.json({
      service: 'backend',
      profile,
      metrics
    });
  } catch (err) {
    next(err);
  }
});

router.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend-aggregate' });
});

module.exports = router;

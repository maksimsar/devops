## Практика 3.1: микросервисы и Compose

### Новые компоненты
- `profile-service` — `/health`, `/profile`
- `stats-service` — `/health`, `/metrics`
- Новый роут backend: `/aggregate` — агрегирует ответы двух сервисов

### Запуск
```bash
docker compose up --build -d
curl http://localhost:3001/health
curl http://localhost:3002/metrics
curl http://localhost:3000/aggregate

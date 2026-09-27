# Как запустить проект

## 1) Установка зависимостей

В корне проекта:

```bash
npm i
```

---

## 2) Переменные окружения

### CMS: apps/cms/.env

Скопируйте пример:

```bash
cd apps/cms
copy .env.example .env
```

Пример содержимого `.env`:

```env
HOST=0.0.0.0
PORT=1337

APP_KEYS="change_me_1,change_me_2"
API_TOKEN_SALT=change_me_api_token_salt
ADMIN_JWT_SECRET=change_me_admin_jwt_secret
TRANSFER_TOKEN_SALT=change_me_transfer_token_salt
JWT_SECRET=change_me_jwt_secret

DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

### Web: apps/web/.env

Скопируйте пример:

```bash
cd apps/web
copy .env.example .env
```

В `apps/web/.env` используйте адрес Strapi для текущего режима:

```env
STRAPI_URL=http://127.0.0.1:1337
# STRAPI_URL=http://cms:1337
```

> Для локального запуска активен `127.0.0.1:1337`, для Docker — закомментированный `http://cms:1337`.

---

## 3) Локальный запуск

Сначала импортируем дамп базы в Strapi:

```bash
cd apps/cms
npx strapi import --file ./data_base.tar.gz --force
```

После этого запускаем весь проект через Turborepo:

```bash
cd ../..
npm run dev
```

## 4) Docker

Сначала импортируем дамп базы:

```bash
cd apps/cms
npx strapi import --file ./data_base.tar.gz --force
```

Затем запускаем контейнеры:

```bash
cd ../..
docker compose build
docker compose up -d
```

---

# Короткий сценарий

## Локально через Turborepo

```bash
# локально: в apps/web/.env должно быть STRAPI_URL=http://127.0.0.1:1337
npm i
cd apps/cms
copy .env.example .env
npx strapi import --file ./data_base.tar.gz --force
cd ../web
copy .env.example .env
cd ../..
npm run dev
```

## Через Docker

```bash
# в Docker: в apps/web/.env должно быть STRAPI_URL=http://cms:1337
cd apps/cms
copy .env.example .env
npx strapi import --file ./data_base.tar.gz --force
cd ../web
copy .env.example .env
cd ../..
docker compose build
docker compose up -d
```



админа от cms для http://localhost:1337
admin@gmail.com
admin123


акк для входа http://localhost:3000
user@gmail.com
user123

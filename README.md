# Как развернуть проект локально

## 1) Установка зависимостей

В корне проекта:

```bash
npm i
```

## 2) Strapi CMS

Переходим в папку CMS:

```bash
cd apps/cms
```

Создаём файл `.env` на основе примера:

```bash
copy .env.example .env
```

Дальше собираем и запускаем Strapi:

```bash
npm run build

npx strapi import --file ./data_base.tar.gz.enc --force

```




После этого CMS будет доступен по адресу:

- http://localhost:1337/admin

## 3) Frontend

В другом терминале:

```bash
cd apps/web
npm run dev
```

Frontend будет доступен по адресу:

- http://localhost:3000

---

# Как развернуть через Docker

Важно: перед сборкой контейнеров сначала нужно подготовить и импортировать базу данных, чтобы она попала в Docker-образ/контекст. Иначе контейнер запустится пустым.

## 1) Подготовить переменные окружения

В папке `apps/cms` создайте `.env` из `.env.example`:

```bash
cd apps/cms
copy .env.example .env
```

Также создайте файл `apps/web/.env` для Docker:

```bash
cd apps/web
copy NUL .env
```

Внутри `.env` можно оставить примерно так:

```env
STRAPI_API_URL=http://cms:1337
NODE_ENV=production
```

## 2) Подготовить дамп базы

Если у вас уже есть готовый экспорт базы, положите его в папку `apps/cms`, например:

```bash
apps/cms/export_20260927035427.tar.gz.enc
```

Если дампа ещё нет — сначала запускаем локальный Strapi и делаем экспорт:

```bash
cd apps/cms
npm run develop
```

В другом окне:

```bash
cd apps/cms
npx strapi export --no-encrypt --file ./data_base
```

После этого файл `data_base.tar.gz` уже находится в проекте и его можно использовать в Docker.

## 3) Собрать и запустить Docker

Из корня проекта:

```bash
docker compose build
docker compose up -d
```

Если в `apps/cms` есть файл `data_base.tar.gz` (или `data_base.tar.gz.enc` для старого варианта), то контейнер при старте сам импортирует его в Strapi перед запуском приложения.

Типичный сценарий:

```bash
cd apps/cms
npx strapi export --no-encrypt --file ./data_base
cd ../..
docker compose up --build -d
```

После этого:

- CMS: http://localhost:1337
- Web: http://localhost:3000

> Ключевая идея: сначала делаем экспорт базы и кладём её рядом с проектом / в контекст сборки Docker, потом запускаем сборку. Только так база реально попадёт в контейнер и не будет пустой после старта.

---

# Быстрый сценарий

Локально:

```bash
npm i
cd apps/cms
copy .env.example .env
npm run build
npx strapi import --file ./data_base.tar.gz --force
npm run develop
```

В другом терминале:

```bash
cd apps/web
npm run dev
```

Через Docker:

```bash
cd apps/cms
copy .env.example .env
npx strapi export --no-encrypt --file ./data_base
cd ../..
docker compose up --build -d
```

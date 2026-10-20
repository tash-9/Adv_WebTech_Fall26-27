# Lab Task 1 — Product Management

## Student details

| Field | Value |
| --- | --- |
| Name | Tasfia Islam Raisha |
| ID | 23-55710-3 |
| Section | E |


## What this project does

A NestJS API, built on the course boilerplate, that stores products and employees in PostgreSQL with TypeORM. Database reads and writes stay in the service classes.

## Prerequisites

- Node.js 22 or later
- pnpm
- PostgreSQL
- Redis (the boilerplate queue module connects on startup)

## Setup

1. Open this folder: `MID/Lab_task-1/product-management`.
2. Install dependencies:

```bash
pnpm install
```

3. Create the local env file from the sample. `.env` stays on your machine. `.env.example` is the file that gets pushed.

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

4. In `.env`, set the database values to your local PostgreSQL login. The sample is:

```env
DB_CLIENT="postgres"
DB_DATABASE="product_management"
DB_USER="postgres"
DB_PASSWORD="123456"
DB_HOST="localhost"
DB_PORT="5432"
REDIS_URL="redis://localhost:6379"
PORT=5001
```

5. Create the database in PostgreSQL (pgAdmin or psql):

```sql
CREATE DATABASE product_management;
```

6. Run the migration. This creates `products` and `employees`.

```bash
pnpm run migration:run
```

7. Start Redis, then start the API:

```bash
pnpm start:dev
```

The server listens on `http://localhost:5001`.

## Endpoints

| Method | Endpoint | Behavior |
| --- | --- | --- |
| POST | /products | Create and save a product |
| GET | /products | Return all saved products |
| GET | /products/:id | Return one product |
| PATCH | /products/:id | Update one product |
| DELETE | /products/:id | Delete one product |
| POST | /employees | Create and save an employee |
| GET | /employees | Return all saved employees |
| GET | /employees/:id | Return one employee |
| PATCH | /employees/:id | Update one employee |
| DELETE | /employees/:id | Delete one employee |

### Product body

```json
{
  "name": "Notebook",
  "category": "Stationery",
  "price": 120,
  "quantity": 40
}
```

### Employee body

```json
{
  "name": "Ayesha Rahman",
  "email": "ayesha@shop.com",
  "phone": "01700000000",
  "password": "dummy123",
  "age": 28,
  "yearsOfWorking": 4
}
```

## Postman screenshots

Save successful product requests in `screenshots/` with these exact names:

| File | What to capture |
| --- | --- |
| 01-create.png | POST body and the saved product |
| 02-get-all.png | GET all, at least two products |
| 03-get-by-id.png | GET one real product id |
| 04-update.png | PATCH body and the updated product |
| 05-confirm-update.png | GET that id showing the new values |
| 06-delete.png | DELETE and the success response |
| 07-confirm-delete.png | GET all, deleted product gone |

Each shot must show the method, full URL, status code, and response body. POST and PATCH must show the JSON body. Do not show the database password.

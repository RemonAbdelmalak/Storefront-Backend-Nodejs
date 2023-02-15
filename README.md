# Storefront Backend
### Installation Instructions
### You need to run the following to install npm before anything:
`npm init`

### Dev mode
To migrate the tables to database, run the following:

`db-migrate up`

To drop the tables from the database, run the following:

`db-migrate down`


To install the app's dependencies and use the app in dev mode, run the following:

`npm run build`


To run the app in dev mode execute `npm run watch`.

### Test mode
To install the app's dependencies and use the app in test mode, run the following:

`npm run test`

NOTE: Make sure that you run `npm run build` before `npm run test` if you edit the code

### Ports
The application runs on port `3000` with database on `5432`.

### Environment variables
```
PORT=3000
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=storefront_dev
POSTGRES_DB_TEST=storefront_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=secret
ENV=dev
BCRYPT_PASSWORD = speak-friend-and-enter
SALT_ROUNDS = 10
TOKEN_SECRET = alohomora123
```

## Data Shapes
#### Product
-  id
- name
- price
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE products (

    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(50),
    price FLOAT
);
```

#### User
- id
- firstName
- lastName
- password
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (

    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(250)
);
```

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE orders (

    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    product_id uuid REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    order_status VARCHAR(50) NOT NULL
);
```

#### Order_Products
- id
- Order_id
- Product_id
- quantity of each product in the order
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE order_product(

    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_id uuid REFERENCES orders(id) ON UPDATE CASCADE ON DELETE CASCADE,
    product_id uuid REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
    quantity INTEGER NOT NULL
);
```

# Thanks for reading
- Remon Abdelmalak :)
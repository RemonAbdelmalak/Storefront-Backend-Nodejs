-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE products (

    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price FLOAT
);
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE order_product(

    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON UPDATE CASCADE ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
    quantity INTEGER NOT NULL
);

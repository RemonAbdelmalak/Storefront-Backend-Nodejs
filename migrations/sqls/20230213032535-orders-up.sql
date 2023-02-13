CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE orders (

    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    product_id uuid REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    order_status VARCHAR(50) NOT NULL
);
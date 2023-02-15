
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE order_product(

    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_id uuid REFERENCES orders(id) ON UPDATE CASCADE ON DELETE CASCADE,
    product_id uuid REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
    quantity INTEGER NOT NULL
);
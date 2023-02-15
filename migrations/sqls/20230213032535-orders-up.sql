CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE orders (

    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    order_status VARCHAR(50) NOT NULL
);
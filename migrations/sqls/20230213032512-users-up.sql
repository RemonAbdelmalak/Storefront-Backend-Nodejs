CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (

    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(250)
);
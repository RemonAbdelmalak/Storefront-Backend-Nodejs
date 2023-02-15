# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index (GET `/api/products/`)
- Show (args: product id) (GET `/api/products/:id`)
- Create (args: Product)[token required](POST `/api/products/create`)

#### Users
- Index [token required](GET `/api/users/`)
- Show (args: id)[token required](GET `/api/users/:id`)
- Create (args: User)[token required](POST `/api/users/create`)


#### Orders
- Current Order by user (args: user id)[token required](GET `/api/orders/`)
- Create Order by user [token required](POST `/api/orders/create`)
- Add Product in Order [token required](POST `/api/orders/addorderproduct/:id`)

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
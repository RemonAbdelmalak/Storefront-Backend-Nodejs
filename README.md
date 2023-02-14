











# Storefront Backend
### Installation Instructions
---
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
The application runs on port `3000` with database on `3000`.

### Environment variables
`PORT=3000
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=storefront_dev
POSTGRES_DB_TEST=storefront_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=secret
ENV=dev
BCRYPT_PASSWORD = speak-friend-and-enter
SALT_ROUNDS = 10
TOKEN_SECRET = alohomora123`

## This project contains 9 RESTful APIs
### Finally you will have to test the APIs and they are the following 

- http://localhost:3000/api/users/:id  `(GET methode and it shows a user with the given id of him/her "needs token")`

- http://localhost:3000/api/users/  `(GET methode and it index all the users "needs token")`

- http://localhost:3000/api/users/  `(POST methode and it create a users "needs token and gives token")`

- http://localhost:3000/api/products/  `(GET methode and it index all the products)`

- http://localhost:3000/api/products/  `(POST methode and it creates a product "needs token")`

- http://localhost:3000/api/products/:id  `(GET methode and it shows a product with the given id of it "needs token")`

- http://localhost:3000/api/orders  `(GET methode and it shows the order with the given id of user "needs token")`

- http://localhost:3000/api/orders  `(POST methode and it create the order with the given id of user "needs token")`


# Thanks for reading
- Remon Abdelmalak :)
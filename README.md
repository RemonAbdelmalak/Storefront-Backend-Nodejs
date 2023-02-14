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
# Thanks for reading
- Remon Abdelmalak :)
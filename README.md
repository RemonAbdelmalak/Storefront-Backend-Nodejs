#Storefront Backend

#This project contains 9 RESTful APIs

#You need to run the following to install npm:

- npm init

#Then you will need to build the project:

- npm run build

#And to test the server run:

- npm run watch

#Finally you will have to test the APIs and they are the following 

- http://localhost:3000/api/users/:id  (GET methode and it shows a user with the given id of him/her "needs token")

- http://localhost:3000/api/users/  (GET methode and it index all the users "needs token")

- http://localhost:3000/api/users/  (POST methode and it create a users "needs token and gives token")

- http://localhost:3000/api/products/  (GET methode and it index all the products)

- http://localhost:3000/api/products/  (POST methode and it creates a product "needs token")

- http://localhost:3000/api/products/:id  (GET methode and it shows a product with the given id of it "needs token")

- http://localhost:3000/api/orders  (GET methode and it shows the order with the given id of user "needs token")

- http://localhost:3000/api/orders  (POST methode and it create the order with the given id of user "needs token")

#You can also test the code using jasmine:

- npm run test

Thanks for reading :)
-Remon Abdelmalak
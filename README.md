### A shopping cart built with React, Redux (with Typescript), Material-UI, Node, MongoDB, Express

#### To install locally

1. Clone repo on your local machine:

```js
 git clone
```

Install server-side dependencies:

```js
 cd fullstack-shopping-cart
 npm install
```

Install client-side dependencies:

```js
 cd client
 npm install
```

In the root of the project create a .env file and replace the MONGODB_URI, and SESSION_SECRET env variable with your own

Start MongoDB in your local machine

```js
sudo service mongod start
```

In server.js after `mongoose.connect` uncomment (if they are commented out) these two lines to seed products in your database:

```js
const seedProducts = require('./seeds/products.js');
seedProducts();
```

cd into ./client and build the client:

```js
 npm run build
```

Now navigate back to server root directory and start the server

```js
 cd ..
 npm run start
```

Now navigate to `localhost:5000` and the app is running here
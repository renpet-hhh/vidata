# vidata

Data visualization app for learning purposes

* Index
1. [Get Started](#Get_Started)

## Get_Started

1. Clone this repo with `git clone`
2. Create an .env file and define the variables ROOT, MONGO_URI, SESSION_SECRET, PORT and NODE_ENV
    - ROOT is the absolute path to which you used `git clone`, e.g., C:\\Users\yourname\projects\vidata
    - MONGO_URI is given by https://www.mongodb.com/ (you need an account)
    - SESSION_SECRET is an arbitrary string (write anything)
    - PORT is the port to which your server will listen
    - NODE_ENV is either the string `developmment` or `production`, any should work

    Note that spaces and quotes are interpreted literally when you declare variables in the .env file

    `NODE_ENV=development` is correct, but `NODE_ENV = development` and `NODE_ENV="development"` are NOT

3. Run `npm install` to install the dependencies
4. Run `mongod` in a shell (install if you don't have it)
5. Run `npm start`
6. Go to `http://localhost:PORT/` where PORT is the port number defined in the .env file
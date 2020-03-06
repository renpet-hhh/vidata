# vidata

Website for (my own) learning purposes.
Originally, it was supposed to be a data visualization website, hence its name.

* Index
1. [Get Started](#get-started)

## Get Started

1. Clone this repo with `git clone`
2. Run `npm install` to install the dependencies
3. Run `mongod` in a shell (install if you don't have it)
4. Create an .env file and define the variables ROOT, MONGO_URI, SESSION_SECRET, PORT and NODE_ENV
    - ROOT is the absolute path to which you used `git clone`, e.g., `C:\Users\yourname\projects\vidata`
    - MONGO_URI is the URI to your database server, e.g., `mongodb://localhost:27017/Vidata`, if mongod is running on port 27017 and the database name is Vidata
    - SESSION_SECRET is an arbitrary string (write anything)
    - PORT is the port to which your server will listen
    - NODE_ENV is either the string `development` or `production`, any should work

    Example:
    ```
    ROOT=C:\Users\yourname\path\to\vidata
    MONGO_URI=mongodb://localhost:27017/Vidata
    SESSION_SECRET=alaeoalpelapoel
    PORT=9000
    NODE_ENV=development
    ```

    Note that spaces and quotes are interpreted literally when you declare variables in the .env file

    `NODE_ENV=development` is correct, but `NODE_ENV = development` and `NODE_ENV="development"` are NOT
    
5. Run `npm start`
6. Go to `http://localhost:PORT/` where PORT is the port number defined in the .env file

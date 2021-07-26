# To-Do-API

A simple CRUD compliant backend API created using NodeJS and Express framework connected to an instance MongoDB Atlas Database for a [to-do application](https://github.com/LeonEstrak/to-do-angular)

The data expected by the server is of the following shape

    Todo {
    id: String,
    message: String,
    completed: Boolean,
    }

Following are the exposed API endpoints:

| **METHOD** | Endpoint | Expected Body   | Description                                     |
| ---------- | -------- | --------------- | ----------------------------------------------- |
| **GET**    | `/todo`  | `None`          | Retrieves the complete to-do list               |
| **POST**   | `/todo`  | A `Todo` object | Adds a todo item to the list                    |
| **PUT**    | `/todo`  | A `Todo` object | Updates a todo item already present in the list |
| **DELETE** | `/todo`  | A `Todo` object | Deletes a todo item                             |

## Usage
- Install Node/NPM from [here](https://nodejs.org/en/).
- Run `git clone https://github.com/LeonEstrak/to-do-node`
- `cd` into `to-do-node` directory 
- Install dependencies by using `npm i` 
- You now need to connect the server to a personal instance of MongoDB Atlas, create a new instance of Atlas and grab the config URI
- Create a `.env` file in the root of the project paste the URI by creating a variable in the `.env` file named `ATLAS_URI` 
- Make sure that \<dbname> parameter and the \<password> parameter in the URI is replaced by their respective values
- You're now ready to Go ! Run `npm start` or `node server.js` from the root of project and the console should ideally log something like `"MongoDB Connection Established Successfully"`
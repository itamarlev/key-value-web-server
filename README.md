# Key-Value Web Server

This project is a simple web server that allows users to store, retrieve, and display key-value pairs through a RESTful API. It features a user-friendly interface for interacting with the API.

## Project Structure

```
key-value-web-server
├── src
│   ├── server.ts                # Entry point of the application
│   ├── controllers
│   │   └── keyValueController.ts # Handles key-value operations
│   ├── routes
│   │   └── keyValueRoutes.ts     # Defines API endpoints
│   ├── models
│   │   └── keyValueModel.ts      # Manages key-value storage
│   ├── views
│   │   └── index.html            # User interface
│   └── types
│       └── index.ts              # Type definitions
├── public
│   ├── css
│   │   └── styles.css            # Styles for the UI
│   ├── js
│   │   └── app.js                # Client-side JavaScript
├── key-value-web-server.postman_collection # Postman collection
├── package.json                   # npm configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/key-value-web-server.git
   ```
2. Navigate to the project directory:
   ```
   cd key-value-web-server
   ```
3. Install the dependencies:
   ```
   npm install
   ```



## Usage

1. Start the server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the user interface.

### Example Requests

**Set Key-Value Pair**
- URL: `http://localhost:3000/api/set`
- Method: `POST`
- Body:
  ```json
  {
 "key": "exampleKey",
 "value": "exampleValue"
  }

## API Endpoints

- `POST /api/set` - Store a key-value pair.
- `GET /api/get/:key` - Retrieve the value for a given key.
- `GET /api/all` - Retrieve all stored key-value pairs.
- `DELETE /api/delete/:key` - Delete a key-value pair.
- `DELETE /api/delete-all` - Delete all key-value pairs.
- `POST /api/add-random` - Add a specified number of random key-value pairs.

Get Value by Key
URL: http://localhost:3000/api/get/exampleKey
Method: GET

Get All Key-Values
URL: http://localhost:3000/api/all
Method: GET

Delete Key-Value Pair
URL: http://localhost:3000/api/delete/exampleKey
Method: DELETE

Delete All Key-Value Pairs
URL: http://localhost:3000/api/delete-all
Method: DELETE

Add Random Key-Value Pairs
URL: http://localhost:3000/api/add-random
Method: POST
Body:

{
  "count": 5
}

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.

## addition

When you make changes to your code, you simply need to restart your server if it is running. If you are using a tool like `nodemon`, it will automatically restart the server for you whenever it detects changes in your code. 

To install `nodemon`, you can run:
```
npm install -g nodemon
```

Then, you can start your server with:
```
nodemon src/server.ts
```

This way, `nodemon` will watch for changes in your code and automatically restart the server, saving you the hassle of manually restarting it each time you make a change.

Sure, let's update the README file to include instructions on how to use the Postman collection.

**README.md**:
```markdown
# Key-Value Web Server

A simple web server for storing and retrieving key-value pairs.

## Project Structure

```
key-value-web-server
├── src
│   ├── server.ts                 # Entry point for the server
│   ├── controllers
│   │   └── 

keyValueController.ts

 # Controller for handling key-value operations
│   ├── routes
│   │   └── keyValueRoutes.ts     # Routes for key-value operations
│   ├── models
│   │   └── keyValueModel.ts      # Model for key-value storage
│   ├── views
│   │   └── index.html            # HTML file for the UI
│   ├── public
│   │   ├── css
│   │   │   └── styles.css        # Styles for the UI
│   │   └── js
│   │       └── app.js            # Client-side JavaScript
├── 

package.json

                  # npm configuration
├── 

tsconfig.json

                 # TypeScript configuration
└── 

README.md

                     # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/key-value-web-server.git
   ```
2. Navigate to the project directory:
   ```
   cd key-value-web-server
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the user interface.

## API Endpoints

- `POST /api/set` - Store a key-value pair.
- `GET /api/get/:key` - Retrieve the value for a given key.
- `GET /api/all` - Retrieve all stored key-value pairs.
- `DELETE /api/delete/:key` - Delete a key-value pair.
- `DELETE /api/delete-all` - Delete all key-value pairs.
- `POST /api/add-random` - Add a specified number of random key-value pairs.

### Example Requests

**Set Key-Value Pair**
- URL: `http://localhost:3000/api/set`
- Method: `POST`
- Body:
  ```json
  {
    "key": "exampleKey",
    "value": "exampleValue"
  }
  ```

**Get Value by Key**
- URL: `http://localhost:3000/api/get/exampleKey`
- Method: `GET`

**Get All Key-Values**
- URL: `http://localhost:3000/api/all`
- Method: `GET`

**Delete Key-Value Pair**
- URL: `http://localhost:3000/api/delete/exampleKey`
- Method: `DELETE`

**Delete All Key-Value Pairs**
- URL: `http://localhost:3000/api/delete-all`
- Method: `DELETE`

**Add Random Key-Value Pairs**
- URL: `http://localhost:3000/api/add-random`
- Method: `POST`
- Body:
  ```json
  {
    "count": 5
  }
  ```

## Using Postman

1. Download and install [Postman](https://www.postman.com/downloads/).
2. Open Postman and import the provided Postman collection file key-value-web-server.postman_collection
   - Click on the `Import` button in the top left corner of the Postman app.
   - Select the key-value-web-server.postman_collection file from your file system.
3. The collection will be imported and you will see a list of pre-configured API requests.
4. You can now use these requests to interact with the key-value web server.

### Postman Collection

The Postman collection includes the following requests:
- `Set Key-Value Pair`
- `Get Value by Key`
- `Get All Key-Values`
- `Delete Key-Value Pair`
- `Delete All Key-Value Pairs`
- `Add Random Key-Value Pairs`

Each request is pre-configured with the appropriate URL, method, and body (if applicable). You can modify the requests as needed and send them to the server to test the API endpoints.

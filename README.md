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
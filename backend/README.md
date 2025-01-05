# RideFlow Backend

## API Endpoints

### User Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}

```

#### Response
If the request is successful, the response will have a status of 200 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.
- `message` (string): A message indicating the result of the request.

Example:
```json
{
  "success": true,
  "message": "User registered successfully."
}
```

If the request fails, the response will have a status of 400 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.
- `message` (string): A message indicating the reason for the failure.

Example:
```json
{
  "success": false,
  "message": "Invalid email address."
}
```

### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user.
- `password` (string, required): The password for the user account.

Example:
```json
{
  "email":  "test@test.com",
    "password": "password123"
    }
```

#### Response
If the request is successful, the response will have a status of 200 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.
- `message` (string): A message indicating the result of the request.
- `token` (string): A JWT token that can be used to authenticate future requests.

Example:
```json
{
  "success": true,
  "message": "Login
    "token":
    }

If the request fails, the response will have a status of 400 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.

- `message` (string): A message indicating the reason for the failure.

Example:
```json
{
  "success": false,
  "message": "Invalid email or password."
}
```

### GET /users/profile

#### Description
This endpoint is used to get the profile information of the currently logged in user.

#### Request Headers
The request should include an `Authorization` header with the JWT token obtained during login.

Example:
```
Authorization: Bearer <token>
```

#### Response
If the request is successful, the response will have a status of 200 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.
- `data` (object): An object containing the profile information of the user.

Example:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "email@email.com"
    }
}
```

### GET /users/logout

#### Description
This endpoint is used to log out the currently logged in user.

#### Request Headers
The request should include an `Authorization` header with the JWT token obtained during login.

Example:
```
Authorization: Bearer <token>
```

#### Response
If the request is successful, the response will have a status of 200 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.
- `message` (string): A message indicating the result of the request.

Example:
```json
{
  "success": true,
  "message": "User logged out successfully."
}
```

## Captain Endpoints

### POST /captains/register

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain account. Must be at least 6 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be a number.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto rickshaw`.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}

```

#### Response
If the request is successful, the response will have a status of 200 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.
- `message` (string): A message indicating the result of the request.

Example:
```json
{
  "success": true,
  "message": "Captain registered successfully."
}
```
### POST /captains/login

#### Description
This endpoint is used to log in an existing captain.

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the captain.
- `password` (string, required): The password for the captain account.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response
If the request is successful, the response will have a status of 200 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.
- `message` (string): A message indicating the result of the request.
- `token` (string): A JWT token that can be used to authenticate future requests.

Example:
```json
{
  "success": true,
  "message": "Login successful.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiaWF0IjoxNjA5MjYxMzQ5LCJleHAiOjE2MDkyNjQ5NDl9.8ZqYqCvYh0FjRkPzUf4M1dQ7yG6wqR3oGy6U8L5o1Ko"
}
```

If the request fails, the response will have a status of 400 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.
- `message` (string): A message indicating the reason for the failure.

Example:
```json
{
  "success": false,
  "message": "Invalid email or password."
}
```

### GET /captains/profile

#### Description
This endpoint is used to get the profile information of the currently logged in captain.

#### Request Headers
The request should include an `Authorization` header with the JWT token obtained during login.

Example:
```
Authorization: Bearer <token>
```

#### Response
If the request is successful, the response will have a status of 200 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.
- `data` (object): An object containing the profile information of the captain.

Example:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### GET /captains/logout

#### Description
This endpoint is used to log out the currently logged in captain.

#### Request Headers
The request should include an `Authorization` header with the JWT token obtained during login.

Example:
```
Authorization: Bearer <token>
```

#### Response
If the request is successful, the response will have a status of 200 and a JSON object with the following fields:

- `success` (boolean): Indicates whether the request was successful.
- `message` (string): A message indicating the result of the request.

Example:
```json
{
  "success": true,
  "message": "Captain logged out successfully."
}
```


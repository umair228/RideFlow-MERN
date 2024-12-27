# RideFlow Backend

## API Endpoints

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
# Errors & Error Handling 
- Error handling esures that when something goes wrong in your application, the error is caught, processed, and appropriately communicated to the user without causing the app to crash. 
- This may involve validation errors, runtime errors, database connection issues, or other unexpected exceptions. 
- Express.js handles errors through middleware functions

# Error-handling middleware 
- It is a function in express that takes in 4 arguments (request, response, nextFunction and error)
- It can be placed at any point in the request-response cycle but is often placed after route definitions to catch errors generated during request processing.

# Reason for error handling in Expressjs 
1. To prevent application crashes
2. To provide meaningful error messages
3. To improve debugging 
4. To comply with standards and regulations

# Http status codes 
- Used to indicate the type of error that occurred.
- Error codes are numeric or alphanumeric codes that indicate an error has occurred and, when possible, the reason for the error. 
- These help users and developers understand and address issues effectively. 
- 2xx (successful) : ndicate that the request was successfully received, understood, and accepted
- 3xx (redirection) : Require further action to complete the request
- 4xx (client error) : Indicate that the client sent a request that the server could not process
- 5xx (server error) : Indicate that the server encountered an error while processing the request
- Examples : 
- 1. 400 - Bad request
- 2. 401 - unauthorized 
- 3. 403 - forbidden
- 4. 404 - Not found
- 5. 500 - Internal server error 
- 6. 502 - Bad gateway 
- 7. 503 - service unavailable


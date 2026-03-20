#RESTful API Activity - Olivar, Jhonrick I. 

1. Environment Variables

Why did we put BASE_URI in .env instead of hardcoding it?
Answer:
We stored BASE_URI in the .env file to make the application more secure and flexible. 
Hardcoding values makes them difficult to change and exposes sensitive information.
Using environment variables allows easy configuration changes across different environments (development, testing, production) 
without modifying the source code.

2. Resource Modeling

Why did we use plural nouns (e.g., /dishes) for our routes?
Answer:
Plural nouns are used in RESTful APIs to represent collections of resources. 
This follows standard conventions and makes the API more consistent, predictable, and easier to understand.

3. Status Codes

When do we use 201 Created vs 200 OK?
Answer:
201 Created is used when a new resource is successfully created (usually in POST requests).
200 OK is used when a request is successful but does not create a new resource (such as GET or PUT requests).

Why is it important to return 404 instead of just an empty array or a generic error?
Answer:
Returning 404 clearly indicates that the requested resource does not exist. An empty array or generic error may confuse users by suggesting the request was successful but returned no data. Proper status codes improve clarity and error handling.

4. Testing
<img width="656" height="57" alt="Screenshot (316)" src="https://github.com/user-attachments/assets/b9d66f9e-7bd5-4b64-8737-97b79d0d5b4c" />



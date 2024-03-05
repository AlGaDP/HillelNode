# Start project 
TOKEN_SECRET_KEY is taken from .env
To start the project you need to create your own .env file and specify TOKEN_SECRET_KEY in it. 
Example:
TOKEN_SECRET_KEY = "mySecretKey"

# Example of PAYLOAD in a token
{
  "userId": "2",
  "username": "john_doe2",
  "email": "john2@example.com",
  "iat": 1709652606,
  "exp": 1709653506
}

# Example of a ready token for testing
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwidXNlcm5hbWUiOiJqb2huX2RvZTIiLCJlbWFpbCI6ImpvaG4yQGV4YW1wbGUuY29tIiwiaWF0IjoxNzA5NjUyNjA2LCJleHAiOjE3MDk2NTM1MDZ9.QsitFiTG0Ep67AecmRik3OiPUH-NAsLS6fdvKmLf47cc

# Refresh token(example) 

curl --location --request POST 'http://localhost:3000/api/auth/refresh-token' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwidXNlcm5hbWUiOiJqb2huX2RvZSIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsImlhdCI6MTcwOTY1MjQxMSwiZXhwIjoxNzA5NjUzMzExfQ.UBeKH_6qlvNd9xbmujS1r4S3EA6Loj-95YS8TGVJULA' \
--data ''
# Start project 
TOKEN_SECRET_KEY is taken from .env
To start the project you need to create your own .env file and specify TOKEN_SECRET_KEY in it. 
Example:
TOKEN_SECRET_KEY = "mySecretKey"

# Refresh token(example) 

curl --location 'http://localhost:3000/api/auth/refresh-token44' \
--header 'Content-Type: application/json' \
--data '{
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.wm5Wv6d8AM-PYhhQ2fGJDiiT8M-JctRZNaheoQTCQbI"
}'
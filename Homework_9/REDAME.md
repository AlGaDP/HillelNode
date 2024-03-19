# Create a new product in BD (example) 

curl --location --request POST 'http://localhost:3000/product' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwidXNlcm5hbWUiOiJqb2huX2RvZTIiLCJlbWFpbCI6ImpvaG4yQGV4YW1wbGUuY29tIiwiaWF0IjoxNzA5NjUyNjA2LCJleHAiOjE3MDk2NTM1MDZ9.QsitFiTG0Ep67AecmRik3OiPUH-NAsLS6fdvKmLf47c' \
--data ''

# Get product by ID (example)
curl --location 'http://localhost:3000/product65f9aa9e3a0bd97d4aac080a' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwidXNlcm5hbWUiOiJqb2huX2RvZTIiLCJlbWFpbCI6ImpvaG4yQGV4YW1wbGUuY29tIiwiaWF0IjoxNzA5NjUyNjA2LCJleHAiOjE3MDk2NTM1MDZ9.QsitFiTG0Ep67AecmRik3OiPUH-NAsLS6fdvKmLf47c' \
--data ''
# Add new data(example) 

curl --location 'http://localhost:3333/adduserdata' \
--header 'Content-Type: application/json' \
--data '    {
      "login": "sdfsfff",
      "password": "b9a1527c-2e8f-43c6-95fa-dc938b6fdc56"
    }'

# Get a list of data
curl --location 'http://localhost:3333/getuserdata'
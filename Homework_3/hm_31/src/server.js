import express from 'express'
import fs from 'fs'

const app = express()
app.use(express.json());

const createFileDB = JSON.stringify(
    {
        "users": []
    }
)

try {
    if (!fs.existsSync('db.json')) {
        fs.writeFile('db.json', createFileDB, (err) => {
            if (err) {
                console.error('Error creation file db.json:', err);
            } else {
                console.log('File db.json successfully created or exists');
            }
        });
    }
  } catch (err) {
    console.error(err);
  }

app.get('/getuserdata', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('File read error:', err);
            res.send('File read error:', err);
        } else {
            res.send(JSON.parse(data));
            console.log('User data:', data);
        }
    });
})


app.post('/adduserdata', (req, res) => {
    const newUserData = req.body;

    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('File read error:', err);
            res.status(500).send({ error: 'File read error' });
            return;
        }

        const dbJson = JSON.parse(data);
        dbJson.users.push(newUserData);

        const updatedDbJson = JSON.stringify(dbJson);

        fs.writeFile('db.json', updatedDbJson, (err) => {
            if (err) {
                console.error('Error writing user data:', err);
                res.send('Error writing user data:', err);
            } else {
                console.log('User data has been saved');
                res.send('User data has been saved');
            }
        });
    })
})

export { app }
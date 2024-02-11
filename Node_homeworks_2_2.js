const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'admin', password: 'admin123' }
];

function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        const checkUser = users.find(user => user.username === username && user.password === password);

        if (checkUser) {
            resolve(checkUser);
        } else {
            reject(new Error('User not found or invalid credentials'));
        }
    });
}

authenticateUser('user1', 'password1')
    .then(user => {
        console.log('User authenticated', user);
    })
    .catch(error => {
        console.error('Authentication failed:', error.message);
    });
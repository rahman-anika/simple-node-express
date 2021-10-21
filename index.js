const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


// const port = process.env.PORT || 3000;
const port = 5000;


app.get('/', (req, res, next) => {
    res.send('Hello I am learning node');

});

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabanti', email: 'shrabanti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Shuchorita', email: 'shuchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Sonia', email: 'sonia@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Shusmita', email: 'shusmita@gmail.com', phone: '01788888888' }


]

app.get('/users', (req, res) => {
    // res.send('Here is my users');
    const search = req.query.search;
    // use query parameter

    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);


    }

    else {
        res.send(users);


    }

});

// app.method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);

});

// dynamic api 

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);


});


app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple']);

});


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy yummy fazli');

});

app.listen(port, () => {
    console.log('Listening to port', port);

});



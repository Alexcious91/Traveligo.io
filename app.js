const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const users = [];

app.get('/home', (req, res) => {
    res.render('home.ejs');
})

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', (req, res) => {
    // const { email, password } = req.body;
    users.push({
        userId: Math.floor(Math.random() + 1000 * 6000),
        email: req.body.email,
        password: req.body.password
    });
    setTimeout(() => {
        res.redirect('login')
    }, 3000);
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) => {
    // const isValidUser = users.some(user => user.username === username && user.password === password);

    // if (!isValidUser) {
    //     res.render('login', { error: 'Incorrect credentials' })
    // } else {
    //     setTimeout(() => {
    //     }, 3000);
    // }
    res.redirect('/dashboard');
});

app.get('/password-reset', (req, res) => {
    res.render('password-reset');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs');
});

app.listen(8000, () => {
    console.log('Server started listening at http://localhost:8000/home');
});
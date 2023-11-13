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
    try {
        users.push({
            userId: Math.floor(Math.random() * 6000),
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        setTimeout(() => {
            res.redirect('login');
            console.log(users);
        }, 3000);
    } catch (error) {
        res.redirect('/register');
        console.log(error);
    }
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) => {
    res.redirect('dashboard');
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
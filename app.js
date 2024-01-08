const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

const users = [];

const mainRoutes = require('./routes/routes');

app.use('/', mainRoutes);

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    users.push({
        userId: Math.floor(Math.random() + 1000 * 6000),
        email: email,
        password: password
    });

    console.log(users);
    setTimeout(() => {
        res.redirect('login')
    }, 3000);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const emailRegex = '@';

    const userExist = users.some(user => user.name === username && user.password === password);

    if (userExist) {
        setTimeout(() => {
            res.render('dashboard')
        }, 1000);
    } else {
        res.render('login')
    }

});

app.use((req, res, next) => {
    res.status(404).render('error_views/status404')
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error_views/status500');
});

app.listen(8000, () => {
    console.log('Server started listening at http://localhost:8000/home');
});
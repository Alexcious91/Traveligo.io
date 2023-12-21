module.exports = {
    getHomePage: (req, res) => {
        res.render('home.ejs');
    },
    getLoginPage: (req, res) => {
        res.render('login.ejs');
    },
    getRegister: (req, res) => {
        res.render('register.ejs');
    },
    getPasswordReset: (req, res) => {
        res.render('password-reset.ejs');
    },
    getDashboard: (req, res) => {
        res.render('dashboard');
    },
    getBookNow: (req, res) => {
        res.render('book-now.ejs');
    }
};

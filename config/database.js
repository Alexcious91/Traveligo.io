const mongoose = require('mongoose');

const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        try {
            const connectToDB = mongoose.connect('mongodb+srv://admin:admin105@cluster0.ut0gisv.mongodb.net/?retryWrites=true&w=majority');
            console.log('Connected to database');
            resolve(connectToDB);
        } catch(err) {
            console.error('Error connecting to database:', err.message);
        }
    })
}


connectToDatabase();

module.exports = { connectToDatabase }
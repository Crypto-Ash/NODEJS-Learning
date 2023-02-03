const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://yash:yashb@cluster0.qkwbh.mongodb.net/mynodejsdb?retryWrites=true&w=majority';

const connectDB = async() => {
    try {
        await mongoose.connect(DB_URI);
        console.log('DB connection established!');
    } catch (error) {
        console.log('Error While Connecting DB - ' + error.message);
    }
};

module.exports = connectDB;
const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/Restfull-Api-Nodejs",
        {
            useNewUrlParser: true

        }).then((data) => {
            console.log(`Mongodb is connected with the server: ${data.connection.host}`);
        }).catch((err) => {
            console.log(err);
        })
}

module.exports = connectDatabase;
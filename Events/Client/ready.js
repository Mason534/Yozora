const mongoose = require("mongoose");
const { Database } = require("../../config.json");

module.exports = {
    name: "ready",
    execute(client) {
        console.log('The bot is now online!');
        client.user.setActivity('for ~help', {type: 'WATCHING'});

        if(!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("The bot is now connected to the Database!")
        }).catch((Error) => {
            console.log(Error)
        });
    }
};
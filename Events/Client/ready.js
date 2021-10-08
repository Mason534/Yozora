const mongoose = require("mongoose");
const { Database } = require("../../config.json");

module.exports = {
    name: "ready",
    execute(client) {
        console.log('The bot is now ready!')
        let servers = client.guilds.cache.size
        let servercount = client.guilds.cache.reduce((a,b) => a+b.memberCount, 0)

        const activities = [
            `${servers} servers!`,
            `over ${servercount} members!`,
            `for ~help`
        ]

        setInterval(()=>{
            const status = activities[Math.floor(Math.random()*activities.length)]
            client.user.setPresence({ activities: [{name: `${status}`, type: 'WATCHING'}]})

        }, 5000)

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
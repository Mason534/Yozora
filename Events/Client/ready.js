///const mongoose = require("mongoose");
const { Database } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ready",
    execute(client) {
        console.log('The bot is now ready!')
        let servers = client.guilds.cache.size
        let servercount = client.guilds.cache.reduce((a,b) => a+b.memberCount, 0)
        var test = client.channels.cache.find(channel => channel.id === '560019110365495296');
        const Response = new MessageEmbed()
            .setColor('FF6F52')
	        .setTitle('**Welcome to Solaris!**')
	        .setDescription(`To join our server and Roleplay along with all of our members, please follow the steps found in the <#562667291485929472> channel!\nEnjoy your time in Solaris!`)
	        .setThumbnail(client.user.avatarURL({dynamic: true }))
	        .setFooter(`If you have any problems, contact staff!`)

        const activities = [
            `${servers} servers!`,
            `over ${servercount} members!`,
            `for -help`
        ]

        setInterval(()=>{
            const status = activities[Math.floor(Math.random()*activities.length)]
            client.user.setPresence({ activities: [{name: `${status}`, type: 'WATCHING'}]})

        }, 5000)

        setInterval(() => {
            test.send({embeds: [Response]})
        }, 18000000);

        //if(!Database) return;
       // mongoose.connect(Database, {

       // }).then(() => {
        //    console.log("The bot is now connected to the Database!")
       // }).catch((Error) => {
        //    console.log(Error)
        ;
    }
};
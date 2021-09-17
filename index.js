const Discord = require('discord.js')
const dotenv = require('dotenv')
const { Intents } = Discord;
dotenv.config()

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready", () => {
    console.log('The bot is now online')
    client.user.setActivity("for ~help", {type: 'WATCHING'});
});

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong'
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'how do i join') {
        message.reply({
            content: 'follow the how to join channel'
        })
    }
})


client.login(process.env.TOKEN).catch
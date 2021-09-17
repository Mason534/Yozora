const Discord = require('discord.js')
const dotenv = require('dotenv')
const { Intents, Collection } = Discord;
dotenv.config()

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_INVITES,

    ]
})

client.commands = new Collection();
client.cooldowns = new Collection();

['eventsHandler', 'commandsHandler'].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN).catch
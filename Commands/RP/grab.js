const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'grab',
    aliases: ['grabs'],
    permissions: 'SEND_MESSAGES',
    description: "cuffs the mentioned player",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const author = message.author;
        const Target = message.mentions.users.first();

        if (!Target)
        return //message.channel.send('Please choose someone to grab!')

        message.reply(`${author} has grabbed ${Target}!`)

    }}
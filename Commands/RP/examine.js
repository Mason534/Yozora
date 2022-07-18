const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'examine',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "cuffs the mentioned player",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const author = message.author;
        const Target = message.mentions.users.first();

        if (!Target)
        return message.channel.send('Please choose someone to examine!')

        message.reply(`${author} is now examining ${Target}! What do they find?`)

    }}
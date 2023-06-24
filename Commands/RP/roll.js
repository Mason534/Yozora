const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'roll',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "rolls 0 - 20",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const author = message.author;
        const number = Math.floor(Math.random() * 21);

        message.reply(`${author} has rolled a **${number}!**`);

    }}
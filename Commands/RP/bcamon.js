const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'bcamon',
    aliases: ['bodycam'],
    permissions: 'SEND_MESSAGES',
    description: "drinks beer",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const Target = message.author;

        message.reply(`${Target} has turned on their body camera!`)

    }}
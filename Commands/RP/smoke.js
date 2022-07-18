const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'smoke',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "drinks beer",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const Target = message.author;

        message.reply(`${Target} is now smoking! Don't cough!`)

    }}
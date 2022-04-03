const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'radar',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "performs the radar command",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {
    const Target = message.author;

        message.reply(`${Target} is now running radar!`)

    }}
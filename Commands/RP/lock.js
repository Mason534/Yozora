const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'lock',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "drinks beer",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const Target = message.author;

        message.reply(`**BEEP!** ${Target} has locked their car!`)

    }}
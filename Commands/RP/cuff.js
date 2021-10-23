const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'cuff',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "cuffs the mentioned player",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const Target = message.mentions.users.first() || message.author;

        message.reply(`${Target} is now cuffed! Remember to uncuff them!`)

    }}
const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'unzip',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "uncuffs the mentioned player",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {
        const Target = message.mentions.users.first() || message.author;

        message.reply(`${Target} is now unziptied! Be free!`)

    }}
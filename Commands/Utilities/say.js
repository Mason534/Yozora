const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'say',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "",
    cooldown: 3,
    execute(message, args, commandName, client, Discord, profileData) {
    
        message.reply(args.slice().join(" "));
    }
}
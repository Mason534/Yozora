const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'seatbelt',
    aliases: ['sb'],
    permissions: 'SEND_MESSAGES',
    description: "clicks seatbelt",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {
        const Target = message.author;

        message.reply("***__Click!__***")
        .then((msg) => {
            setTimeout(function() {
            msg.edit(`${Target} *You're locked in, be safe!*`);
          }, 1000)
        })
    }
}
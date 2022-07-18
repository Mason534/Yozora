const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'hotwire',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "fueles car",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {
        const Target = message.author;

        message.reply("*Starting to hotwire, this is going take a minute!*")
        .then((msg) => {
          setTimeout(function() {
            msg.reply(`${Target} has hotwired this vehicle!`);
          }, 60000)
        })
    }
}
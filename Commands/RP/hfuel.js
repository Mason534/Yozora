const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'hfuel',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "fueles car",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {
        const Target = message.author;

        message.reply("Please wait 3 minuntes, don't forget to pay!")
        .then((msg) => {
            setTimeout(function() {
            message.channel.send(`${Target} Your car is now Fueled!`);
          }, 180000)
        })
    }
}
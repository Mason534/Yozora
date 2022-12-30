const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'charge',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "fueles electric car",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {
        const Target = message.author;

        message.reply("Please wait 40 seconds, don't forget to pay!")
        .then((msg) => {
            setTimeout(function() {
            message.channel.send(`${Target} Your car is now charged!`);
          }, 40000)
        })
    }
}
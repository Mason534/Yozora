const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fuel',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "fueles car",
    cooldown: 3,
    execute(message, args, commandName, client, Discord, profileData) {
        const Target = message.author;

        message.reply("Please wait 15 seconds, don't forget to pay!")
        .then((msg) => {
            setTimeout(function() {
            message.channel.send(`${Target} Your car is now Fueled!`);
          }, 15000)
        })
    }
}
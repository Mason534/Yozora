const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fix',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "fixes car",
    cooldown: 3,
    execute(message, args, commandName, client, Discord, profileData) {
        const Target = message.author;

        message.reply("Please wait 20 seconds for your car to be repaired")
        .then((msg) => {
            setTimeout(function() {
            message.channel.send(`${Target} Your car has been repaired, watch out next time!`);
          }, 20000)
        })
    }
}
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'tow',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "fueles car",
    cooldown: 3,
    execute(message, args, commandName, client, Discord, profileData) {
        const Target = message.author;

        message.reply("Please wait 45 seconds for the Towing Crew to arrive!")
        .then((msg) => {
            setTimeout(function() {
            msg.edit(`The crew have arrived and have begun loading your vehicle on the truck, please wait 10 seconds!`);
          }, 45000)
          setTimeout(function() {
            msg.channel.send(`${Target} Your vehicle is loaded and off to wherever it needed to go!`);
          }, 55000)
        })
    }
}
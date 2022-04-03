const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pfuel',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "fueles plane",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {
        const Target = message.author;

        message.reply("Please wait 40 seconds for your plane to be fueled")
        .then((msg) => {
            setTimeout(function() {
            message.channel.send(`${Target} Your plane is now Fueled!`);
          }, 45000)
        })
    }
}
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'charge',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "fueles electric car",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {
        const Target = message.author;

        const profileModel = require("../../Models/profileSchema");
        const user = await profileModel.findOne({ userID: Target.id });
        if(user.isCuffed){
            return message.reply("You can't do this action while you're cuffed!");
        } 

        message.reply("Please wait 40 seconds, don't forget to pay!")
        .then((msg) => {
            setTimeout(function() {
            message.channel.send(`${Target} Your car is now charged!`);
          }, 40000)
        })
    }
}
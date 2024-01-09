const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'hotwire',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "fuels car",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {
        const Target = message.author;

        const profileModel = require("../../Models/profileSchema");
        const user = await profileModel.findOne({ userID: Target.id });
        if(user.isCuffed){
            return message.reply("You can't do this action while you're cuffed!");
        } 

        message.reply("*Starting to hotwire, this is going take a minute!*")
        .then((msg) => {
          setTimeout(function() {
            msg.reply(`${Target} has hotwired this vehicle!`);
          }, 60000)
        })
    }
}
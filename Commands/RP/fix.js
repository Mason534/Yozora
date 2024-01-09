const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fix',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "fixes car",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {
        const Target = message.author;

        const profileModel = require("../../Models/profileSchema");
        const user = await profileModel.findOne({ userID: Target.id });
        if(user.isCuffed){
            return message.reply("You can't do this action while you're cuffed!");
        } 

        message.reply("Please wait 20 seconds for your car to be repaired")
        .then((msg) => {
            setTimeout(function() {
            message.channel.send(`${Target} Your car has been repaired, watch out next time!`);
          }, 20000)
        })
    }
}
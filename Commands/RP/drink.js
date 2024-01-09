const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'drink',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "drinks beer",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {

        const Target = message.author;

        const profileModel = require("../../Models/profileSchema");
        const user = await profileModel.findOne({ userID: Target.id });
        if(user.isCuffed){
            return message.reply("You can't do this action while you're cuffed!");
        } 

        message.reply(`${Target} is taking a sip!`)

    }}
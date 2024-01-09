const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'aid',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "cuffs the mentioned player",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {

        const author = message.author;
        const Target = message.mentions.users.first();

        if (!Target)
            return message.channel.send('Please choose someone to give aid!');

        const profileModel = require("../../Models/profileSchema");
        const user = await profileModel.findOne({ userID: author.id });
        if(user.isCuffed){
            return message.reply("You can't do this action while you're cuffed!");
        } 
            message.reply(`${author} is now giving aid to ${Target}!`)
    }}
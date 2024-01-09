const { MessageMentions } = require("discord.js");
const profileModel = require("../../Models/profileSchema");


module.exports = {
    name: 'cuff',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "cuffs the mentioned player",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {

        const target = message.mentions.users.first() || message.author;
        const user = await profileModel.findOne({ userID: target.id });

        if(user.isCuffed){
            message.reply(`${target} has already been cuffed by someone else!`)
        } else {
            message.reply(`${target} is now cuffed! Remember to uncuff them!`);
            await profileModel.findOneAndUpdate(
                {
                  userID: target.id,
                },
                {
                  $set: {
                    isCuffed: true
                  },
                }
              );
        }
    }}
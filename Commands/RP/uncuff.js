const { MessageMentions } = require("discord.js");
const profileModel = require("../../Models/profileSchema");


module.exports = {
    name: 'uncuff',
    aliases: ['uc'],
    permissions: 'SEND_MESSAGES',
    description: "uncuffs the mentioned player",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {
        const Target = message.mentions.users.first() || message.author;
        const user = await profileModel.findOne({ userID: Target.id });

        if(!user.isCuffed){
            message.reply(`${Target} was not cuffed to begin with? Shame on you!`);
        } else {
            message.reply(`${Target} is now uncuffed! Be free!`)
            await profileModel.findOneAndUpdate(
                {
                  userID: Target.id,
                },
                {
                  $set: {
                    isCuffed: false
                  },
                }
              );
        }
    }}
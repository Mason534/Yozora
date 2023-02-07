const { MessageEmbed } = require("discord.js")
const profileModel = require("../../Models/profileSchema");
module.exports = {
    name: "bac",
    aliases: ["inv"],
    permissions: [],
    description: "Check the user inventory",
    async execute(message, args, commandName, client, Discord, profileData) {

        const target = message.mentions.users.first() || message.author;
        const user = await profileModel.findOne({ userID: target.id });

        if(!profileData) return message.reply('I have created a profile for you!');

        try{

            if (user.bac > 0.08) {
                message.channel.send(`**${target}'s BAC is ${user.bac}**`);
                message.channel.send("https://tenor.com/view/i-think-thats-an-actual-crime-lannan-eacott-lazarbeam-thats-against-the-law-thats-a-crime-gif-18350272")
            }else 

            message.channel.send(`**${target}'s BAC is ${user.bac}**`);
            
        }catch(err){
            message.reply(`There was a problem retrieving your BAC, please contact staff!`);
            console.log(err);
        }
    },
};
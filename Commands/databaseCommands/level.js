const { MessageEmbed, AttachmentBuilder } = require("discord.js");
const canvacord = require('canvacord');
const profileModel = require("../../Models/profileSchema");
const calculateLevelXP = require('../../Models/calculateLevelXP');

module.exports = {
    name: 'level',
    aliases: ['rank'],
    permissions: 'SEND_MESSAGES',
    description: "shows someones level",
    cooldown: 10,
    async execute(message, args, commandName, client, Discord) {
        
        const target = message.mentions.users.first() || message.author;
        const user = await profileModel.findOne({ userID: target.id });

        if(!user) {
            message.reply(`${target} does not have any levels yet, try again later!`);
        }

        const Response = new MessageEmbed()
         .setAuthor(target.username, target.avatarURL({dynamic: true}))
         .setColor('PURPLE')
         .setDescription(`**You need ${calculateLevelXP(user.level) - user.xp} more xp to advance to level ${user.level + 1}!**`)
         .setFooter(`LEVEL UP! || Creator knarFennA#6313`)
         .setTimestamp(message.createdTimestamp)
       .addFields([{
         name: 'XP',
         value: `You have **${user.xp} XP!**`
     }]);
        message.reply({embeds: [Response]});

        }
    }
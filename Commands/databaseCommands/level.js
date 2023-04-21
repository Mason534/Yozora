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
         const rank = new canvacord.Rank()
            .setAvatar(target.displayAvatarURL({ size: 256 }))
            .setLevel(user.level)
            .setCurrentXP(user.xp)
            .setRequiredXP(calculateLevelXP(user.level))
            //.setStatus(target.presence.status)
            .setProgressBar('#FFC300', 'COLOR')
            .setUsername(target.username)
            .setDiscriminator(target.discriminator)
            
         message.channel.send( { 
            content: `Congratulations ${target} on reaching **${user.xp} xp!**`,
            files: [await rank.build()]
         } )

         
        /*const Response = new MessageEmbed()
         .setAuthor(target.username, target.avatarURL({dynamic: true}))
         .setColor('PURPLE')
         .setDescription(`**You need ${calculateLevelXP(user.level) - user.xp} more xp to advance to level ${user.level + 1}!**`)
         .setFooter(`LEVEL UP! || Creator knarFennA#6313`)
         .setTimestamp(message.createdTimestamp)
       .addFields([{
         name: 'XP',
         value: `You have **${user.xp} XP!**`
     }, { 
         name: 'Level',
         value: `You are level **${user.level}!**`,
         inline: true
     }]);*/

        //message.reply({embeds: [Response]});

        }
    }
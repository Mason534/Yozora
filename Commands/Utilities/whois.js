const { MessageMentions, MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
    name: 'whois',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "self explanatory ",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {
        const Target = message.mentions.users.first() || message.author;
        const Member = message.guild.members.cache.get(Target.id);

        function getUserFromMention(mention) {
            if (!mention) return;
        
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
        
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
                return client.users.cache.get(mention);
            }
        }
        
        

        const Response = new MessageEmbed()
        .setAuthor(`${Target.username}`, Target.displayAvatarURL({dynamic: true}))
        .setThumbnail(Target.displayAvatarURL({dynamic: true}))
        .setColor("PURPLE")
        .addField("Member" , `${Target} `, false)
        //.addField("Roles" , `${roless}`)
        .addField('Amount of Server Roles', `${Member.roles.cache.size}`)
        .addField("Server Member Since", `${moment(Member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-**${moment(Member.joinedAt).startOf('day').fromNow()}`)
        .addField("Discord Member Since", `${moment(Target.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-**${moment(Target.createdAt).startOf('day').fromNow()}`)
        message.reply({embeds: [Response]});



    }}
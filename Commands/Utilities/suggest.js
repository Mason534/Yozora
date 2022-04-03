const Discord = require('discord.js');


module.exports = {
    name: 'suggest',
    description: 'suggestion command',
    permission: "SEND_MESSAGES",

    async execute(message, args, client, member, guild){

        const channel = message.guild.channels.cache.get('693520401556570214'); 

        let suggestmessage = args.slice().join(' ')
        setTimeout(function() {
            message.delete()
          }, 1000)

        let suggestembed = new Discord.MessageEmbed()
        .setTitle('A new suggestion has been made:')
        .setDescription(`${suggestmessage}`)
        .setTimestamp()
        .setFooter(`${message.author.username}`)
        .setColor("FF6F52")
        

        let msg = await channel.send({embeds: [suggestembed]});

        msg.react("✅");
        msg.react("❌");

    }
};
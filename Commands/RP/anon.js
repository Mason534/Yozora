const Discord = require('discord.js');


module.exports = {
    name: 'anon',
    description: 'anon command',
    permission: "SEND_MESSAGES",

    async execute(message, args, client, member, guild){

        const channel = message.guild.channels.cache.get('700694988404817940'); 

        let suggestmessage = args.slice().join(' ')
        setTimeout(function() {
            message.delete()
          }, 100)

        let suggestembed = new Discord.MessageEmbed()
        .setTitle('**__Encrypted Message__**')
        .setDescription(`${suggestmessage}`)
        .setColor("FF6F52")
        .setFooter("CyberGhostVPN")
        
        message.channel.send({embeds: [suggestembed]});
    }
};
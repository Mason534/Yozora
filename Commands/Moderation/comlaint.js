const Discord = require('discord.js');


module.exports = {
    name: 'complaint',
    description: 'Sends any complaint someone wrote directly into staff chat.',
    permission: "SEND_MESSAGES",

    async execute(message, args, client, member, guild, profileData){

        const channel = message.guild.channels.cache.get('559349489840947250'); 

        let suggestmessage = args.slice().join(' ')
        setTimeout(function() {
            message.delete()
          }, 100)

        let suggestembed = new Discord.MessageEmbed()
        .setTitle('A new complaint has been filed!')
        .setDescription(`${suggestmessage}`)
        .setTimestamp()
        .setColor("FF6F52")
        

        channel.send({embeds: [suggestembed]}) 
    }
};
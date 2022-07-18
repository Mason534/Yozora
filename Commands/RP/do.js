const Discord = require('discord.js');


module.exports = {
    name: 'do',
    description: 'anon command',
    permission: "SEND_MESSAGES",

    async execute(message, args, client, member, guild){


        const author = message.author

        let suggestmessage = args.slice().join(' ')
        setTimeout(function() {
            message.delete()
          }, 100)

        message.channel.send(`**${author}'s action:** "*${suggestmessage}*"`)
        
    }
};
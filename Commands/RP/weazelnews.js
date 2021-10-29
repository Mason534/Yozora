const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'weazel',
    aliases: ['write'],
    permissions: 'SEND_MESSAGES',
    description: "posts a news embed",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {
        const LF = (args.slice('').join(" "))
        setTimeout(function() {
            message.delete()
          }, 1000)
        const User = message.author.username
        const Response = new MessageEmbed()
        .setTitle(`Breaking news story!`)
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setColor('RED')
	    .setDescription(`${message.author}: ${LF}`)
	    .setThumbnail('https://static.wikia.nocookie.net/nopixel/images/3/3e/Weazelnews.jpg/revision/latest/scale-to-width-down/350?cb=20190719014909')
	    .setFooter(`Reporting the right news!`)
	    .setTimestamp(message.createdTimestamp)
        
        
        message.channel.send({embeds: [Response]})

    }}
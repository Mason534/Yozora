const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'post',
    aliases: ['LF'],
    permissions: 'SEND_MESSAGES',
    description: "posts a life invader embed",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {
        const LF = (args.slice('').join(" "))
        setTimeout(function() {
            message.delete()
          }, 1000)
        const User = message.author.username
        const Response = new MessageEmbed()
        .setTitle(`New Life-Invader Post!`)
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setColor('RED')
	    .setDescription(`${message.author}: ${LF}`)
	    .setThumbnail('http://cdn.themis-media.com/media/global/images/library/deriv/595/595961.jpg')
	    .setFooter(`Life-Invader, it's tech, it's your life!`)
	    .setTimestamp(message.createdTimestamp)
        
        
        message.channel.send({embeds: [Response]})

    }}
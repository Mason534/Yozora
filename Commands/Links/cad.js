const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'cad',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "sends the cad link",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Computer Aided Dispatch')
	.setURL('https://app.sonorancad.com/#/community/menu')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`The Solaris CAD hosts everything about our daily lives in sessions! \nClick here to go to the [CAD](https://app.sonorancad.com/#/community/menu)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
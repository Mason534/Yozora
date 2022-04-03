const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'civranks',
    aliases: ['ranks'],
    permissions: 'SEND_MESSAGES',
    description: "Sends the civilian ranks link!",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Civilian Ranks!')
	.setURL('https://docs.google.com/document/d/12AiPlgdYYgAtMkRqlXOJRYcDnCrB2pfcpw-u7wfRRa4/edit')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`If you do not follow the Civ ranks, you will be warned! \nClick here to go to the [Civilian Ranks](https://docs.google.com/document/d/12AiPlgdYYgAtMkRqlXOJRYcDnCrB2pfcpw-u7wfRRa4/edit)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
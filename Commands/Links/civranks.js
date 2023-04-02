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
	.setURL('https://docs.google.com/document/d/1SA-loMRUM4-Ivcm3dN-242Qqfyxjb0qzQXpkmEQ1ROQ/edit')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`If you do not follow the Civ ranks, you will be warned! \nClick here to go to the [Civilian Ranks](https://docs.google.com/document/d/1SA-loMRUM4-Ivcm3dN-242Qqfyxjb0qzQXpkmEQ1ROQ/edit)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Yozora was called upon by ${message.author.username} || Creator knarFennA#6313`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
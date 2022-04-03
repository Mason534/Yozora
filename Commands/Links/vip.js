const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'vip',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "vip link",
    cooldown: 5,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('VIP')
	.setURL('https://docs.google.com/document/d/149MMlpxMVgHNKCW-rG2BdCJy8uIlihHX0GZkjM4S3Uw/edit?usp=sharing')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`The VIP Manual shows all the information regarding VIP ranks. \nClick here to go to the [VIP Manual](https://docs.google.com/document/d/149MMlpxMVgHNKCW-rG2BdCJy8uIlihHX0GZkjM4S3Uw/edit?usp=sharing)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'instagram',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "instagram link",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Solaris Instagram!')
	.setURL('https://www.instagram.com/solarisroleplay/')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`The Solaris Instagram is where we house some awesome session pictures! \nClick here to go to the [Solaris Instagram](https://www.instagram.com/solarisroleplay/)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Yozora was called upon by ${message.author.username} || Creator knarFennA#6313`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
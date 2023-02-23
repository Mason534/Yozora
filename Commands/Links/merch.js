const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'merch',
    aliases: ['clothes'],
    permissions: 'SEND_MESSAGES',
    description: "merch link!",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Merch!')
	.setURL('https://shop.spreadshirt.net/solaris-roleplay/')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`If you do not buy the merch, you will be scolded by Alfie! \nClick here to go to the [Merch](https://shop.spreadshirt.net/solaris-roleplay/)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Yozora was called upon by ${message.author.username} || Creator knarFennA#6313`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
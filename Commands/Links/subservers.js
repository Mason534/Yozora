const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'subservers',
    aliases: ['military', 'gamingserver'],
    permissions: 'SEND_MESSAGES',
    description: "sends the links for the other servers",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Solaris sub-servers')
	.setURL('https://ardenloncke.wixsite.com/solaris-rp')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`These are our Sub Servers! \nClick here to go to the [Solaris Military Server](https://discord.gg/Uhwc8PKGgB) \nClick here to go to the [Solaris Gaming Server](https://discord.gg/JDD9EAh)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Yozora was called upon by ${message.author.username} || Creator knarFennA#6313`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'website',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "website link",
    cooldown: 5,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Website!')
	.setURL('https://ardenloncke.wixsite.com/solaris-rp')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`The Solaris website hosts the applications for people to join the server as well as many other things! \nClick here to go to the [Website](https://ardenloncke.wixsite.com/solaris-rp)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Yozora was called upon by ${message.author.username} || Creator knarFennA#6313`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
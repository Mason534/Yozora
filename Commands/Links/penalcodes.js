const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'penalcodes',
    aliases: ['laws'],
    permissions: 'SEND_MESSAGES',
    description: "penalcodes link",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Penal Codes!')
	.setURL('https://docs.google.com/document/d/11RWKr8vDxQQwYt64ZUE7gilZ165ax4dJoWY4tjxcKPM/edit?usp=sharing')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`If you do not obey the law, you will be arrested! \nClick here to go to the [Solaris Penal Codes](https://docs.google.com/document/d/11RWKr8vDxQQwYt64ZUE7gilZ165ax4dJoWY4tjxcKPM/edit?usp=sharing)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
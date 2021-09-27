const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'civapps',
    aliases: ['characters'],
    permissions: 'SEND_MESSAGES',
    description: "sends the civ character application link",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Civilian Character Applications!')
	.setURL('https://docs.google.com/forms/d/1-BSNK10IluRcZt_Psg0p_U_5Sri_Xt7T6cgijt8EII0/edit#responses')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`The Civ Character Applicaitons are the only way to get more than one civ character. \nClick here to go to the [Civilian Character Applications](https://docs.google.com/forms/d/1-BSNK10IluRcZt_Psg0p_U_5Sri_Xt7T6cgijt8EII0/edit#responses)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
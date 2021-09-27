const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'startabusiness',
    aliases: ['business'],
    permissions: 'SEND_MESSAGES',
    description: "helps start businesses",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('How to start a Business')
	.setURL('https://ardenloncke.wixsite.com/solaris-rp')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
    .addFields([{
        name: '1', value: 'Make sure to check out the Job Manual, Civilian ranks, VIP info, and real estate properties before continuing',
    }, {
        name: '2', value: 'Make a ticket and answer the set of questions we send you',
    }, {
        name: '3', value: 'If your answers are accepted, we will ask you for your channel requirements (if you have the VIP roles)',
    }, {
        name: '4', value: 'You get the business CEO Role',
    }]);
        message.channel.send({embeds: [Response]})
    }
}
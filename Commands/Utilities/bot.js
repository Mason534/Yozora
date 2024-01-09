const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'bot',
    aliases: ['alfie'],
    permissions: 'SEND_MESSAGES',
    description: "Shows the bots commands",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('PURPLE')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`This bot is a tool your server can use in for your Roleplaying needs. This bot has been in dev since October 2021.`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Yozora was called upon by ${message.author.username} || Creator knarFennA#6313`)
	.setTimestamp(message.createdTimestamp)
    .addFields([{
        name: 'Bot name',
        value: 'Yozora',
        inline: true
    }, {
        name: 'Bot Version',
        value: '3.0.1',
        inline: true
    }, {
        name: 'Bot Status',
        value: '🟢 ***Online***  🟢',
        inline: true
    }, {
        name: 'Bot Prefix',
        value: '-',
        inline: true
    }, {
        name: 'Member count',
        value: `${client.guilds.cache.reduce((a,b) => a+b.memberCount, 0)}`,
        inline: true
    }, {
        name: 'Ping',
        value: `${client.ws.ping}ms`,
        inline: true
    }]);

        message.channel.send({embeds: [Response]})
    }
}
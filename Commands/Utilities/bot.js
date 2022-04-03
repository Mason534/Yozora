const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'bot',
    aliases: ['alfie'],
    permissions: 'SEND_MESSAGES',
    description: "Shows the bots commands",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Bot Information Embed!')
	.setURL('https://docs.google.com/document/d/11G57MPT2dfxiVUyfw8krzCxG_2AyReedWia3hRUA7VY/edit')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`This is an embed for the bot's information.\n Only use this Bot in the Bot Commands channel.\nhere is the Solaris Manual link: [Click here](https://docs.google.com/document/d/11G57MPT2dfxiVUyfw8krzCxG_2AyReedWia3hRUA7VY/edit)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
    .addFields([{
        name: 'Bot name',
        value: 'Solaris Bot',
        inline: true
    }, {
        name: 'Bot Version',
        value: '1.4.0',
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
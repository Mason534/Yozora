const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'rules',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "soalris rules",
    cooldown: 20,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Rules!')
	.setURL('https://docs.google.com/document/d/11G57MPT2dfxiVUyfw8krzCxG_2AyReedWia3hRUA7VY/edit')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`If you do not follow the rules listed below, you will be warned!`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
    .addFields([{
        name: 'Rule 1', value: 'Not-Safe-For-Work content is strictly prohibited. This includes text messages, voice messages and/or video files or streaming.',
    }, {
        name: 'Rule 2', value: 'Any form of harassment and hate speech is strictly prohibited.',
    }, {
        name: 'Rule 3', value: 'Advertising of any kind is not permitted.',
    }, {
        name: 'Rule 4', value: 'Spamming and/or trolling of any kind is not permitted.',
    }, {
        name: 'Rule 5', value: 'Threatening and/or blackmailing of any kind is strictly prohibited.',
    }, {
        name: 'Rule 6', value: 'All chats in this server should be in English. Please take other languages to direct messages.',
    }, {
        name: 'Rule 7', value: 'We do not tolerate the sharing of anyones personal information.',
    }, {
        name: 'Rule 8', value: ' Remarks about touchy subjects such as suicide, homophobia, rape etc. are strictly prohibited.',
    }, {
        name: 'Rule 9', value: 'Double-clanning is not permitted between multiple GTA 5 roleplay servers for PS4 which include real-life-rp concepts. This excludes: flight sim, ... etc.',
    }, {
        name: 'Rule 10', value: 'Mass pinging multiple roles at once is strictly prohibited.'
    }]);
        message.channel.send({embeds: [Response]})
    }
}
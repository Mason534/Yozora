const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'jobs',
    aliases: ['civjobs'],
    permissions: 'SEND_MESSAGES',
    description: "civ jobs link",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Job Manual')
	.setURL('https://docs.google.com/document/d/1csTKBt4BPvcSFNGYIEMfmQ6o7MMXMpGuZaihnFRe3dY/edit?usp=sharing')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`If you do not follow the Job manual, you will be warned! \nClick here to go to the [Job Manual](https://docs.google.com/document/d/1csTKBt4BPvcSFNGYIEMfmQ6o7MMXMpGuZaihnFRe3dY/edit?usp=sharing)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Yozora was called upon by ${message.author.username} || Creator knarFennA#6313`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
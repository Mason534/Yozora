const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'tiktok',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "tiktok link",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Solaris TikTok!')
	.setURL('https://vm.tiktok.com/ZMeBm4fUF/')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`The Solaris TikTok is our main promoting account in which we post session pictures and videos. \nClick here to go to the [Solaris TikTok](https://vm.tiktok.com/ZMeBm4fUF/)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Yozora was called upon by ${message.author.username} || Creator knarFennA#6313`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
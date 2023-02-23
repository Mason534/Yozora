const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'manual',
    aliases: ['handbook'],
    permissions: 'SEND_MESSAGES',
    description: "Sends the Solaris Manual",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
        .setTitle('Manual!')
        .setURL('https://docs.google.com/document/d/11G57MPT2dfxiVUyfw8krzCxG_2AyReedWia3hRUA7VY/edit')
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setDescription('If you do not follow the Manual, you will be warned! \nClick here to go to the [Solaris Manual](https://docs.google.com/document/d/11G57MPT2dfxiVUyfw8krzCxG_2AyReedWia3hRUA7VY/edit)')
        .setThumbnail(client.user.avatarURL({dynamic: true }))
        .setFooter(`Yozora was called upon by ${message.author.username} || Creator knarFennA#6313`)
        .setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}
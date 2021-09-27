const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'staffcommands',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "Sends the bots commands",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
     
        if (!message.member.roles.cache.has('565275714035646475')){
            return (message.reply('You do not have the correct roles to use this command!'))
        } else {
        const Response = new MessageEmbed()
    .setColor('FF6F52')
	.setTitle('Staff Command List')
	.setURL('https://ardenloncke.wixsite.com/solaris-rp')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`This is an embed for Staff Commands`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
    .addFields([{
        name: 'Link-list',
        value: ' `~rules` `~manual` `~civranks` `~jobs` `~merch` `~website` `~cad` `~penalcodes` `~civapps` `~vip` ',
        inline: true
    }, { 
        name: 'Text-List',
        value: ' `~directortdl` `~stafftdl` ',
        inline: true
    }, {
        name: 'Other',
        value: ' `~bot` ',
        inline: true
    }]);

        message.channel.send({embeds: [Response]})
    }
}}
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'guestcommands',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "Sends the bots commands",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
     
        if (message.member.roles.cache.has('559353376190627841')){
            return (message.reply('You do not have the correct roles to use this command!'))
        } else {
        const Response = new MessageEmbed()
    .setColor('FF6F52')
	.setTitle('Bot Command List')
	.setURL('https://ardenloncke.wixsite.com/solaris-rp')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`This is an embed for Bot Commands`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
    .addFields([{
        name: 'Link-list',
        value: ' `-rules` `-manual` `-civranks` `-merch` `-website` `-vip`',
        inline: true
    }, { 
        name: 'Text-List',
        value: ' `-ping` `-getstaffrole` `-say` ',
        inline: true
    }, {
        name: 'Games',
        value: ' `-hack (mention)` ',
        inline: true
    }, {
        name: 'Solaris Socials',
        value: ' `-instagram` `-tiktok` ',
        inline: true
    }, {
        name: 'Other',
        value: ' `-bot` `-av` `-serverinfo` `-whois` ',
        inline: true
        
    }]);

        message.channel.send({embeds: [Response]})
    }
}}
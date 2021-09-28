const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'commands',
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
        value: ' `~rules` `~manual` `~civranks` `~jobs` `~merch` `~website` `~cad` `~penalcodes` `~civapps` `~vip` ',
        inline: true
    }, { 
        name: 'Text-List',
        value: ' `~ping` `~getstaffrole` `~say` ',
        inline: true
    }, {
        name: 'Games',
        value: ' `more coming soon!` ',
        inline: true
    }, {
        name: 'Solaris Socials',
        value: ' `~instagram` `~tiktok` ',
        inline: true
    }, {
        name: 'Solaris Sub-Servers',
        value: ' `~subservers` ',
        inline: true
    }, {
        name: 'Other',
        value: ' `~bot` `~av`',
        inline: true
    }]);

        message.channel.send({embeds: [Response]})
    }
}}
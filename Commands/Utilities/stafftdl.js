const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'stafftdl',
    aliases: [''],
    permissions: 'MANAGE_CHANNELS',
    description: "nah",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
     if(!message.member.roles.cache.has('565275714035646475'))
     return(message.channel.send('You do not have the correct roles for that!'))
     else {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	    .setTitle('')
	    .setURL('')
	    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
    	    .setDescription(``)
        	.setThumbnail(client.user.avatarURL({dynamic: true }))
    	    .setFooter(`Solaris Bot was called upon by ${message.author.username}`)
    	    .setTimestamp(message.createdTimestamp)
            .addFields([{
                name: '1', value: 'Tickets and Applications!',
            }, {
                name: '2', value: 'Empty',
            }, {
                name: '3', value: 'Empty',
            }, {
                name: '4', value: 'Empty',
            }]);
            message.channel.send({embeds: [Response]})

    }
}}
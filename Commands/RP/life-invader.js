const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'post',
    aliases: ['LF'],
    permissions: 'SEND_MESSAGES',
    description: "posts a life invader embed",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {

        const channel = message.guild.channels.cache.get('693829458431574066');

        const LF = (args.slice('').join(" "))
        setTimeout(function() {
            message.delete()
          }, 500)
        
        const Response = new MessageEmbed()
        .setTitle(`New Life-Invader Post!`)
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setColor('RED')
	      .setDescription(`${message.author}: ${LF}`)
	      .setThumbnail('http://cdn.themis-media.com/media/global/images/library/deriv/595/595961.jpg')
	      .setFooter(`Life-Invader, it's tech, it's your life!`)
	      .setTimestamp(message.createdTimestamp)
        
        
        let msg = await message.channel.send({embeds: [Response]});

        msg.react("👍");
        msg.react("👎");

    }}
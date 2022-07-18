const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'text',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "posts a life invader embed",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {

        const author = message.author
        const Target = message.mentions.users.first();

        if (!Target)
        return message.channel.send('Please choose someone to text!')

        const LF = (args.slice('').join(" "))
        setTimeout(function() {
          message.delete()
        }, 500)
        
        const Response = new MessageEmbed()
        .setColor('GREEN')
          .setTitle("**Ding!**")
	      .setThumbnail('https://images.macrumors.com/t/xhjvyZvcvdWDIi846TArb8MFzzk=/1600x/article-new/2020/07/messagesicon-200x200.png')
	      .setFooter(`Text more using our app!`)
	      .setTimestamp(message.createdTimestamp)
          .addFields({
            name: 'Message:',
            value: `${author}: ${LF}`,
            inline: false
        });
        
        Target.createDM().then(ch => {
          ch.send({ embeds: [Response] })
        });

        message.channel.send({
          content: `Your text was sent via DMs to ${Target}`,
          ephemeral: true,
        });
      
    }}
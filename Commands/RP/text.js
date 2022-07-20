const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'text',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "posts a life invader embed",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {

        //const Wiretap2 = message.channel.id("610902577969627246")
        const msg      = message.id
        const author   = message.author
        const Target   = message.mentions.users.first();

        if (!Target)
        return message.channel.send('Please choose someone to text!')

        const LF = (args.slice('').join(" "))

        //const LF2 =  setTimeout(function() {
        //   message.delete()
        //}, 500)
        
        //message.delete(`${msg}`)

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

        const Wiretap = new MessageEmbed()
        .setColor('RED')
          .setTitle("**Wire Tapped!**")
	      .setThumbnail('https://i.pinimg.com/564x/c1/85/d7/c185d77163c157008199e78f78cca13e.jpg')
	      .setFooter(`Keeping eyes on all!`)
	      .setTimestamp(message.createdTimestamp)
          .addFields({
            name: 'Message:',
            value: `${author}: ${LF}`,
            inline: false
        });

        message.guild.channels.cache.get('610902577969627246').send({embeds: [Wiretap]});
        
        Target.createDM().then(ch => {
          ch.send({ embeds: [Response] })
        });

        message.delete(`${msg}`)

        message.channel.send({
          content: `Your text was sent via DMs to ${Target}`,
          ephemeral: true,
        });
      
    }}
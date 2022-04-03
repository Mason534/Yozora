const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'guestmessage',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "sends an embed in guest chat!",
    cooldown: 3,
    execute(message, args, commandName, client, Discord, profileData) {

        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('**Welcome to Solaris!**')
	.setAuthor('Solaris Alfie Bot', client.user.avatarURL({dynamic: true}))
	.setDescription(`To join our server and Roleplay along with all of our members, please follow the steps found in the #how-to-join channel! \nEnjoy your time in Solaris!`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`If you have any problems, contact staff!`)
	.setTimestamp(message.createdTimestamp)

    message.channel.send({embeds: [Response]})
    .then((msg) => {
        setTimeout(function() {
        msg.channel.send({embeds: [Response]})
      }, 3600000)
        setTimeout(function() {
        msg.channel.send({embeds: [Response]})
      }, 7200000)
      setTimeout(function() {
        msg.channel.send({embeds: [Response]})
      }, 10800000)
      setTimeout(function() {
        msg.channel.send({embeds: [Response]})
      }, 14400000)
      setTimeout(function() {
        msg.channel.send({embeds: [Response]})
      }, 18000000)
      setTimeout(function() {
        msg.channel.send({embeds: [Response]})
      }, 21600000)
      setTimeout(function() {
       msg.channel.send({embeds: [Response]})
      },  25200000)
      setTimeout(function() {
        msg.channel.send({embeds: [Response]})
      },  28800000)
     setTimeout(function() {
        msg.channel.send({embeds: [Response]})
      },  32400000)
     setTimeout(function() {
        msg.channel.send({embeds: [Response]})
     }, 36000000)
     });
    }}
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Check the user balance",
    async execute(message, args, commandName, client, Discord, profileData) {
        
        const person = message.mentions.user.id
        const Wallet = profileData.coins
        const Bank = profileData.bank

        const Response = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setColor('ORANGE')
	    .setFooter(`Your Balances are up to date!`)
	    .setTimestamp(message.createdTimestamp)
      .addFields([{
        name: 'Wallet Balance',
        value: `You have **$${Wallet}**`
    }, { 
        name: 'Bank Balance',
        value: `You have **$${Bank}**`,
        inline: true
    }]);
    message.channel.send({embeds: [Response]})

    },
  };

  
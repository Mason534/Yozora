const { MessageEmbed } = require("discord.js")
const profileModel = require("../../Models/profileSchema");

module.exports = {
    name: "inventory",
    aliases: ["inv"],
    permissions: [],
    description: "Check the user inventory",
    async execute(message, args, commandName, client, Discord, profileData) {
        
        const Inventory = profileData.inventory
        const amount = args;

        const Response = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setColor('ORANGE')
	    .setFooter(`Your Balances are up to date!`)
	    .setTimestamp(message.createdTimestamp)
      .addFields([{
        name: 'Wallet Balance',
        value: `You have **$${Inventory}**`
    }, { 
        name: 'Bank Balance',
        value: `You have **$${Inventory}**`,
        inline: true
    }]);
    message.channel.send({embeds: [Response]})

    },
  };
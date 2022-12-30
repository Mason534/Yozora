const { MessageEmbed, User } = require("discord.js");
const model = require("../../Models/profileSchema");
const profileModel = require("../../Models/profileSchema");

module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Check the user balance",
    async execute(message, args, commandName, client, Discord, profileData) {
        
        const target = message.mentions.users.first() || message.author;
        const user = await profileModel.findOne({ userID: target.id });

        const Response = new MessageEmbed()
        .setAuthor(target.username, target.avatarURL({dynamic: true}))
        .setColor('ORANGE')
	    .setFooter(`Your Balances are up to date!`)
	    .setTimestamp(message.createdTimestamp)
      .addFields([{
        name: 'Wallet Balance',
        value: `You have **$${user.coins}**`
    }, { 
        name: 'Bank Balance',
        value: `You have **$${user.bank}**`,
        inline: true
    }]);
    message.channel.send({embeds: [Response]})

    }, catch(err) {
        message.reply(`There was a problem retrieving your inventory, please contact staff!`);
        console.log(err);
    }
  };

  
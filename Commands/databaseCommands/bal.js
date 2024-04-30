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
        .setColor('PURPLE')
	    .setFooter(`Your Balances are up to date! || Creator knarFennA#6313`)
        .setThumbnail("https://i.pinimg.com/originals/dc/9e/be/dc9ebe27d89cc4f8b8c77fb0d6871f63.jpg")
	    .setTimestamp(message.createdTimestamp)
      .addFields([{
        name: 'Wallet Balance',
        value: `You have **$${user.coins.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}**`
    }, { 
        name: 'Bank Balance',
        value: `You have **$${user.bank.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}**`,
        inline: true
    }]);
    message.channel.send({embeds: [Response]})

    }, catch(err) {
        message.reply(`There was a problem retrieving your inventory, please contact staff!`);
        console.log(err);
    }
  };

  
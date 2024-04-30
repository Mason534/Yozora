const { MessageEmbed, AttachmentBuilder } = require("discord.js");
const profileModel = require("../../Models/profileSchema");
const calculateLevelXP = require('../../Models/calculateLevelXP');

module.exports = {
    name: 'lottery',
    aliases: ['lotto'],
    permissions: 'SEND_MESSAGES',
    description: "Enters the user into a lottery",
    cooldown: 1,
    async execute(message, args, commandName, client, Discord) {
        const target = message.author;
        const user = await profileModel.findOne({ userID: target.id });

        if (!user) {
            return message.reply(`${target} does not have any levels yet, try again later!`);
        }

        // Base amount
        let ticketCost = 10;
        let minAmount = 5; // Minimum amount
        let maxAmount = 500000; // Maximum amount
        let minJackpot = Math.floor(Math.random() * 10) + 1;
        let midJackpot = Math.floor(Math.random() * 50) + 1;
        let highJackpot = Math.floor(Math.random() * 100) + 1;
        let roll1 = Math.floor(Math.random() * 50) + 1;
        let roll2 = Math.floor(Math.random() * 200) + 1;
        let roll3 = Math.floor(Math.random() * 600) + 1;

        // Calculate the range of possible amounts
        let range = Math.log10(maxAmount - minAmount + 1);
        
        // Calculate additional randomness based on user's level (if desired)
        let randomness = 0.5 - (user.level * 0.02); // Decrease randomness with user's level
        
        // Cap randomness to ensure it's within 0 to 1
        randomness = Math.min(1, Math.max(0, randomness));

        // Calculate the amount with randomness
        let exponent = Math.random() * range;
        let amount = Math.ceil(minAmount + Math.pow(10, exponent / range));

        // Cap the maximum amount at one million dollars
        amount = Math.min(amount, maxAmount);

        if(roll3 == highJackpot){
            amount += 50000;
            message.reply("🎉**__Jackpot__**!!!");
        } else if(roll2 == midJackpot){
            amount += 25000;
            message.reply("🎉**__Jackpot__**!!!");
        } else if(roll1 == minJackpot){
            amount += 300;
            message.reply("🎉**__Jackpot__**!!!");
        }

        try {
            await profileModel.findOneAndUpdate(
                {
                    userID: target.id,
                },
                {
                    $inc: {
                        coins: amount - ticketCost,
                        lotterySesh: amount - ticketCost,
                    },
                }
            );

            return message.channel.send(`This player has won **${amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}** | lost **${ticketCost}** | gaining **${(amount - ticketCost).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}!** | Session: **${(user.lotterySesh + (amount - ticketCost)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}**`);
        } catch (err) {
            console.log(err);
            return message.channel.send("Something went wrong, try again later!");
        }
    }
};

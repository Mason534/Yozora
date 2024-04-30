const { MessageEmbed, AttachmentBuilder } = require("discord.js");
const profileModel = require("../../Models/profileSchema");
const calculateLevelXP = require('../../Models/calculateLevelXP');

module.exports = {
    name: 'newsession',
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

        try {
            await profileModel.findOneAndUpdate(
                {
                    userID: target.id,
                },
                {
                    $inc: {
                        lotterySesh: -user.lotterySesh,
                    },
                }
            );

            return message.channel.send(`**New Session has been started!**`);
        } catch (err) {
            console.log(err);
            return message.channel.send("Something went wrong, try again later!");
        }
    }
};
